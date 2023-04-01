exports.createFormBody = ({
  body: { id_category, value, reference_day, start_date, end_date, type },
}) => {
  return {
    id_category,
    value,
    reference_day,
    start_date,
    end_date,
    type
  };
};

exports.createFormParams = ({ params: { id_flow_cash } }) => {
  return {
    id_flow_cash,
  };
};

exports.createForm = ({
  params: { id_flow_cash },
  body: { id_category, value, reference_day, start_date, end_date, type },
}) => {
  return {
    id_flow_cash,
    id_category,
    value,
    reference_day,
    start_date,
    end_date,
    type,
  };
};
