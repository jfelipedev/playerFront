import { useState } from 'react';
import './dice.css'

// eslint-disable-next-line react/prop-types
const Dice = ({ adicional, onRoll }) => {
  const [rolling, setRolling] = useState(false);
  const [diceType, setDiceType] = useState(6);
  const [diceCount, setDiceCount] = useState(1);
  const [results, setResults] = useState([]);
  const [total, setTotal] = useState(0);

  const rollDice = () => {
    if (!rolling) {
      setRolling(true);
      const newResults = [];
      let newTotal = 0;

      for (let i = 0; i < diceCount; i++) {
        const result = Math.floor(Math.random() * diceType) + 1;
        newResults.push(result);
        newTotal += result;
      }

      newTotal += adicional; // Adicionar o valor adicional

      setResults(newResults);
      setTotal(newTotal);

      onRoll(newTotal); // Chamando a função onRoll com o valor total

      setTimeout(() => {
        setRolling(false);
      }, 1500); // Tempo da animação (1.5 segundos)
    }
  };

  const clearResults = () => {
    setResults([]);
    setTotal(0);
  };

  return (
    <div className={`dice-container ${rolling ? 'rolling' : ''}`}>
      <div className="dice-settings">
        <label>          
          <select value={diceType} onChange={(e) => setDiceType(Number(e.target.value))}>
            <option value={4}>D4</option>
            <option value={6}>D6</option>
            <option value={8}>D8</option>
            <option value={10}>D10</option>
            <option value={12}>D12</option>
            <option value={20}>D20</option>
          </select>
        </label>
        <label>
          <input
            type="number"
            value={diceCount}
            className='dice-quantity-input'
            onChange={(e) => setDiceCount(Number(e.target.value))}
            min={1}
          />
        </label>
      </div>
      <div className='dice-buttons'>
      <button className="roll-button" onClick={rollDice} disabled={rolling}>
        {rolling ? 'Rolando...' : 'Roll'}
      </button>
      <button className="clear-button" onClick={clearResults}>
        Clear
      </button>
      </div>
      <div className="results">
        {results.map((result, index) => (
          <div key={index} className="result">
            {`[${result}]`}
          </div>
        ))}
        <div className="total">Total: {total}</div>
      </div>
    </div>
  );
};

export default Dice;
