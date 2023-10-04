import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Salad from './Salad';

import { useState } from 'react';
import ComposeSalad from './ComposeSalad';
import ViewOrder from './ViewOrder';
import Spinner from './Spinner';
import { BrowserRouter as Router, Route, Routes, NavLink, Outlet, useNavigation } from 'react-router-dom';


function App() {
  const tempSalad = localStorage.getItem("salads");
  const localSalads = tempSalad ? [Salad.parse(tempSalad)] : [];
  const [salads, setSalads] = useState(localSalads);
  const navigation = useNavigation();

  

  const navigationInProgress = navigation.state === 'loading' || navigation.state === 'submitting';


  return (

    <div className="container py-4">
      
        <Header />
        <Navbar />
        {navigationInProgress ? 
        <Spinner /> :
        <Outlet context={{salads, setSalads}}/>}
      
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
        <li className='nav-item'>
          <NavLink className="nav-link" to="">
            Hem
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/compose-salad">
            Komponera en sallad
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className="nav-link" to="/view-order">
            Varukorg
          </NavLink>
        </li>
      </ul>
      </>);
    }

export default App;
