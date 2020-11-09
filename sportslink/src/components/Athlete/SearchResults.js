import SingleProfileBox from './SingleProfileBox'
import React from 'react'
import Posts from '../Dashboard/Posts'
import { uid } from "react-uid";

class SearchResults extends React.Component{


    render(){
        return <div>
          <p className="searchResultTitle">Users</p>

          <div className="searchUsers">  

            {this.props.users.map((user) => {
              return <SingleProfileBox key={uid(user)} user={user}/>
            }
            )}
          </div>   
          <div className="searchPosts">
          <p className="searchResultTitle">Posts</p>
          <Posts posts={this.props.posts}/></div>     

          </div>    

    }
}

export default SearchResults