import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';
import ComposeSalad from './ComposeSalad';
import ViewOrder from './ViewOrder';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';


function App() {
  const [salads, setSalads] = useState([]);


  return (

    <div className="container py-4">
      
        <Header />
        <Navbar />
        <Routes>  
          <Route path="/view-order" element={<ViewOrder salads={salads} />} />
          <Route path="/compose-salad" element={<ComposeSalad setSalads={setSalads} salads={salads}/>} />
        </Routes>
      

      
      <footer className="pt-3 mt-4 text-muted border-top">
        EDAF90 - webprogrammering
      </footer>
    </div>

  );
}

function Header() {
  return( 
    <header className="pb-3 mb-4 border-bottom">
      <span className="fs-4">Min egen salladsbar</span>
    </header>
  );
}

function Navbar() {
    return(
      <>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink className="nav-link" to="/compose-salad">
            Komponera en sallad
          </NavLink>
        </li>
        <li className='"nav-item'>
          <NavLink className="nav-link" to="/view-order">
            Varukorg
          </NavLink>
        </li>
      </ul>
      </>);
    }

export default App;
