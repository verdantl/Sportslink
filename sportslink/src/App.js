import React from 'react'
import './App.css';
import AthleteDashboard from './components/Athlete/AthleteDashboard'
import AdminDashboard from './components/Admin/AdminDashboard'
import Login from './components/Login/Login'
import Messaging from './components/Messaging/Messaging'
import TopBar from './components/TopBar'
import Profile from './components/Profile/Profile'
import { Route, Switch, BrowserRouter } from 'react-router-dom';


class App extends React.Component {
  render(){
    return <div >
      <TopBar/>
      <BrowserRouter>
        <Switch>
          <Route exact path = '/admin' render={()=>
                          (<AdminDashboard className="adminDashboard"/>)}/>
          <Route exact path = '/athlete' render={()=>
                          (<AthleteDashboard className="athleteDashboard"/>)}/>
          <Route exact path = '/login' render={() =>
                          (<Login/>)}/>
          <Route exact path = '/profile' render={() => 
                          (<Profile className="profile"/>)}/>
          <Route exact path = '/messaging' render={() => 
                          (<Messaging className="messaging"/>)}/>
        </Switch>
      </BrowserRouter>
      </div>
  }
}

export default App;
