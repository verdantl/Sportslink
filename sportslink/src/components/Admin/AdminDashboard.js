import React from 'react'
import './AdminDashboard.css'
import AdminSearchResults from "./AdminSearchResults"
import AdminSearchBox from './AdminSearchBox'
import AdminSideFilters from './AdminSideFilters'

class AdminDashboard extends React.Component{
    state = {
      filters: 'athlete',
      locations: [],
      organizations: [],
      sports: [],
      search: '',
      users: this.props.info.users,
      posts: this.props.info.posts,
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
      let allUsers = this.props.info.users.filter(user => user.name.toLowerCase().includes(this.state.search.toLowerCase()))

      let allPosts = this.props.info.posts.filter(post => 
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

    adminAction = (action, id) => {
      const user = this.state.users[id]
      switch (action){
        case ('suspend'):
          user.suspended = !user.suspended;
          this.setState({users: this.state.users})
          break;
        case ('remove'):
          this.state.users.splice(id, 1)
          this.setState({users: this.state.users})
          break;
        case ('edit'):
        this.setState({users: this.state.users})
        break;
      }
    }

    render(){
        const filters = {locations: this.state.locations, organizations: this.state.organizations, sports: this.state.sports}
        return <div className="adminDashboard">
          <AdminSideFilters 
          filter={this.state.filters}
          filters={filters}
          updatePref={this.updatePreferences} 
          changeFilter={this.changeFilter}/>
          
          <div className="adminRightColumn">
          <AdminSearchBox search={this.search}/>
          <div className='searchResultTitle'>          
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