import React from 'react'
import SearchBox from '../SearchBox'
import './AdminDashboard.css'
import SingleAdminBox from './SingleAdminBox'
import AdminSearchResults from "./AdminSearchResults"

class AdminDashboard extends React.Component{
    state = {

      users: [
        {image: "", name: 'James Harden', description: "No. 13, Houston Rockets. 3x scoring champion"},
        {image: "", name: "Kawhi Leonard  ", description: "2x Finals MVP, LA Clippers SF"},
        {image: "", name: "Kevin Durant", description: "NBA Player for the Brooklyn Nets"}
      ]
    }

    render(){
        return <div>
            <SearchBox searchBoxClass="adminSearchBox"/>
          <AdminSearchResults users={this.state.users}/>

        </div>
    }

}

export default AdminDashboard