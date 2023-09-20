import React, { useState, useMemo } from 'react';
import inventory from './inventory.mjs';
import Salad from './Salad';
import SelectIngredient from './SelectIngredient';
import SelectExtra from './SelectExtra'

  function ComposeSalad({inventory, setSalads, salad}) {
    const foundations = useMemo(() => {return Object.keys(inventory).filter(name => inventory[name].foundation);}, [inventory]);
    const [foundation, setFoundation] = useState('Sallad');
    const extras = useMemo(() => {return Object.keys(inventory).filter(name => inventory[name].extra);}, [inventory]);
    const [extra, setExtra] = useState({ });
    const proteins = useMemo(() => {return Object.keys(inventory).filter(name => inventory[name].protein);}, [inventory]);
    const [protein, setProtein] = useState('Kycklingfilé');
    const dressings = useMemo(() => {return Object.keys(inventory).filter(name => inventory[name].dressing);}, [inventory]);
    const [dressing, setDressing] = useState('Ceasardressing'); 


    async function handleSubmit(e) {
      e.preventDefault();
      createSalad(foundation, protein, extra, dressing);
      setFoundation("Sallad");
      setProtein("Kycklingfilé");
      setExtra("");
      setDressing("Ceasardressing")
    }
  
    function createSalad(foundation, protein, extra, dressing) {
      let newSalad = new Salad().add('foundation', foundation)
                            .add('protein', protein)
                            .add('extra', extra)
                            .add('dressing', dressing);
      let allSalads = [...salad, newSalad]
      setSalads(allSalads);               
    }


    return (
      <form name="form" key="salladForm">
        <SelectIngredient options={foundations} name={"bas"} state={foundation} stateSetter={setFoundation}></SelectIngredient>
        <SelectIngredient options={proteins} name={"protein"} state={protein} stateSetter={setProtein}></SelectIngredient>
  
        <br></br>
        <SelectExtra options={extras} name={"Tillbehör"} state={extra} stateSetter={setExtra}></SelectExtra>
  
        <SelectIngredient options={dressings} name={"dressing"} state={dressing} stateSetter={setDressing}></SelectIngredient>
  
        <br />
        <br />
        <button onClick={handleSubmit} >Lägg i varukorg</button>
      </form>
  )
}
  
  export default ComposeSalad;