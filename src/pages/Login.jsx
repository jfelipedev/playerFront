import './form.css'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import jwtDecode from "jwt-decode"
import axios from "axios";

const Login = () => {
  const [values, setValues] = useState({
    login: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://user-api-node-xi.vercel.app/auth/login",
        values
      );

      if (response.status === 200) {
        const { token } = response.data;
        // Decodifique o token JWT para obter os dados do usuário
        const decodedToken = jwtDecode(token);

        // Verifique se o token é válido e contém as informações necessárias
        if (decodedToken.id) {
          // O token é válido e contém um ID de usuário
          // Salve o token no localStorage
          localStorage.setItem("token", token);

          navigate("/playerFront");
        } else {
          // O token não é válido ou não contém as informações esperadas
          alert("Invalid token or missing user information");
        }
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    
    <div className="background">
      <div className='rpg-title-container'>
        <div className='rpg-title'> <h1>ECOS</h1></div>
      <div className="background-form">
        <h2>Sign In</h2>
        <form className="form-login" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="login">
              <strong>Login</strong> <br />
            </label>
            <input
              type="text"
              name="login"
              placeholder="Enter Login"
              className="form-input"
              onChange={(e) => setValues({ ...values, login: e.target.value })}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong> <br />
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              className="form-input"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
          </div>          
          <button type="submit" className="entrar-button">
            Entrar
          </button>
          <p>
            Ainda não tem conta? <Link to="/playerFront/register">Clique Aqui</Link>
          </p>
        </form>
      </div>
      </div>
    </div>
  );
};

export default Login;
