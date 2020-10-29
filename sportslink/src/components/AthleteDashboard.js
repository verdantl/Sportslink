import React from 'react'
import SearchBox from './SearchBox'
import DashProfileBox from './DashProfileBox'
import SingleProfileBox from './SingleProfileBox'
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
            <div className="leftColumn">
                <DashProfileBox className="personalProfile"/>
            </div>

            <div className="dashboard">
                <SearchBox className="searchBox"/>
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