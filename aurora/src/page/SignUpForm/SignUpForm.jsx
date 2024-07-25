import { useState } from 'react';

import { validadePasswordException } from "../../exceptions/exceptionLogin";
import styles from './SignUpForm.module.css';

import useAuthentication from '../../hooks/useAuthentication';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const {
    createUser,
    loading,
    error, sucess } = useAuthentication();
    
    const handleSubmit = async (e) => {
    setErrorMessage(null);
    e.preventDefault();
    
    
    const user = { displayName, email, password };
    const inputError = validadePasswordException(password, confirmPassword);
    
    if (inputError) {
      setErrorMessage(inputError);
      return errorMessage
    } else {
      setErrorMessage(null);
      await createUser(user)
      if (error) {
        setErrorMessage(error)
      }

    }
  }


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
        <label>
          <Link to={"/signIn"}>Já tem uma conta?</Link>
        </label>
  

        {loading && <button className={styles.btnForms.disable}>Carregando</button>}
        {!loading && <button className={styles.btnForms} type="submit">Cadastrar</button>}
        {error && <p>{errorMessage}</p>}
        {sucess &&
          <>
            <p>Cadastro Realizado com Sucesso</p>
          </>
        }
      </form>
    </section>
  );
};

export default LoginForm;
