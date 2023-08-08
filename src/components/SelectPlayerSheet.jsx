import { useState, useEffect } from "react";
import axios from "axios";
import EquipSet from "./EquipSet";

const SelectPlayerSheet = () => {
  const [selectedId, setSelectedId] = useState(""); // Alterado para selectedId
  const [userData, setUserData] = useState({});
  // eslint-disable-next-line no-unused-vars
  const [nomesEIds, setNomesEIds] = useState({
    Leo: "64d236b02ff61296d0bee96c",
    Lucas: "id2",
    Rafael: "id3",
    Rodrigo: "id4",
  });

  useEffect(() => {
    const fetchData = async () => {
      if (selectedId) {
        try {
          const response = await axios.get(
            `https://sheets-api-psi.vercel.app/userData/${selectedId}`
          );
          setUserData(response.data);
        } catch (error) {
          console.error("Erro ao buscar dados do usuário:", error);
          setUserData({});
        }
      }
    };

    fetchData();
  }, [selectedId]);

  const handleIdChange = (event) => {
    setSelectedId(event.target.value);
  };

  return (
    <div>
      <h1>Seu Set</h1>
      <div>
        <EquipSet />
      </div>
      <div>
        <label>
          Busque sua Ficha:{" "}
          <input type="text" value={selectedId} onChange={handleIdChange} />
        </label>
        {selectedId && userData._id ? (
          <div>
            <h2>Informações do Jogador</h2>
            <h1>{userData.nome}</h1>
            <p>Classe: {userData.classe}</p>
            {/* Mostrar outras informações aqui */}
            <h2>Atributos:</h2>
            <ul>
              {/* Resto dos atributos */}
            </ul>
            <h2>Economias:</h2>
            <ul>
              {/* Resto das economias */}
            </ul>
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
        ) : (
          selectedId && !userData._id && <p>Nenhum usuário encontrado.</p>
        )}
      </div>
    </div>
  );
};

export default SelectPlayerSheet;
