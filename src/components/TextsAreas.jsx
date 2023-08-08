import { useState, useEffect } from "react";
import axios from "axios";

// eslint-disable-next-line react/prop-types
const TextsAreas = ({ selectedId }) => {
  const [dataUser, setDataUser] = useState({});
  const [updatedData, setUpdatedData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const editableFields = ["backpack", "anotacoes", "vantagens", "desvantagens", "historia"];

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

    fetchData();g
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

  return (
    <div>
      <h2>Editor de Dados do Usuário</h2>
      {Object.keys(dataUser).map((key) => (
        editableFields.includes(key) && (
          <div key={key}>
            <h3>{key}</h3>
            <textarea
              name={key}
              value={updatedData[key] || dataUser[key]}
              onChange={handleInputChange}
            />
            <button onClick={handleSaveClick}>Salvar</button>
          </div>
        )
      ))}
      {updateSuccess && <p>Dados atualizados com sucesso!</p>}
    </div>
  );
};

export default TextsAreas;
