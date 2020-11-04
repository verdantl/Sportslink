import React from 'react'
import SearchBox from '../SearchBox'
import DashProfileBox from './DashProfileBox'
import SingleProfileBox from './SingleProfileBox'
import "./AthleteDashboard.css"
import lebron from '../images/lebron.jpg'
import harden from '../images/harden.jpg'
import kawhi from '../images/kawhi.jpg'
import durant from '../images/durant.jpg'

import SearchResults from "./SearchResults"


// import AthleteDashBoardProfile from './AthleteDashboardProfile'

class AthleteDashboard extends React.Component{
    state = {
        user: {
            image: lebron,
            name: "Lebron James"
        },
        users: [
          {image: harden, name: 'James Harden', description: "No. 13, Houston Rockets. 3x scoring champion"},
          {image: kawhi, name: "Kawhi Leonard  ", description: "2x Finals MVP, LA Clippers SF"},
          {image: durant, name: "Kevin Durant", description: "NBA Player for the Brooklyn Nets"}
        ]
      }

    render(){
        return <div className="athleteDashboard">
            <div className="leftColumn">
                <DashProfileBox user={this.state.user} className="personalProfile"/>
            </div>

            <div className="dashboard">
                <SearchBox searchBoxClass="athleteSearchBox"/>
                <SearchResults users={this.state.users}/>


            </div>

            </div>
    }
}

export default AthleteDashboard