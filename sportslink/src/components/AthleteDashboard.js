import React from 'react'
import TopBar from './TopBar'
import SearchBox from './SearchBox'
import DashProfileBox from './DashProfileBox'
import "../components-css/AthleteDashboard.css"
// import AthleteDashBoardProfile from './AthleteDashboardProfile'

class AthleteDashboard extends React.Component{
    render(){
        return <div>
            <TopBar/>
            <div className="athleteDashboard">
            <DashProfileBox className="personalProfile"/>
            <SearchBox className="searchBox"/>
            </div>

            </div>
    }
}

export default AthleteDashboard