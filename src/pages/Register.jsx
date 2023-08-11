import './form.css'
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
  const [values, setValues] = useState({
    login: "",
    password: "",
  });

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://user-api-node-xi.vercel.app/auth/register",
        values
      );

      if (response.status === 201) {
        navigate("/playerFront/login");
      } else {
        alert("Something went wrong!");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="background">
      <div className="background-form">
        <h2>Sign Up</h2>
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
            Registrar
          </button>
          <p>
            Você já possui conta? <Link to="/playerFront/login">Clique Aqui</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
