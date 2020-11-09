import React from 'react'
import FilterBox from '../FilterBox'
import DashProfileBox from './DashProfileBox'
import "./AthleteSearch.css"

import SearchResults from "./SearchResults"

class AthleteSearch extends React.Component{
    constructor(props){
        super(props)
        this.search(this.props.info.search)
    }
    state = {
        search: "",
        users: this.props.info.users,
        posts: this.props.info.posts,
        filters: 'athlete',
        }

    changeFilter = (filter) => {
        this.setState({filters: filter})
    }
    upvotePost = (post, number) => {
        this.state.posts[post].likes += number;
        this.setState({posts: this.state.posts})
    }

    search = (searchText) => {
      const searchedUsers = this.props.info.users.filter(user => user.name.toLowerCase().includes(searchText.toLowerCase()))

      const searchedPosts = this.props.info.posts.filter(post => 
        post.text.toLowerCase().includes(searchText.toLowerCase()) | post.user.name.toLowerCase().includes(searchText.toLowerCase()))

      this.setState({search: searchText, users: searchedUsers, posts: searchedPosts})
    }

    render(){
        return <div className="athleteSearch">
            {this.props.info.search}
            <div className="searchLeftColumn">
                <DashProfileBox user={this.props.info.user} className="personalProfile"/>
            </div>

            <div className="searchContainer">
                <FilterBox filter={this.state.filters} changeFilter={this.changeFilter}/>
                <SearchResults user={this.props.info.user} upvote={this.upvotePost} filter={this.state.filters} posts={this.state.posts} users={this.state.users}/>
            </div>

            </div>
    }
}

export default AthleteSearch