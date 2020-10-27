import React from 'react'
import TopBar from './TopBar'
import SearchBox from './SearchBox'
// import AthleteDashBoardProfile from './AthleteDashboardProfile'

class AthleteDashboard extends React.Component{
    render(){
        return <div>
            <TopBar/>
            {/* <AthleteDashBoardProfile/> */}
            <SearchBox/>
            </div>
    }
}

export default AthleteDashboard