import { useState } from "react";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

   const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
        const response = await axios.post(
            "http://localhost:5000/api/auth/login",
            {
                email,
                password
            }
        );

        

        localStorage.setItem("token", response.data.token);

console.log("Login successful");

    } catch (error) {
        console.error(error);
    }
};
    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label>Password</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;