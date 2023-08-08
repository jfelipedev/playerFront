import { useEffect, useState } from "react";

const Sheet = () => {
  const [characterData, setCharacterData] = useState({});

  useEffect(() => {
    const fetchCharacterData = async () => {
      try {
        const response = await fetch(
          "https://sheets-api-psi.vercel.app/userData/"
        );
        const data = await response.json();
        setCharacterData(data);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };

    fetchCharacterData();
  }, []);

  return (
    <div>
      <h1>{characterData.nome}</h1>
      <p>Login: {characterData.login}</p>
      <p>Classe: {characterData.classe}</p>
      {/* Outras informações do personagem */}
      <h2>Atributos:</h2>
      <ul>
        <li>Defesa: {characterData.defesa}</li>
        <li>Destreza: {characterData.destreza}</li>
        <li>Inteligência: {characterData.inteligencia}</li>
        {/* Mais atributos aqui */}
      </ul>
      <h2>Vantagens:</h2>
      <p>{characterData.vantagens}</p>
      <h2>Desvantagens:</h2>
      <p>{characterData.desvantagens}</p>
      {/* Outras seções */}
    </div>
  );
};

export default Sheet;