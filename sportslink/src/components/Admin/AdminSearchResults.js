import React from 'react'
import SingleAdminBox from './SingleAdminBox'
import { uid } from "react-uid";

class AdminSearchResults extends React.Component{
    render(){
        return <div>
            {this.props.users.map((user) => {
              return <SingleAdminBox key={uid(user)} user={user}/>
            }
            )}
        </div>


    }
}

export default AdminSearchResults