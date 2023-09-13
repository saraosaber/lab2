import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import inventory from './inventory.mjs';
import ComposeSalad from './ComposeSalad'

function App() {
  const extras = Object.keys(inventory).filter(name => inventory[name].extra);
  return (
    
    <div className="container py-4">
      <header className="pb-3 mb-4 border-bottom">
        <span className="fs-4">Min egen salladsbar</span>
        <ComposeSalad inventory={inventory} />
      </header>



      <footer className="pt-3 mt-4 text-muted border-top">
        EDAF90 - webprogrammering
      </footer>
    </div>
  );
}

export default App;
