const validate = async (value, key, schema, params) => {
  // console.log(`key is = ${key}`);

  try {
    return await schema.yupValidations[key]
      .validate(value)
      .then(value => {
        if (schema.customValidations[key])
          return schema.customValidations[key](value, params);
      })
      .catch(err => err.message);
  } catch (ex) {
    return;
  }
};

export default validate;
