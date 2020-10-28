import React from 'react'
import TopBar from './TopBar'
import SearchBox from './SearchBox'
import DashProfileBox from './DashProfileBox'
import "../components-css/AthleteDashboard.css"
// import AthleteDashBoardProfile from './AthleteDashboardProfile'

class AthleteDashboard extends React.Component{
    state = {

        users: [
          {username: 'James Snitcher'},
          {username: "Mark Kazakevich"}
        ]
      }

    render(){
        return <div className="athleteDashboard">
            <DashProfileBox className="personalProfile"/>
            <SearchBox className="searchBox"/>

            </div>
    }
}

export default AthleteDashboard