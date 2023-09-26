import React, { useState } from 'react';
import inventory from './inventory.mjs';
import Salad from './Salad';
import SelectIngredient from './SelectIngredient';
import SelectExtra from './SelectExtra'
import { useNavigate, useOutletContext} from 'react-router-dom';

  function ComposeSalad() {
    const foundations = Object.entries(inventory).filter(name => inventory[name[0]].foundation)
    const [foundation, setFoundation] = useState('');
    const extras = Object.entries(inventory).filter(name => inventory[name[0]].extra)
    const [extra, setExtra] = useState({});
    const proteins = Object.entries(inventory).filter(name => inventory[name[0]].protein)
    const [protein, setProtein] = useState('');
    const dressings = Object.entries(inventory).filter(name => inventory[name[0]].dressing)
    const [dressing, setDressing] = useState('');
    const {salads, setSalads} = useOutletContext();
    const navigate = useNavigate();

    function handleSubmit(e) {
      e.preventDefault();
      e.target.classList.add("was-validated");
      if(e.target.checkValidity() && (Object.keys(extra).length >= 3)) {
        createSalad(foundation, protein, extra, dressing);
        setFoundation("");
        setProtein("");
        setExtra("");
        setDressing(""); 
        e.target.classList.remove("was-validated");
      }
    }
  
    function createSalad(foundation, protein, extra, dressing) {
      let newSalad = new Salad().add('foundation', foundation)
                            .add('protein', protein)
                            .add('extra', extra)
                            .add('dressing', dressing);
      console.log(newSalad);
      let allSalads = [...salads, newSalad]
      setSalads(allSalads);
      navigate("/view-order/" + newSalad.uuid);               
    }
    
    return (
      <div className="mb-3">
        <form name="form" key="salladForm" className="g-3 needs-validation" onSubmit={handleSubmit} noValidate>
          <SelectIngredient ingredients={foundations} name={"bas"} state={foundation} stateSetter={setFoundation}></SelectIngredient>
          <SelectIngredient ingredients={proteins} name={"protein"} state={protein} stateSetter={setProtein}></SelectIngredient>
          <br></br>
          <SelectExtra extras={extras} state={extra} stateSetter={setExtra}></SelectExtra>
          <SelectIngredient ingredients={dressings} name={"dressing"} state={dressing} stateSetter={setDressing}></SelectIngredient>
          <br />
          <br />
          <button type='submit' className="btn btn-primary" >Lägg i varukorg</button>
        </form>
      </div>
  )
}
  
  export default ComposeSalad;