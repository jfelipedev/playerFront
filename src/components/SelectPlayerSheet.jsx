import { useState, useEffect } from "react";
import "./selectPlayerSheet.css";
import axios from "axios";
import EquipSet from "./EquipSet";
import TextsAreas from "./TextsAreas";
import gpImage from "../assets/gp.png";
import platinumImage from "../assets/platinum.png";
import crystalImage from "../assets/crystal.png";
import Dice from "./Dice";

const SelectPlayerSheet = () => {
  const [selectedId, setSelectedId] = useState("");
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [life, setLife] = useState(0);
  const [mana, setMana] = useState(0);

  const ataqueForca = userData.forca;
  const ataqueDestreza = userData.destreza;
  const defesa = userData.defesa;
  const habilidade = userData.habilidade;
  const sabedoria = userData.sabedoria;

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
          
          if(response.data.login === "Cavaleiro" || response.data.login === "cavaleiro"){
            setLife(response.data.vitalidade * 5);
            setMana(response.data.inteligencia * 3);
            if(response.data.classe === "e" || response.data.classe === "E" ){
              setLife(response.data.vitalidade * 5 + 5);
              setMana(response.data.inteligencia * 3 + 3);
            } 
            if(response.data.classe === "d" || response.data.classe === "D"){
              setLife(response.data.vitalidade * 5 + 10);
              setMana(response.data.inteligencia * 3 + 6);
            } 
            if(response.data.classe === "c" || response.data.classe === "C"){
              setLife(response.data.vitalidade * 5 + 15);
              setMana(response.data.inteligencia * 3 + 9);
            } 
            if(response.data.classe === "b" || response.data.classe === "B"){
              setLife(response.data.vitalidade * 5 + 20);
              setMana(response.data.inteligencia * 3 + 12);
            } 
            if(response.data.classe === "a" || response.data.classe === "A"){
              setLife(response.data.vitalidade * 5 + 25);
              setMana(response.data.inteligencia * 3 + 15);
            } 
            if(response.data.classe === "s" || response.data.classe === "S"){
              setLife(response.data.vitalidade * 5 + 30);
              setMana(response.data.inteligencia * 3 + 18);
            } 
          } 

          if(response.data.login === "druida" || response.data.login === "Druida"){
            setLife(response.data.vitalidade * 3);
            setMana(response.data.inteligencia * 5);
            if(response.data.classe === "e" || response.data.classe === "E" ){
              setLife(response.data.vitalidade * 3 + 5);
              setMana(response.data.inteligencia * 5 + 3);
            } 
            if(response.data.classe === "d" || response.data.classe === "D"){
              setLife(response.data.vitalidade * 3 + 10);
              setMana(response.data.inteligencia * 5 + 6);
            } 
            if(response.data.classe === "c" || response.data.classe === "C"){
              setLife(response.data.vitalidade * 3 + 15);
              setMana(response.data.inteligencia * 5 + 9);
            } 
            if(response.data.classe === "b" || response.data.classe === "B"){
              setLife(response.data.vitalidade * 3 + 20);
              setMana(response.data.inteligencia * 5 + 12);
            } 
            if(response.data.classe === "a" || response.data.classe === "A"){
              setLife(response.data.vitalidade * 3 + 25);
              setMana(response.data.inteligencia * 5 + 15);
            } 
            if(response.data.classe === "s" || response.data.classe === "S"){
              setLife(response.data.vitalidade * 3 + 30);
              setMana(response.data.inteligencia * 5 + 18);
            } 
          } 
          if(response.data.login === "mago" || response.data.login === "Mago"){
            setLife(response.data.vitalidade * 3);
            setMana(response.data.inteligencia * 5);
            if(response.data.classe === "e" || response.data.classe === "E" ){
              setLife(response.data.vitalidade * 3 + 5);
              setMana(response.data.inteligencia * 5 + 3);
            } 
            if(response.data.classe === "d" || response.data.classe === "D"){
              setLife(response.data.vitalidade * 3 + 10);
              setMana(response.data.inteligencia * 5 + 6);
            } 
            if(response.data.classe === "c" || response.data.classe === "C"){
              setLife(response.data.vitalidade * 3 + 15);
              setMana(response.data.inteligencia * 5 + 9);
            } 
            if(response.data.classe === "b" || response.data.classe === "B"){
              setLife(response.data.vitalidade * 3 + 20);
              setMana(response.data.inteligencia * 5 + 12);
            } 
            if(response.data.classe === "a" || response.data.classe === "A"){
              setLife(response.data.vitalidade * 3 + 25);
              setMana(response.data.inteligencia * 5 + 15);
            } 
            if(response.data.classe === "s" || response.data.classe === "S"){
              setLife(response.data.vitalidade * 3 + 30);
              setMana(response.data.inteligencia * 5 + 18);
            } 
          } 
          if(response.data.login === "arqueiro" || response.data.login === "Arqueiro"){
            setLife(response.data.vitalidade * 4);
            setMana(response.data.inteligencia * 4);
            if(response.data.classe === "e" || response.data.classe === "E" ){
              setLife(response.data.vitalidade * 4 + 5);
              setMana(response.data.inteligencia * 4 + 3);
            } 
            if(response.data.classe === "d" || response.data.classe === "D"){
              setLife(response.data.vitalidade * 4 + 10);
              setMana(response.data.inteligencia * 4 + 6);
            } 
            if(response.data.classe === "c" || response.data.classe === "C"){
              setLife(response.data.vitalidade * 4 + 15);
              setMana(response.data.inteligencia * 4 + 9);
            } 
            if(response.data.classe === "b" || response.data.classe === "B"){
              setLife(response.data.vitalidade * 4 + 20);
              setMana(response.data.inteligencia * 4 + 12);
            } 
            if(response.data.classe === "a" || response.data.classe === "A"){
              setLife(response.data.vitalidade * 4 + 25);
              setMana(response.data.inteligencia * 4 + 15);
            } 
            if(response.data.classe === "s" || response.data.classe === "S"){
              setLife(response.data.vitalidade * 4 + 30);
              setMana(response.data.inteligencia * 4 + 18);
            } 
          } 

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

  const handleDiceRoll = async (attribute, value) => {
    try {
      const response = await axios.put(
        `https://sheets-api-psi.vercel.app/userData/${selectedId}`,
        { [attribute]: value }
      );
      console.log("Dados atualizados:", response.data);
      setUserData(response.data);
    } catch (error) {
      console.error("Erro ao atualizar dados:", error);
    }
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
              <p style={{ textAlign: "center" }}>
                {" "}
                <strong>
                  Aventureiro Classe:{" "}
                  <span className="to-upper-case">{userData.classe}</span>
                </strong>
              </p>
              <p style={{ textAlign: "center" }}>
                {" "}
                <strong>
                  Level:{" "}
                  <span className="to-upper-case">{userData.level}</span>
                </strong>
              </p>
              <p style={{ textAlign: "center" }}>
                {" "}
                <strong>
                  {" "}
                  <span>{userData.login}</span>
                </strong>
              </p>
              <h2 className="section-separator"></h2>
              <div className="life-mana-container">
                <button className="increase-decrease-button" onClick={handleIncreaseLife}>
                  +
                </button>
                <strong>Life: {life}</strong>
                <button className="increase-decrease-button" onClick={handleDecreaseLife}>
                  -
                </button>
                <p></p>
                <button className="increase-decrease-button" onClick={handleIncreaseMana}>
                  +
                </button>
                <strong>Mana: {mana}</strong>
                <button className="increase-decrease-button" onClick={handleDecreaseMana}>
                  -
                </button>
              </div>
              <h2 className="section-separator"></h2>
              <h2>Atributos</h2>

              <ul className="attributes">
                <li>
                  <strong>Força: </strong> {userData.forca}
                </li>
                <li>
                  <strong>Destreza: </strong>
                  {userData.destreza}
                </li>
                <li>
                  <strong>Vitalidade: </strong>
                  {userData.vitalidade}
                </li>
                <li>
                  <strong>Inteligência: </strong>
                  {userData.inteligencia}
                </li>
                <li>
                  <strong>Defesa: </strong> {userData.defesa}
                </li>
                <br />
                <li>
                  <strong>Habilidade:</strong> {userData.habilidade}
                </li>
                <li>
                  <strong> Sabedoria:</strong> {userData.sabedoria}
                </li>
              </ul>
              <h2 className="section-separator"></h2>
              <div className="money-container">
                <h2>Economias</h2>
                <ul className="character-money">
                  <li>
                    <img src={gpImage} alt="GP Image" />
                    {userData.gp}
                  </li>
                  <li>
                    <img src={platinumImage} alt="GP Image" />
                    {userData.platinum}
                  </li>
                  <li>
                    <img src={crystalImage} alt="GP Image" />
                    {userData.crystal}
                  </li>
                </ul>
              </div>
              <h2 className="section-separator"></h2>
              <h2>Testes</h2>
              <div className="action-buttons-container">
                <span>Ataque com Força</span>
                <Dice adicional={ataqueForca} onRoll={(result) => handleDiceRoll("set", result)} />
                <span>Ataque com Destreza</span>
                <Dice adicional={ataqueDestreza} onRoll={(result) => handleDiceRoll("set", result)} />
                <span>Teste de Defesa</span>
                <Dice adicional={defesa} onRoll={(result) => handleDiceRoll("set", result)} />
                <span>Teste de Habilidade</span>
                <Dice adicional={habilidade} onRoll={(result) => handleDiceRoll("set", result)} />
                <span>Teste de Sabedoria</span>
                <Dice adicional={sabedoria} onRoll={(result) => handleDiceRoll("set", result)} />
              </div>                 
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
