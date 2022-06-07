import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import React, { useEffect } from "react";
import Login from './components/Login/Login';
import Header from './components/Header/Header.jsx';
import Home from './components/Home/Home';
import { useStateValue } from './Context/StateProvider';
import { auth } from './components/fireBase';
import Checkout from './components/Checkout/Checkout';


function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {


    auth.onAuthStateChanged((authUser) => {
      console.log("The user is: ", authUser);
      if (authUser) {
        dispatchEvent({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        dispatchEvent({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, [])


  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<><Header /><Home /></>} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

