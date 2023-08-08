import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SelectPlayerSheet from "../components/SelectPlayerSheet";

const Home = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      setAuth(true);
    }
  }, []);
  const handleLogout = () => {
    // Limpar o token no localStorage
    localStorage.removeItem("token");
    setAuth(false);
  };
  return (
    <div>
      {auth ? (
        <div>
          <Link to="/create-character">
            <button>Criar Personagem</button>
          </Link>
          <h3>Bem-vindo!</h3>
          <button onClick={handleLogout}>Logout</button>
          <SelectPlayerSheet />
        </div>
      ) : (
        <div>
          <h3>Faça login para acessar esta página.</h3>
          <Link to="/login">
            <button>login</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
