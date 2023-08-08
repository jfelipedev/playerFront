import "./equipSet.css";
import { useState, useEffect } from "react";

const EquipSet = () => {
  const [weapons, setWeapons] = useState([]);
  const [selectedWeapon, setSelectedWeapon] = useState(null);

  useEffect(() => {
    const fetchWeapons = async () => {
      try {
        const response = await fetch(
          "https://items-api-sigma.vercel.app/armas/simples"
        );
        const data = await response.json();
        setWeapons(data);
      } catch (error) {
        console.error("Erro ao buscar as armas:", error);
      }
    };

    fetchWeapons();
  }, []);

  useEffect(() => {
    const savedSelectedWeapon = localStorage.getItem("selectedWeapon");
    if (savedSelectedWeapon) {
      setSelectedWeapon(JSON.parse(savedSelectedWeapon));
    }
  }, []);

  const handleSelectChangeWeapon = (event) => {
    const selectedWeaponName = event.target.value;
    if (selectedWeaponName === "empty") {
      setSelectedWeapon(null);
      localStorage.removeItem("selectedWeapon");
    } else {
      const selectedWeapon = weapons.find(
        (weapon) => weapon.nome === selectedWeaponName
      );
      setSelectedWeapon(selectedWeapon);
      localStorage.setItem("selectedWeapon", JSON.stringify(selectedWeapon));
    }
  };

  const [shields, setShields] = useState([]);
  const [selectedShield, setSelectedShield] = useState(null);

  useEffect(() => {
    const fetchShields = async () => {
      try {
        const response = await fetch(
          "https://items-api-sigma.vercel.app/escudos/simples"
        );
        const data = await response.json();
        setShields(data);
      } catch (error) {
        console.error("Erro ao buscar os capacetes:", error);
      }
    };

    fetchShields();
  }, []);

  useEffect(() => {
    // Carrega os dados da arma selecionada do localStorage quando o componente é montado
    const savedSelectedShield = localStorage.getItem("selectedShield");
    if (savedSelectedShield) {
      setSelectedShield(JSON.parse(savedSelectedShield));
    }
  }, []);

  const handleSelectChangeShield = (event) => {
    const selectedShieldName = event.target.value;
    if (selectedShieldName === "empty") {
      setSelectedShield(null);
      localStorage.removeItem("selectedShield");
    } else {
      const selectedShield = shields.find(
        (shield) => shield.nome === selectedShieldName
      );
      setSelectedWeapon(selectedShield);
      localStorage.setItem("selectedShield", JSON.stringify(selectedShield));
    }
  };

  const [armors, setArmors] = useState([]);
  const [selectedArmor, setSelectedArmor] = useState(null);

  useEffect(() => {
    const fetchArmors = async () => {
      try {
        const response = await fetch(
          "https://items-api-sigma.vercel.app/set/simples"
        );
        const data = await response.json();
        setArmors(data);
      } catch (error) {
        console.error("Erro ao buscar os capacetes:", error);
      }
    };

    fetchArmors();
  }, []);

  useEffect(() => {
    // Carrega os dados da arma selecionada do localStorage quando o componente é montado
    const savedSelectedArmor = localStorage.getItem("selectedArmor");
    if (savedSelectedArmor) {
      setSelectedArmor(JSON.parse(savedSelectedArmor));
    }
  }, []);

  const handleSelectChangeArmor = (event) => {
    const selectedArmorName = event.target.value;
    if (selectedArmorName === "empty") {
      setSelectedArmor(null);
      localStorage.removeItem("selectedArmor");
    } else {
      const selectedArmor = armors.find(
        (armor) => armor.nome === selectedArmorName
      );
      setSelectedArmor(selectedArmor);
      localStorage.setItem("selectedArmor", JSON.stringify(selectedArmor));
    }
  };

  return (
    <>
      <div className="item-container">
        <label>
          <div>
            <select className="item-select" onChange={handleSelectChangeWeapon}>
              <option value="">Selecione uma Arma</option>
              {weapons.map((weapon) => (
                <option key={weapon._id} value={weapon.nome}>
                  {weapon.nome}
                </option>
              ))}
              <option value="empty">Slot Vazio</option>
            </select>
          </div>
        </label>
        <div className="border-style">
          {selectedWeapon && (
            <div className="img-container">
              <img src={selectedWeapon.imgURL} alt={selectedWeapon.nome} />
              <div className="tooltip">
                <strong>{selectedWeapon.nome}</strong>
                <p>Atk: {selectedWeapon.atk}</p>
                <p>Roll: {selectedWeapon.roll}</p>
                <p>Effect: {selectedWeapon.efeito}</p>
                <p>Property: {selectedWeapon.propriedade}</p>
              </div>
            </div>
          )}
        </div>

        <label>
          <div>
            <select className="item-select" onChange={handleSelectChangeShield}>
              <option value="">Selecione um Escudo</option>
              {shields.map((shield) => (
                <option key={shield._id} value={shield.nome}>
                  {shield.nome}
                </option>
              ))}
              <option value="empty">Slot Vazio</option>
            </select>
          </div>
        </label>
        <div className="border-style">
          {selectedShield && (
            <div className="img-container">
              <img src={selectedShield.imgURL} alt={selectedShield.nome} />
              <div className="tooltip">
                <strong>{selectedShield.nome}</strong>
                <p>Def: {selectedShield.def}</p>
                <p>Effect: {selectedShield.efeito}</p>
              </div>
            </div>
          )}
        </div>

        <label>
          <div>
            <select className="item-select" onChange={handleSelectChangeArmor}>
              <option value="">Selecione uma Armadura</option>
              {armors.map((armor) => (
                <option key={armor._id} value={armor.nome}>
                  {armor.nome}
                </option>
              ))}
              <option value="empty">Slot Vazio</option>
            </select>
          </div>
        </label>
        <div className="border-style">
          {selectedArmor && (
            <div className="img-container">
              <img src={selectedArmor.imgURL} alt={selectedArmor.nome} />
              <div className="tooltip">
                <strong>{selectedArmor.nome}</strong>
                <p>Arm: {selectedArmor.arm}</p>
                <p>Roll: {selectedArmor.roll}</p>
                <p>Effect: {selectedArmor.efeito}</p>
                <p>Property: {selectedArmor.propriedade}</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default EquipSet;
