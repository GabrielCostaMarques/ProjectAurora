import useAuthentication from "../../hooks/useAuthentication";
import { useState } from "react";
import styles from './Login.module.css'
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { signIn, loading, sucess, error } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);

    const user = { email, password };
    await signIn(user)
    if (error) {
      setErrorMessage(error)
    }
  }

  return (
    <section className={styles.container}>
      <div className={styles.containerLogin}> <form onSubmit={handleSubmit}>

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
        <label>
          <Link to={"/signUp"}>Não tem uma conta?</Link>
        </label>

        {loading && <button className={styles.btnForms} type="submit">Entrando</button>}
        {!loading && <button className={styles.btnForms} type="submit">Entrar</button>}
        {error &&
          <p>{errorMessage}</p>
        }
        {sucess &&
          <>
            <p>Cadastro realizado com sucesso</p>
          </>
        }
      </form></div>

    </section>
  );
};

export default LoginForm;
