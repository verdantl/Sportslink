import React from 'react'
import FilterBox from '../FilterBox'
import DashProfileBox from './DashProfileBox'
import "./AthleteSearch.css"
import TextField from '@material-ui/core/TextField'
import SearchResults from "./SearchResults"

import {getUsers, getUser} from "../../actions/profiles"
import {getPosts} from "../../actions/posts"
class AthleteSearch extends React.Component{
    constructor(props){
        super(props)
        getUser(this.props.currentUser, this)
        getPosts(this)
        getUsers(this)
    }
    state = {
        user: {},
        search: "",
        searchText:'',
        locations: [],
        organizations: [],
        sports: [],
        users: [],
        posts: [],
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
        this.state.search = searchText
        this.setState({search: searchText})
        this.filterPreferences()
      }
      
    filterPreferences = () => {
        let allUsers = this.state.users.filter(user => user.name.toLowerCase().includes(this.state.search.toLowerCase()))
  
        let allPosts = this.state.posts.filter(post => 
          post.text.toLowerCase().includes(this.state.search.toLowerCase()) | post.user.name.toLowerCase().includes(this.state.search.toLowerCase()))
        if (this.state.locations.length > 0){
            allUsers = allUsers.filter(user => user.location.toLowerCase().includes(this.state.locations[0].toLowerCase()))
            allPosts = allPosts.filter(post => {
                const user = this.state.users.find(indivUser => indivUser.username === post.user.username)
                user.location.toLowerCase().includes(this.state.locations[0].toLowerCase())
            }
            )
          
        }
        if (this.state.organizations.length > 0){
            allUsers = allUsers.filter(user => user.organization.toLowerCase().includes(this.state.organizations[0].toLowerCase()))
            allPosts = allPosts.filter(post => {
                const user = this.state.users.find(indivUser => indivUser.username === post.user.username)
                user.organization.toLowerCase().includes(this.state.organizations[0].toLowerCase())
            })  
  
        }
        if (this.state.sports.length > 0){
  
            allUsers = allUsers.filter(user => user.sports.toLowerCase().includes(this.state.sports[0].toLowerCase()))
            allPosts = allPosts.filter(post => {
                const user = this.state.users.find(indivUser => indivUser.username === post.user.username)
                user.sports.toLowerCase().includes(this.state.sports[0].toLowerCase())
            })
        }
          this.setState({users: allUsers, posts: allPosts})
        
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

    updatePreferences = (locations, organizations, sports) => {
        this.setState({locations: locations, organizations: organizations, sports: sports})
        this.filterPreferences()
      }
  
    render(){
        const filters = {locations: this.state.locations, organizations: this.state.organizations, sports: this.state.sports}
        return <div className="athleteSearch">

            <div className="searchLeftColumn">
                <DashProfileBox user={this.state.user} className="personalProfile"/>
            </div>

            <div className="searchContainer">
                
            <TextField 
                className="searchBar" 
                onKeyPress={this.handleEnter} 
                onChange={this.handleChange}
                value={this.state.searchText}
                label="Search"/>
                <FilterBox 
                updatePref={this.updatePreferences} 
                filters={filters} 
                changeFilter={this.changeFilter}/>
                <div hidden={this.state.search.length === 0}className="searchResultsTitle"> Search Results For: {this.state.search}</div>
               
                <SearchResults 
                history={this.props.history}
                user={this.state.user} 
                upvote={this.upvotePost} 
                filter={this.state.filters} 
                posts={this.state.posts} 
                users={this.state.users}/>
            </div>

            </div>
    }
}

export default AthleteSearch