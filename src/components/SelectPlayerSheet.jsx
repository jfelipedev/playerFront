import "./selectPlayerSheet.css";
import { useState, useEffect } from "react";
import axios from "axios";
import EquipSet from "./EquipSet";
import TextsAreas from "./TextsAreas";
import gpImage from '../assets/gp.png'
import platinumImage from '../assets/platinum.png'
import crystalImage from '../assets/crystal.png'

const SelectPlayerSheet = () => {
  const [selectedId, setSelectedId] = useState("");
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [life, setLife] = useState(0);
  const [mana, setMana] = useState(0);

  useEffect(() => {
    // Carregar o ID do usuário do Local Storage, se estiver disponível
    const savedId = localStorage.getItem("selectedId");
    if (savedId) {
      setSelectedId(savedId);
    }
  }, []); // Executado apenas uma vez após a montagem inicial

  const fetchData = async () => {
    if (selectedId) {
      try {
        setIsLoading(true);
        const response = await axios.get(
          `https://sheets-api-psi.vercel.app/userData/${selectedId}`
        );
        setUserData(response.data);
        setLife(response.data.vitalidade * 5);
        setMana(response.data.inteligencia * 3);
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
        setUserData({});
        setLife(0);
        setMana(0);
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleIdChange = (event) => {
    setSelectedId(event.target.value);
  };

  const handleIncreaseLife = () => {
    setLife((prevLife) => prevLife + 1);
  };

  const handleDecreaseLife = () => {
    setLife((prevLife) => prevLife - 1);
  };

  const handleIncreaseMana = () => {
    setMana((prevMana) => prevMana + 1);
  };

  const handleDecreaseMana = () => {
    setMana((prevMana) => prevMana - 1);
  };

  // Salvar o ID do usuário no Local Storage sempre que for buscado um novo ID
  useEffect(() => {
    if (selectedId) {
      localStorage.setItem("selectedId", selectedId);
    }
  }, [selectedId]); // Executado sempre que selectedId for alterado

  return (
    <div>
      <div className="player-sheet-main-container">
        <div className="find-sheet-container">
          <label>
            <strong> ID: </strong>
            <input
              className="find-sheet-input"
              type="text"
              value={selectedId}
              onChange={handleIdChange}
            />
          </label>
          <button className="find-sheet-button" onClick={fetchData}>
            Buscar
          </button>
        </div>

        {selectedId && userData._id ? (
          <div className="attributes-main-container">
            <div className="teste">
             <div className="your-character">
              <h2>{userData.nome}</h2>
              <img src={userData.imgURL} />
              </div>
              <h2 className="section-separator"></h2>
              <p style={{ textAlign: "center" }}> <strong> Aventureiro Classe: <span className="to-upper-case">{userData.classe}</span></strong></p>
              <h2 className="section-separator"></h2>
              <div className="life-mana-container">
                <button className="increase-decrease-button" onClick={handleIncreaseLife}>+</button>
                <strong>Life: {life}</strong>
                <button className="increase-decrease-button"  onClick={handleDecreaseLife}>-</button>
                <p></p>
                <button className="increase-decrease-button"  onClick={handleIncreaseMana}>+</button>
                <strong>Mana: {mana}</strong>
                <button className="increase-decrease-button"  onClick={handleDecreaseMana}>-</button>
              </div>
              {/* Mostrar outras informações aqui */}
              <h2 className="section-separator"></h2>
              <h2>Atributos</h2>
              
              <ul className="attributes">
                <li><strong>Força: </strong> {userData.forca}</li>
                <li><strong>Destreza: </strong>{userData.destreza}</li>
                <li><strong>Vitalidade: </strong>{userData.vitalidade}</li>
                <li><strong>Inteligência: </strong>{userData.inteligencia}</li>
                <li><strong>Defesa: </strong> {userData.defesa}</li>
                <br />
                <li><strong>Habilidade:</strong>  {userData.habilidade}</li>
                <li><strong> Sabedoria:</strong> {userData.sabedoria}</li>
              </ul>
              <h2 className="section-separator"></h2>                
              <div className="money-container">     
              <h2>Economias</h2>
              <ul className="character-money">
              <li><img src={gpImage} alt="GP Image" />{userData.gp}</li>
              <li><img src={platinumImage} alt="GP Image" />{userData.platinum}</li>
              <li><img src={crystalImage} alt="GP Image" />{userData.crystal}</li>
              </ul>              
              </div>
              <h2 className="section-separator"></h2>
            </div>
            <div>
              
            {selectedId && userData._id && (
              
              <div className="set-container">
              
                <h2>Seu Set</h2>
                   
                <div className="set-space">
                  <EquipSet />
                </div>
              </div>
            )}
            <div>
            <h2 className="section-separator"></h2>
              <TextsAreas selectedId={selectedId} />
            </div>
            </div>
          </div>
        ) : null}
      </div>

      {isLoading && <p>Carregando...</p>}

      {selectedId && !isLoading && !userData._id && <p></p>}
    </div>
  );
};

export default SelectPlayerSheet;
