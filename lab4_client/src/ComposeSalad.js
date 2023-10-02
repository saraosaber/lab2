import React, { useEffect, useState } from 'react';
import inventory from './inventory.mjs';
import Salad from './Salad';
import SelectIngredient from './SelectIngredient';
import SelectExtra from './SelectExtra'
import { useNavigate, useOutletContext, useLoaderData} from 'react-router-dom';
import fetchAllIngredients from './fetchInventory.js';
import fetchInventory from './fetchInventory';
import fetchIngredient from './fetchInventory';



  function ComposeSalad() {
    const [inventory, setInventory] = useState({
      foundations: {},
      proteins: {},
      extras: {},
      dressings: {}
    });

    useEffect(() => {
      async function fetchIngredients() {
        try {
          const ingredients = await fetchAllIngredients();
          setInventory(ingredients);
        } catch (error) {
          console.error("Error fetching ingredients", error);
        }
      }
      fetchIngredients();
    },  []);

    const foundations = Object.entries(inventory.foundations);
    const [foundation, setFoundation] = useState('');
    const extras = Object.entries(inventory.extras);
    const [extra, setExtra] = useState({});
    const proteins = Object.entries(inventory.proteins);
    const [protein, setProtein] = useState('');
    const dressings = Object.entries(inventory.dressings);
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
      let allSalads = [...salads, newSalad]
      setSalads(allSalads);
      navigate("/view-order/confirm/" + newSalad.uuid);               
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