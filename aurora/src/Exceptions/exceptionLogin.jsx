
export const firebaseEmailException = (error) => {
  let systemError;
  if (error.code === "auth/email-already-in-use") {
   systemError = "Endereço de E-mail já usado";
  }
  else if(error.code==="auth/weak-password"){
    systemError="Senha deve ter pelo menos 6 Caracteres"
  }
  else {
    systemError = "Houve Algum erro";
  }
  console.log(systemError);
  return systemError;
};

export const validadePasswordException = (password, confirmPassword) => {
  let functionSet
  if (password !== confirmPassword) {
    functionSet = "As senhas precisam ser iguais";
  }
  
  console.log(functionSet);
  return functionSet;
}