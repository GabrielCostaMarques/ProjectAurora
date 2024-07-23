import { useCreateUser } from "../../hooks/useAuthentication";
import { firebaseEmailException, validadePasswordException } from "../../Exceptions/exceptionLogin";
import { useState } from "react";
import styles from './Login.module.css'

const LoginForm = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { mutate, isError, isLoading, isSuccess } = useCreateUser();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);

    const inputError = validadePasswordException(password, confirmPassword);
    if (inputError) {
      setErrorMessage(inputError);
      return;
    }

    const user = { displayName, email, password };
    
    mutate(user, {
      onError: (error) => {
        const errorApi=firebaseEmailException(error)
        setErrorMessage(errorApi);
      }
    });
  };

  return (
    <section className={styles.container}>
      <form onSubmit={handleSubmit}>
        <label className={styles.campo}>
          <span>Nome:</span>
          <input
            className={styles.inputLabel}
            type="text"
            name="displayName"
            required
            placeholder="Nome de Usuário"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>

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
        <label className={styles.campo}>
          <span>Confirme sua senha:</span>
          <input
            className={styles.inputLabel}
            type="password"
            name="confirmPassword"
            required
            placeholder="Confirme sua senha"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>

        {isLoading && <button className={styles.btnForms} type="submit">Carregando</button>}
        {!isLoading && <button className={styles.btnForms} type="submit">Cadastrar</button>}
        {isError &&
          <p>{errorMessage}</p>
        }
        {isSuccess &&
          <>
            <p>Cadastro realizado com sucesso</p>
          </>
        }
      </form>
    </section>
  );
};

export default LoginForm;
