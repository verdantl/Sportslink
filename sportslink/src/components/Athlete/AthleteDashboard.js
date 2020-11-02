import React from 'react'
import SearchBox from '../SearchBox'
import DashProfileBox from './DashProfileBox'
import SingleProfileBox from './SingleProfileBox'
import "./AthleteDashboard.css"
import colorwolf from '../images/colorwolf.jpg'


// import AthleteDashBoardProfile from './AthleteDashboardProfile'

class AthleteDashboard extends React.Component{
    state = {
        user: {
            image: colorwolf,
            name: "Lebron James"
        },
        users: [
          {image: "", username: 'James Snitcher', description: "hello guys"},
          {image: "", username: "Mark Kazakevich", description: "I like teaching CSC309"}
        ]
      }

    render(){
        return <div className="athleteDashboard">
            <div className="leftColumn">
                <DashProfileBox user={this.state.user} className="personalProfile"/>
            </div>

            <div className="dashboard">
                <SearchBox searchBoxClass="athleteSearchBox"/>
                <div>
                <SingleProfileBox/>
                <SingleProfileBox/>
                </div>
                <div>
                <SingleProfileBox/>
                <SingleProfileBox/>
                </div>
                <div>
                <SingleProfileBox/>
                <SingleProfileBox/>
                </div>
                <div>
                <SingleProfileBox/>
                <SingleProfileBox/>
                </div>


            </div>

            </div>
    }
}

export default AthleteDashboard