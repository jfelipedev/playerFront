import "./equipSet.css";
import { useState, useEffect } from "react";

const EquipSet = () => {
  const [weapons, setWeapons] = useState([]);
  const [selectedWeapon, setSelectedWeapon] = useState(null);
  
  useEffect(() => {
    const fetchWeapons = async () => {
      try {
        const response = await fetch("https://items-api-sigma.vercel.app/armas/simples");
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






<select className="item-select" onChange={handleSelectChangeArmor}>
<option value="">Selecione uma Armadura</option>
{armors.map((armor) => (
  <option key={armor._id} value={armor.nome}>
    {armor.nome}
  </option>
))}
</select>