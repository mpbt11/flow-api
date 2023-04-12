const {
  onSuccess,
  internalServerError,
} = require("../helpers/messageResponseHelpers");
const fs = require("fs");
const { uploadS3 } = require("../utils/s3Utils");

module.exports = {
  async uploadAws(req, res) {
    const bucketName = "my-flow-py";
    const file = req.file;
    const fileName = file.originalname;

    fs.readFile(file.path, (err, data) => {
      if (err) {
        return internalServerError("Falha ao ler o arquivo", res);
      }

      return uploadS3(bucketName, `imagens/${fileName}`, data)
        .then((_) => {
          return onSuccess("Upload realizado com sucesso!", res);
        })
        .catch((_) => {
          return internalServerError(
            "Falha ao realizar upload do arquivo",
            res
          );
        })
        .finally(() => deleteFileLocal(file));
    });

    return;
  },
};

const deleteFileLocal = (file) => fs.unlinkSync(file.path);
