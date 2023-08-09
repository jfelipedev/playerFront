import "./Home.css";
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
    <div className="main-container-home">
      {auth ? (
        <div className="diplayed-sheet">
          <div className="nav-buttons">
            <div>
              <Link to="/playerFront/create-character">
                <button className="home-button">Criar Personagem</button>
              </Link>
              <Link to="/playerFront/update-character">
                <button className="home-button">Atualizar Personagem</button>
              </Link>
            </div>
            <div>
              <button className="home-button" onClick={handleLogout}>
                Logout
              </button>
            </div>
          </div>
          <SelectPlayerSheet />
        </div>
      ) : (
        <div className="msg-button-login">
          <h3>Faça login para acessar esta página.</h3>
          <Link to="/playerFront/login">
            <button>login</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Home;
