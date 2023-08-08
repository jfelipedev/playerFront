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
    <div className="d-flex justify-content-center align items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Sign-Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="login">
              <strong>Login</strong> <br />
            </label>
            <input
              type="text"
              name="login"
              placeholder="Enter Login"
              className="form-control rounded-0"
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
              className="form-control rounded-0"
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Registrar
          </button>
          <p>
            Já possui conta? <Link to="/playerFront/login">Clique Aqui</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
