exports.createForm = ({
    body: {
        id_category,
        value,
        reference_day,
        start_date,
        end_date,
        type,
        flow,
    }
}) =>  {
    return {
        id_category,
        value,
        reference_day,
        start_date,
        end_date,
        type,
        flow,
    }
};