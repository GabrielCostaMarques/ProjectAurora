
import { useCreateUser } from "../hooks/useAuthentication";
import { getFirebaseErrorMessage } from "../Exceptions/exceptionLogin";
import { useState } from "react";

const LoginForm = () => {
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const { mutate, isError, isLoading, isSuccess } = useCreateUser();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setErrorMessage("");

        if (password !== confirmPassword) {
            setErrorMessage("As senhas precisam ser iguais");
            return;
        }

        const user = { displayName, email, password };
        mutate(user, {
            onError: (error) => {
                const systemError = getFirebaseErrorMessage(error);
                setErrorMessage(systemError);
            },
        });
    };

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input
                        type="text"
                        name="displayName"
                        required
                        placeholder="Nome de Usuário"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                </label>

                <label>
                    <span>E-mail:</span>
                    <input
                        type="email"
                        name="email"
                        required
                        placeholder="Email de Usuário"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <label>
                    <span>Senha:</span>
                    <input
                        type="password"
                        name="password"
                        required
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <label>
                    <span>Confirme sua senha:</span>
                    <input
                        type="password"
                        name="confirmPassword"
                        required
                        placeholder="Confirme sua senha"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </label>
                <button type="submit">Cadastrar</button>
                {isLoading && <p>Loading...</p>}
                {isError && <p>Error: {errorMessage}</p>}
                {isSuccess && <p>Cadastro realizado com sucesso</p>}
            </form>
        </section>
    );
};

export default LoginForm;
