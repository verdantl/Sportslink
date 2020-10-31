import React from 'react'
import SearchBox from '../SearchBox'
import './AdminDashboard.css'
import SingleAdminBox from './SingleAdminBox'

class AdminDashboard extends React.Component{
    render(){
        return <div>
            <SearchBox searchBoxClass="adminSearchBox"/>
            <div>
        <SingleAdminBox/>
      </div>
      <div>
        <SingleAdminBox/>
      </div>
      <div>
        <SingleAdminBox/>
      </div>
        </div>
    }

}

export default AdminDashboard