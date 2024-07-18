// Exceptions.jsx
export const getFirebaseErrorMessage = (error) => {
    let systemError;
    if (error.code === "auth/email-already-in-use") {
      systemError = "Endereço de E-mail já usado";
    } else {
      systemError = error.message;
    }
    return systemError;
  };
  