import React, { useState, useMemo } from 'react';
import ComposeSalad from './ComposeSalad';
import inventory from './inventory.mjs';

  function SalladForm(props) {
    const foundations = useMemo(() => {return Object.keys(props.inventory).filter(name => props.inventory[name].foundation);}, [props.inventory]);
    const [foundation, setFoundation] = useState('Pasta');
    const extras = useMemo(() => {return Object.keys(props.inventory).filter(name => props.inventory[name].extra);}, [props.inventory]);
    const [extra, setExtra] = useState({ Bacon: true, Fetaost: true });
    const proteins = useMemo(() => {return Object.keys(props.inventory).filter(name => props.inventory[name].protein);}, [props.inventory]);
    const [protein, setProtein] = useState('Kycklingfilé');
    const dressings = useMemo(() => {return Object.keys(props.inventory).filter(name => props.inventory[name].dressing);}, [props.inventory]);
    const [dressing, setDressing] = useState('Kimchimayo');

    const [selectedValues, setSelectedValues] = useState({
      foundation: 'Pasta',
      extras: { Bacon: true, Fetaost: true },
      protein: 'Kycklingfilé',
      dressing: 'Kimchimayo',
    });

    const handleSelectChange = (e) => {
      const { name, value, type, checked } = e.target;
      setSelectedValues(prevValues => ({
        ...prevValues,
        [name]: type === 'checkbox' ? { ...prevValues[name], [value]: checked } : value,
      }));
    };
  
    function handleSubmit(e) {
      e.preventDefault();
      console.log("you clicked submit");
      console.log("Selected Values:", selectedValues);

    }
  
    return (
      <form name="form" key="salladForm" onSubmit={handleSubmit}>
        <h2 key="basHeader">Steg 1:</h2>
        <select key="bas" name="foundation" onChange={handleSelectChange} value={selectedValues.foundation}>
          {foundations.map((x, i) => <option key={i} value={x}>{x}</option>)}
        </select>
  
        <h2 key="proteinHeader">Steg 2:</h2>
        <select key="protein" name="protein" onChange={handleSelectChange} value={selectedValues.protein}>
          {proteins.map((x, i) => <option key={i} value={x}>{x}</option>)}
        </select>
  
        <h2 key="extraHeader">Välj tillbehör:</h2>
        {extras.map((x, i) =>
          <React.Fragment key={i}>
            <input
              type="checkbox"
              id={x}
              name="extras"
              value={x}
              checked={selectedValues.extras[x] || false}
              onChange={handleSelectChange}
            />
            <label htmlFor={x}>{x}</label>
            <br />
          </React.Fragment>
        )}
  
        <h2 key="dressingHeader">Dressing:</h2>
        <select key="dressing" name="dressing" onChange={handleSelectChange} value={selectedValues.dressing}>
          {dressings.map((x, i) => <option key={i} value={x}>{x}</option>)}
        </select>
  
        <br />
        <br />
        <button type="submit">Lägg i varukorg</button>
      </form>
    );
  }
  
  export default SalladForm;