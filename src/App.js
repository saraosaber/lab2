import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import inventory from './inventory.mjs';
import ComposeSalad from './ComposeSalad'
import SalladForm from './SalladForm';


function App() {
  const extras = Object.keys(inventory).filter(name => inventory[name].extra);
  const [selectedValues, setSelectedValues] = useState(Salad[]);

  const handleSelectedValuesChange = (newSelectedValues) => {
    setSelectedValues(newSelectedValues);
  };
  
  return (
    
    <div className="container py-4">
      <header className="pb-3 mb-4 border-bottom">
        <span className="fs-4">Min egen salladsbar</span>
        
        <SalladForm inventory={inventory} selectedValues={selectedValues} onSelectedValuesChange={handleSelectedValuesChange} />
      <div>
      <h1>Varukorg</h1>
      <ul>
          <li>Foundation: {selectedValues.foundation}</li>
          <li>Protein: {selectedValues.protein}</li>
          <li>Extras: {Object.keys(selectedValues.extras).filter(extra => selectedValues.extras[extra]).join(', ')}</li>
          <li>Dressing: {selectedValues.dressing}</li>
        </ul>
    </div>
      </header>



      <footer className="pt-3 mt-4 text-muted border-top">
        EDAF90 - webprogrammering
      </footer>
    </div>
  );
}

export default App;
