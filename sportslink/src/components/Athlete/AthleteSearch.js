import React from 'react'
import FilterBox from '../FilterBox'
import DashProfileBox from './DashProfileBox'
import "./AthleteSearch.css"
import TextField from '@material-ui/core/TextField'

import SearchResults from "./SearchResults"

class AthleteSearch extends React.Component{
    state = {
        search: "",
        searchText:'',
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

    handleEnter = (e) => {
        if (e.key === 'Enter'){
            this.search(this.state.searchText)
            this.setState({searchText: ''})
        }

    }

    handleChange = (e) => {
        this.setState({searchText: e.target.value})
    }

    render(){
        return <div className="athleteSearch">

            {this.props.info.search}
            <div className="searchLeftColumn">
                <DashProfileBox user={this.props.info.user} className="personalProfile"/>
            </div>

            <div className="searchContainer">
                
            <TextField 
                className="searchBar" 
                onKeyPress={this.handleEnter} 
                onChange={this.handleChange}
                value={this.state.searchText}
                label="Search"/>
                <FilterBox filter={this.state.filters} changeFilter={this.changeFilter}/>
                <div className="searchResultsTitle"> Search Results For: {this.state.search}</div>
               
                <SearchResults user={this.props.info.user} upvote={this.upvotePost} filter={this.state.filters} posts={this.state.posts} users={this.state.users}/>
            </div>

            </div>
    }
}

export default AthleteSearch