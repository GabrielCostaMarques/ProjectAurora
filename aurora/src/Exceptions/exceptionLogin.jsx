const createErrorMessage = (message) => <p className='errorMessage'>{message}</p>;

export const firebaseEmailException = (error) => {
  switch (error.code) {
    case "auth/email-already-in-use":
      return createErrorMessage("Endereço de E-mail já usado");
    case "auth/weak-password":
      return createErrorMessage("Senha deve ter pelo menos 6 caracteres");
    case "auth/invalid-credential":
      return createErrorMessage("Email ou senha incorretos");
    default:
      return createErrorMessage("Houve algum erro");
  }
};

export const validadePasswordException = (password, confirmPassword) => {
  if (password !== confirmPassword) {
    return createErrorMessage("As senhas precisam ser iguais");
  }
  return null;
};
