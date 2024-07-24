import  { useState } from 'react';
import { useLogin } from "../../hooks/useAuthentication";

import { firebaseEmailException } from "../../Exceptions/exceptionLogin";
import styles from './Login.module.css';

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const { data,isError, isLoading, isSuccess } = useLogin();

  const useHandleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);


    const user = { email, password };
    
    data(user, {
      onError: (error) => {
        const systemError = firebaseEmailException(error);
        setErrorMessage(systemError);
        
      },
    });
  };

  return (
    <section className={styles.container}>
      <form onSubmit={useHandleSubmit}>

        <label className={styles.campo}>
          <span>E-mail:</span>
          <input
            className={styles.inputLabel}
            type="email"
            name="email"
            required
            placeholder="Email de Usuário"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className={styles.campo}>
          <span>Senha:</span>
          <input
            className={styles.inputLabel}
            type="password"
            name="password"
            required
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        {isLoading && <button className={styles.btnForms.disable} type="submit">Entrando</button>}
        {!isLoading && <button className={styles.btnForms} type="submit">Entrar</button>}
        {isError && <p>{errorMessage}</p>}
        {isSuccess && (
          <>
            <p>Cadastro realizado com sucesso</p>
          </>
        )}
      </form>
    </section>
  );
};

export default LoginForm;
