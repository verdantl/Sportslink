import React from 'react'
import './App.css';
import AthleteDashboard from './components/AthleteDashboard'
import TopBar from './components/TopBar'

class App extends React.Component {
  render(){
    return <div >
      <TopBar/>
      <AthleteDashboard/></div>
  }
}

export default App;
