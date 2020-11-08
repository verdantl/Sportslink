import React from 'react'
import FilterBox from '../FilterBox'
import DashProfileBox from './DashProfileBox'
import SingleProfileBox from './SingleProfileBox'
import "./AthleteSearch.css"
import lebron from '../images/lebron.jpg'
import harden from '../images/harden.jpg'
import kawhi from '../images/kawhi.jpg'
import durant from '../images/durant.jpg'

import SearchResults from "./SearchResults"


// import AthleteDashBoardProfile from './AthleteDashboardProfile'

class AthleteSearch extends React.Component{
    state = {
        user: {
            image: lebron,
            name: "Lebron James"
        },
        users: [
          {image: harden, userType: "athlete", name: 'James Harden', description: "No. 13, Houston Rockets. 3x scoring champion"},
          {image: kawhi, userType: "athelete", name: "Kawhi Leonard  ", description: "2x Finals MVP, LA Clippers SF"},
          {image: durant, userType: "athlete", name: "Kevin Durant", description: "NBA Player for the Brooklyn Nets"}
        ]
      }

    render(){
        return <div className="athleteSearch">
            <div className="searchLeftColumn">
                <DashProfileBox user={this.state.user} className="personalProfile"/>
            </div>

            <div className="searchContainer">
                <FilterBox />
                <SearchResults users={this.state.users}/>
            </div>

            </div>
    }
}

export default AthleteSearch