import React from 'react'
import './App.css';
import AthleteDashboard from './components/AthleteDashboard'
import AdminDashboard from './components/AdminDashboard'
import TopBar from './components/TopBar'

class App extends React.Component {
  render(){
    return <div >
      <TopBar/>
      <AdminDashboard className="adminDashboard"/>

      </div>
  }
}

export default App;
