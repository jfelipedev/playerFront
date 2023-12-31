import { useState, useEffect } from "react";
import axios from "axios";
import EquipSet from "./EquipSet";

const SelectPlayerSheet = () => {
  const [selectedId, setSelectedId] = useState("");
  const [userData, setUserData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const [dataUser, setDataUser] = useState({});
  const [updatedData, setUpdatedData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (selectedId) {
        try {
          const response = await axios.get(
            `https://sheets-api-psi.vercel.app/userData/${selectedId}`
          );
          setDataUser(response.data);
        } catch (error) {
          console.error("Erro ao buscar dados do usuário:", error);
        }
      }
    };

    fetchData();
  }, [selectedId]);


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUpdatedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSaveClick = async () => {
    try {
      const response = await axios.put(
        `https://sheets-api-psi.vercel.app/userData/${selectedId}`,
        updatedData
      );
      console.log("Dados atualizados:", response.data);
      setDataUser(response.data);
      setUpdateSuccess(true);
    } catch (error) {
      console.error("Erro ao atualizar dados:", error);
    }
  };


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
      } catch (error) {
        console.error("Erro ao buscar dados do usuário:", error);
        setUserData({});
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleIdChange = (event) => {
    setSelectedId(event.target.value);
  };

  // Salvar o ID do usuário no Local Storage sempre que for buscado um novo ID
  useEffect(() => {
    if (selectedId) {
      localStorage.setItem("selectedId", selectedId);
    }
  }, [selectedId]); // Executado sempre que selectedId for alterado

  return (
    <div>
      <div>
        <label>
          Busque sua Ficha:{" "}
          <input type="text" value={selectedId} onChange={handleIdChange} />
        </label>
        <button onClick={fetchData}>Buscar</button>
        {selectedId && userData._id && (
          <div>
            <h1>Seu Set</h1>
            <div>
              <EquipSet />
            </div>
          </div>
        )}
        {selectedId && userData._id ? (
          <div>
            <h2>Informações do Jogador</h2>
            <h1>{userData.nome}</h1>
            <p>Classe: {userData.classe}</p>
            <p>Life: {userData.vitalidade * 5}</p>
            <p>Mana: {userData.inteligencia * 3}</p>
            {/* Mostrar outras informações aqui */}
            <h2>Atributos:</h2>
            <ul>
              <li>Força: {userData.forca}</li>
              <li>Destreza: {userData.destreza}</li>
              <li>Vitalidade: {userData.vitalidade}</li>
              <li>Inteligência: {userData.inteligencia}</li>
              <li>Defesa: {userData.defesa}</li>
              <br />
              <li>Habilidade: {userData.habilidade}</li>
              <li>Sabedoria: {userData.sabedoria}</li>
            </ul>
            <h2>Economias:</h2>
            <ul>{/* Resto das economias */}</ul>
            <h2>Vantagens:</h2>
            <textarea>{userData.vantagens}</textarea>
            <h2>Desvantagens:</h2>
            <textarea>{userData.desvantagens}</textarea>
            <h2>Backpack:</h2>
            <textarea>{userData.backpack}</textarea>
            <h2>História:</h2>
            <textarea>{userData.historia}</textarea>
            <h2>Anotações:</h2>
            <textarea>{userData.anotacoes}</textarea>
            {/* Outras seções */}
          </div>
        ) : null}
      </div>

      {isLoading && <p>Carregando...</p>}

      {selectedId && !isLoading && !userData._id && <p></p>}


      <div>
    
      <div>
  
        <button onClick={() => setSelectedId("")}>Limpar</button>
      </div>
      {selectedId && (
        <div>
          <h2>Editor de Dados do Usuário</h2>
          {Object.keys(dataUser).map((key) => (
            <div key={key}>
              <h3>{key}</h3>
              <textarea
                name={key}
                value={updatedData[key] || dataUser[key]}
                onChange={handleInputChange}
              />
              <button onClick={handleSaveClick}>Salvar</button>
            </div>
          ))}
          {updateSuccess && <p>Dados atualizados com sucesso!</p>}
        </div>
      )}
    </div>


    </div>
  );
};

export default SelectPlayerSheet;
