// Exceptions.jsx
export const firebaseEmailException = (error) => {
  let systemError;
  if (error.code === "auth/email-already-in-use") {
    systemError = "Endereço de E-mail já usado";
  } else {
    systemError = error.message;
  }
  return systemError;
};

export const validadePasswordException = (password, confirmPassword) => {
  let functionSet
  if (password !== confirmPassword) {
    functionSet = "As senhas precisam ser iguais";
    return functionSet;
  }

}