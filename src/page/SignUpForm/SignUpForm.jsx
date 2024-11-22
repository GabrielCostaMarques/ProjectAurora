import { useEffect, useState } from 'react';

import { validadePasswordException } from "../../exceptions/exceptionLogin";
import styles from './SignUpForm.module.css';

import useAuthentication from '../../hooks/useAuthentication';
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const { createUser, loading, error, sucess } = useAuthentication();
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    setErrorMessage(null);
    e.preventDefault();

    const inputError = validadePasswordException(password, confirmPassword);
    if (inputError) {
      setErrorMessage(inputError);
      return errorMessage;
    }

    const user = { displayName, email, password };
    await createUser(user);


  }
  useEffect(() => {
    if (error) {
      setErrorMessage(error)
    }
    if (sucess) {
      setTimeout(() => {
        navigate("/");
      }, 800);
    }
  }, [error, sucess, navigate])

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
        {errorMessage && <p>{errorMessage}</p>}
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