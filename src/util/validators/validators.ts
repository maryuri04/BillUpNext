const isValidEmail = (email: string): boolean => {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

const isValidPhoneNumber = (phone: string): boolean => {
  const regex = /^\d{10}$/;
  return regex.test(phone);
}

const isValidDocument = (document: string): boolean => {
  const regex = /^\d{8,10}$/;
  return regex.test(document);
}

const isValidNit = (nit: string): boolean => {
  const regex = /^\d{9}$/;
  return regex.test(nit);
}

const isValidDigitoVerificacion = (nit: string): boolean => {
  const regex = /^\d{9}$/;
  return regex.test(nit);
}

const isValidPassword = (password: string): boolean => {
  const minLength = 8;

  // Verificar longitud
  if (password.length < minLength || password.length > 50) {
    return false;
  }

  // Verificar al menos una letra mayúscula
  const hasUpperCase = /[A-Z]/.test(password);

  // Verificar al menos una letra minúscula
  const hasLowerCase = /[a-z]/.test(password);

  // Verificar al menos un número
  const hasNumber = /\d/.test(password);

  // Verificar al menos un carácter especial
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  // Verificar que no tenga espacios en blanco
  const hasNoSpaces = !/\s/.test(password);

  return hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && hasNoSpaces;
};

export { isValidEmail, isValidPhoneNumber, isValidDocument, isValidPassword, isValidNit, isValidDigitoVerificacion };