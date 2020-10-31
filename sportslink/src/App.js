import React from 'react'
import './App.css';
import AthleteDashboard from './components/Athlete/AthleteDashboard'
import AdminDashboard from './components/Admin/AdminDashboard'
import Login from './components/Login/Login'
import TopBar from './components/TopBar'
import { Route, Switch, BrowserRouter } from 'react-router-dom';


class App extends React.Component {
  render(){
    return <div >
      <TopBar/>
      <BrowserRouter>
        <Switch>
          <Route exact path = '/' render={()=>
                          (<AdminDashboard className="adminDashboard"/>)}/>

          <Route exact path = '/login' render={() =>
                          (<Login/>)}/>
        </Switch>
      </BrowserRouter>
      </div>
  }
}

export default App;
