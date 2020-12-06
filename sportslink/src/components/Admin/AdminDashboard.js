import React from 'react'
import './AdminDashboard.css'
import AdminSearchResults from "./AdminSearchResults"
import AdminSearchBox from './AdminSearchBox'
import AdminSideFilters from './AdminSideFilters'
import {getUsers, updateUserInfo} from "../../actions/profiles"
import {getPosts} from "../../actions/posts"

class AdminDashboard extends React.Component{
    constructor(props) {
        super(props);
        this.props.history.push("/admin");
        getPosts(this)
        getUsers(this)
    }
    state = {
      filters: 'athlete',
      locations: [],
      organizations: [],
      sports: [],
      search: '',
      users: [],
      posts: [],
      click: false
    }

    removePost = (id) => {
      this.state.posts.splice(id, 1)
      this.setState({
        posts: this.state.posts
      })
    }

    updatePreferences = (locations, organizations, sports) => {
      this.setState({locations: locations, organizations: organizations, sports: sports})
      this.filterPreferences()
    }

    changeFilter = (filter) => {
      this.setState({
        filters: filter
      })
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
          allPosts = allPosts.filter(post => post.user.location.toLowerCase().includes(this.state.locations[0].toLowerCase()))
        
      }
      if (this.state.organizations.length > 0){
          allUsers = allUsers.filter(user => user.organization.toLowerCase().includes(this.state.organizations[0].toLowerCase()))
          allPosts = allPosts.filter(post => post.user.organization.toLowerCase().includes(this.state.organizations[0].toLowerCase()))  

      }
      if (this.state.sports.length > 0){

          allUsers = allUsers.filter(user => user.sports.toLowerCase().includes(this.state.sports[0].toLowerCase()))
          allPosts = allPosts.filter(post => post.user.sports.toLowerCase().includes(this.state.sports[0].toLowerCase()))
      }
        this.setState({users: allUsers, posts: allPosts})
      
    }

    adminAction = (action, user) => {

      switch (action){
        case ('suspend'):
          const formComp = [
            { op : "replace", path: "/suspended", value: !user.suspended }
          ]
          updateUserInfo(formComp, user._id, this)
          break;
        case ('remove'):
          break;
        case ('edit'):
        break;
      }
    }

    render(){
        const filters = {locations: this.state.locations, organizations: this.state.organizations, sports: this.state.sports}
        const { history, app } = this.props;
        return <div className="adminDashboard">
          <AdminSideFilters 
          app={app}
          history={history}
          filter={this.state.filters}
          filters={filters}
          updatePref={this.updatePreferences} 
          changeFilter={this.changeFilter}/>
          
          <div className="adminRightColumn">
          <AdminSearchBox search={this.search}/>
          <div hidden={this.state.search.length === 0} className='searchResultTitle'>          
            Search Results For: {this.state.search}
          </div>

          <AdminSearchResults 
            adminAction={this.adminAction} 
            removePost={this.removePost} 
            filter={this.state.filters} 
            filters={filters} 
            posts={this.state.posts} 
            users={this.state.users}
            clickProfile={this.state.click}/>

          
          </div>
        </div>
    }

}

export default AdminDashboard