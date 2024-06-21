import { createContext, useState } from "react";

export const AuthContext = createContext(0);

function AuthProvider({ children }) {
    const [logado, setLogado] = useState(false);
    const [error, setError] = useState(true);

    async function Login(email, senha) {
        if (email != "" && senha != "") {
            await fetch('http://10.133.22.38:5251/api/Login/Login', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    loginNome: email,
                    loginSenha: senha
                })
            })
            .then(res => res.json())
            .then(json => {
                if (json.usuarioId != 0)
                    setLogado(true);
            })
            .catch(err => setError(true))
        } else {
            setError(true)
        }
    }

    return (
        <AuthContext.Provider value={{ logado: logado, Login, error: error }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;