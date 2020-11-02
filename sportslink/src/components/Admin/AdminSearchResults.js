import React from 'react'
import SingleAdminBox from './SingleAdminBox'

class AdminSearchResults extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return <div>
            {this.props.users.map((user) => {
              return <SingleAdminBox user={user}/>
            }
            )}
        </div>


    }
}

export default AdminSearchResults