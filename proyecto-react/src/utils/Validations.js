const ValidateCheckout = ({ name, telephone, email, country, zipCode }) => {
  const validNameLengthRegex = /^.{2,42}$/;
  const validNameCharacters = /^[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ\s'-]*$/;

  return validNameLengthRegex.test(name) && validNameCharacters.test(name);
};

export { ValidateCheckout };
