import React from 'react'
import SingleAdminBox from './SingleAdminBox'
import { uid } from "react-uid";
import AdminPosts from './AdminPosts'

class AdminSearchResults extends React.Component{
    render(){
        return <div>
            {/* {this.props.users.map((user) => {
              return <SingleAdminBox key={uid(user)} user={user}/>
            }
            )} */}
        <AdminPosts removePost={this.props.removePost} posts={this.props.posts}/>
        </div>


    }
}

export default AdminSearchResults