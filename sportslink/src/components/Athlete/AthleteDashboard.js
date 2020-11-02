import React from 'react'
import SearchBox from '../SearchBox'
import DashProfileBox from './DashProfileBox'
import SingleProfileBox from './SingleProfileBox'
import "./AthleteDashboard.css"
import colorwolf from '../images/colorwolf.jpg'
import SearchResults from "./SearchResults"


// import AthleteDashBoardProfile from './AthleteDashboardProfile'

class AthleteDashboard extends React.Component{
    state = {
        user: {
            image: colorwolf,
            name: "Lebron James"
        },
        users: [
          {image: "", name: 'James Snitcher', description: "hello guys"},
          {image: "", name: "Mark Kazakevich", description: "I like teaching CSC309"},
          {image: "", name: "Kevin Durant", description: "NBA Player for the Brooklyn Nets"}
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