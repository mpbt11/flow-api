exports.createFormBody = ({
  body: { name_category, description, type, icon },
}) => {
  return {
    name_category,
    description,
    type,
    icon,
  };
};

exports.createFormParams = ({ params: { id_category } }) => {
  return {
    id_category,
  };
};

exports.createForm = ({
  params: { id_category },
  body: { name_category, description, type, icon },
}) => {
  return {
    id_category,
    name_category,
    description,
    type,
    icon,
  };
};
