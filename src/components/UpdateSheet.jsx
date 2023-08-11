import "./updateSheet.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const UpdateSheet = () => {
  const [userId, setUserId] = useState("");
  const [userData, setUserData] = useState(null);
  const [updatedData, setUpdatedData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handleSearchClick = async () => {
    try {
      const response = await axios.get(
        `https://sheets-api-psi.vercel.app/userData/${userId}`
      );
      setUserData(response.data);
      setUpdateSuccess(false);
    } catch (error) {
      console.error("Erro ao buscar dados do usuário:", error);
      setUserData(null);
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.put(
        `https://sheets-api-psi.vercel.app/userData/${userId}`,
        updatedData
      );
      console.log("Dados atualizados:", response.data);
      setUpdateSuccess(true);
    } catch (error) {
      console.error("Erro ao atualizar dados:", error);
    }
  };

  return (
    <div>
      <div className="update-sheet-intro-container">
      <Link to="/playerFront">
        <button className="home-button">Meu Personagem</button>
      </Link>
      <h2>Atualizar Dados do Jogador</h2>
      <label className="find-sheet-label">
        <p>Insira o ID da Ficha:</p>
        <input className="find-sheet-input" type="text" value={userId} onChange={handleUserIdChange} />
      </label>{" "}
      <br />
      <button className="home-button" onClick={handleSearchClick}>
        Buscar
      </button>
      </div>
      {userData && (
        <form className="form-container-update" onSubmit={handleFormSubmit}>
          <h3>Atualizar Persoangem </h3>
          <p>
            Nome: <strong>{userData.nome}</strong>
          </p>
          <label>
            Classe:
            <input
              type="text"
              name="classe"
              value={updatedData.classe || ""}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Vocação:
            <input
              type="text"
              name="login"
              value={updatedData.login || ""}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Level:
            <input
              type="level"
              name="level"
              value={updatedData.level || ""}
              onChange={handleInputChange}
            />
          </label>
      
          <label>
            Força:
            <input
              type="number"
              name="forca"
              value={updatedData.forca || ""}
              onChange={handleInputChange}
            />
          </label>
        
          <label>
            Destreza:
            <input
              type="number"
              name="destreza"
              value={updatedData.destreza || ""}
              onChange={handleInputChange}
            />
          </label>
         
          <label>
            Vitalidade:
            <input
              type="number"
              name="vitalidade"
              value={updatedData.vitalidade || ""}
              onChange={handleInputChange}
            />
          </label>
       
          <label>
            Inteligência:
            <input
              type="number"
              name="inteligencia"
              value={updatedData.inteligencia || ""}
              onChange={handleInputChange}
            />
          </label>
      
          <label>
            Defesa:
            <input
              type="number"
              name="defesa"
              value={updatedData.defesa || ""}
              onChange={handleInputChange}
            />
          </label>
         
          <label>
            Habilidade:
            <input
              type="number"
              name="habilidade"
              value={updatedData.habilidade || ""}
              onChange={handleInputChange}
            />
          </label>
         
          <label>
            Sabedoria:
            <input
              type="number"
              name="sabedoria"
              value={updatedData.sabedoria || ""}
              onChange={handleInputChange}
            />
          </label>
       
          <label>
            GP:
            <input
              type="number"
              name="gp"
              value={updatedData.gp || ""}
              onChange={handleInputChange}
            />
          </label>
         
          <label>
            Platinum:
            <input
              type="number"
              name="platinum"
              value={updatedData.platinum || ""}
              onChange={handleInputChange}
            />
          </label>
          
          <label>
            Crystal:
            <input
              type="number"
              name="crystal"
              value={updatedData.crystal || ""}
              onChange={handleInputChange}
            />
          </label>
          <br />

          <button type="submit">Atualizar Personagem</button>
          {updateSuccess && <p>Dados atualizados com sucesso!</p>}
        </form>
      )}
    </div>
  );
};

export default UpdateSheet;
