import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// TODO CSS
/* Code fait uniquement par jayden*/

const Login = () => {


    const navigate = useNavigate();
    const [client, setClient] = useState({
        username: "",
        password: ""
    });
    const [isLoginMode, setIsLoginMode] = useState(true); // true = Login, false = Sign Up




    const handleChange = (e) => {
        const { name, value } = e.target;
        setClient({ ...client, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const url = isLoginMode
            ? "http://10.10.2.114:8982/clients/login"
            : "http://10.10.2.114:8982/clients/signup";

        try {
            const payload = isLoginMode
                ? { username: client.username, password: client.password }
                : client;

            const response = await axios.post(url, payload);

            if (isLoginMode) {
                alert("Connexion réussie !");
                localStorage.setItem("client", JSON.stringify(response.data));
                navigate("/home");
            } else {
                alert("Inscription réussie ! Connectez-vous maintenant.");
                setIsLoginMode(true);
                setClient({ ...client, password: "" });
            }

        } catch (error) {
            console.error("Erreur:", error);
            alert(error.response?.data || "Erreur lors de la requête.");
        }
    };



    const toggleMode = () => {
        setIsLoginMode(!isLoginMode);
    };

    return (
        <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", border: "1px solid #ccc", borderRadius: "8px" }}>
            <h2>{isLoginMode ? "Connexion" : "Inscription"}</h2>

            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "10px" }}>
                    <label>Nom d'utilisateur</label>
                    <input
                        type="text"
                        name="username"
                        placeholder="Nom d'utilisateur"
                        value={client.username}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                    />
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label>Mot de passe</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Mot de passe"
                        value={client.password}
                        onChange={handleChange}
                        required
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                    />
                </div>

                <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#007bff", color: "#fff", border: "none", borderRadius: "4px" }}>
                    {isLoginMode ? "Se connecter" : "S'inscrire"}
                </button>
            </form>

            <div className="text-center mt-3">
                <button onClick={toggleMode} style={{ background: "none", border: "none", color: "#007bff", cursor: "pointer" }}>
                    {isLoginMode ? "Pas encore de compte ? S'inscrire" : "Déjà un compte ? Se connecter"}
                </button>
            </div>
        </div>
    );
};

export default Login;


/*

POST /api/clients/createClient doit créer un client.

POST /api/clients/login doit valider un nom d’utilisateur et un mot de passe, et retourner un code 200 en cas de succès.

 */
