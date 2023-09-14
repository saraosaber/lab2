import React, { useState, useMemo } from 'react';

function ComposeSalad({selectedValues}) {
  /*const foundations = useMemo(() => {return Object.keys(props.inventory).filter(name => props.inventory[name].foundation);}, [props.inventory]);
  const [foundation, setFoundation] = useState('Pasta');
  const extras = useMemo(() => {return Object.keys(props.inventory).filter(name => props.inventory[name].extra);}, [props.inventory]);
  const [extra, setExtra] = useState({ Bacon: true, Fetaost: true });
  const proteins = useMemo(() => {return Object.keys(props.inventory).filter(name => props.inventory[name].protein);}, [props.inventory]);
  const [protein, setProtein] = useState('Kycklingfilé');
  const dressings = useMemo(() => {return Object.keys(props.inventory).filter(name => props.inventory[name].dressing);}, [props.inventory]);
  const [dressing, setDressing] = useState('Kycklingfilé');*/


  function handleSubmit(e) {
    console.log("you clicked submit");
    //console.log(document.forms["form"]["basVal"].value);
  }


  return (
    <div>
      <h1>Varukorg</h1>
      <ul>
          <li>Foundation: {selectedValues.foundation}</li>
          <li>Protein: {selectedValues.protein}</li>
          <li>Extras: {Object.keys(selectedValues.extras).filter(extra => selectedValues.extras[extra]).join(', ')}</li>
          <li>Dressing: {selectedValues.dressing}</li>
        </ul>
    </div>
  
  );
}
export default ComposeSalad;