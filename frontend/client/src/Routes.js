import React, { useContext} from 'react';
import { BrowserRouter as Router, Redirect, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar"
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Admin from './pages/Admin';
import User from './pages/User';
import Home from './pages/Home';
import Logout from './pages/Logout';
import Ticnitien from './pages/Ticnitien';
import ProtectedAdminRoute from './components/ProtectedAdminRoute'
import ProtectedUserRoute from './components/ProtectedUserRoute'
import ProtectedTechRoute from './components/ProtectedTechRoute'
import ProtectedAuthRoute from './components/ProtectedAuthRoute'
import NotFound from './pages/404';
import { UserContext } from './contextApi/Context'



function Routes() {

const { infos:{isAuth, role} } = useContext(UserContext)
console.log({isAuth, role})

    return (
        <>
        <Router>
            <Navbar />
        
            <div className="auth-wrapper">
            <div className="auth-inner">
            <Switch>
                <Route exact path="/" component={Home} />
                <ProtectedAuthRoute path="/logout" component={Logout} />
                <ProtectedAuthRoute path="/sign-in" component={Login} isAuth={isAuth} role={role} />
                <ProtectedAuthRoute path="/sign-up" component={SignUp} isAuth={isAuth} role={role} />
                <ProtectedAdminRoute path="/admin" component={Admin} isAuth={isAuth} role={role} />
                <ProtectedUserRoute  path="/user" component={User} isAuth={isAuth} role={role}/>
                <ProtectedTechRoute  path="/tech" component={Ticnitien} isAuth={isAuth} role={role}/>
                {/* 404 */}
                <Route exact path="/404" component={NotFound}/>
                <Redirect to='/404' />
            </Switch>
            </div>
            </div>
        
        </Router>
        </>
    )
}


export default Routes