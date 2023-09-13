import React, { useState, useMemo } from 'react';

function ComposeSalad(props) {
  const foundations = useMemo(() => {return Object.keys(props.inventory).filter(name => props.inventory[name].foundation);}, [props.inventory]);
  const [foundation, setFoundation] = useState('Pasta');
  const extras = useMemo(() => {return Object.keys(props.inventory).filter(name => props.inventory[name].extra);}, [props.inventory]);
  const [extra, setExtra] = useState({ Bacon: true, Fetaost: true });
  const proteins = useMemo(() => {return Object.keys(props.inventory).filter(name => props.inventory[name].protein);}, [props.inventory]);
  const [protein, setProtein] = useState('Kycklingfilé');
  const dressings = useMemo(() => {return Object.keys(props.inventory).filter(name => props.inventory[name].dressing);}, [props.inventory]);
  const [dressing, setDressing] = useState('Kycklingfilé');


  function handleSubmit(e) {
    console.log("you clicked submit");
    console.log(e);
  }


  return (

    <form className="form" key="salladForm" onSubmit={handleSubmit()}>
      <h2 key="basHeader">Steg 1:</h2>
        <select key="bas">
        <option selected>Välj bas</option>
          {foundations.map((x, i) =><option value={x}>{x}</option>)}
        </select>
        
      <h2 key="proteinHeader">Steg 2:</h2>
        <select key="protein">
        <option selected>Välj protein</option>
          {proteins.map((x,i) => 
            <option value={x}>{x}</option>
            )}
        </select>
      <h2 key="extraHeader">Välj tillbehör:</h2>
      {extras.map((x, i) =>
        <React.Fragment key={i}>
          <input type="checkbox" id={x} name="extra" value={x}/> 
          <label htmlFor={x}>{x}</label>
          <br/> 
        </React.Fragment>
        )}
      <h2 key="dressingHeader">Dressing:</h2>
        <select key="dressing">
        <option selected>Välj dressing</option>
          {dressings.map((x, i) => <option value={x}>{x}</option>)}
          </select>
      <br />
      <br />
      <button type="submit">Lägg i varukorg</button>
    </form>
  );
}
export default ComposeSalad;