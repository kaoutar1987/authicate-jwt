import React, { useEffect } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar"
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Admin from './pages/Admin';
import User from './pages/User';
import Ticnitien from './pages/Ticnitien';
import axios from 'axios';


function App() {

  useEffect(() => {
    axios.get('http://localhost:3000').then(response => {
      console.log(response.data)
    })
    .catch(err => { console.log(err) })
  }, [])

  return (
     <Router>
        
        <Navbar />
     
        <div className="auth-wrapper">
        <div className="auth-inner">
          <Switch>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
            <Route exact path="/admin" component={Admin}/>
            <Route exact path="/user" component={User}/>
            <Route exact path="/tech" component={Ticnitien}/>
          </Switch>
        </div>
      </div>
      
    </Router>
  
  
  );
}

export default App;