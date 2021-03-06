import SingleProfileBox from './SingleProfileBox'
import React from 'react'
import Posts from '../Dashboard/Posts'
import { uid } from "react-uid";

class SearchResults extends React.Component{


    render(){
      switch (this.props.filter){
        case ('athlete'):
          return <div>
          <p className="searchResultTitle">Users</p>
          <div className="searchUsers">  
            {this.props.users.map((user) => {
              if (user.player === true) {
                return <SingleProfileBox history={this.props.history} key={uid(user)} user={user}/>
              }
            }
            )}
          </div>   
          </div>   

        case ('sponsor'):
          return <div>
          <p className="searchResultTitle">Recruiters</p>
          <div className="searchRecruiters">  
            {this.props.users.map((user) => {
              if (user.player === false) {
                return <SingleProfileBox history={this.props.history} key={uid(user)} user={user}/>
              }
            }
            )}
          </div>   
          </div>
        case ('posts'):
          return <div className="searchPosts">
          <p className="searchResultTitle">Posts</p>
          <Posts user={this.props.user} upvote={this.props.upvote} posts={this.props.posts}/>  

          </div>   
      }
 

    }
}

export default SearchResults