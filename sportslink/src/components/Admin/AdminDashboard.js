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
      posts: this.props.info.posts
    }

    removePost = (id) => {
      this.state.posts.splice(id, 1)
      this.setState({
        posts: this.state.posts
      })
    }

    updatePreferences = (locations, organizations, sports) => {
      this.setState({locations: locations, organizations: organizations, sports: sports})
    }

    changeFilter = (filter) => {
      this.setState({
        filters: filter
      })
    }

    search = (searchText) => {
      const searchedUsers = this.props.info.users.filter(user => user.name.toLowerCase().includes(searchText.toLowerCase()))

      const searchedPosts = this.props.info.posts.filter(post => 
        post.text.toLowerCase().includes(searchText.toLowerCase()) | post.user.name.toLowerCase().includes(searchText.toLowerCase()))

      this.setState({search: searchText, users: searchedUsers, posts: searchedPosts})
    }

    filterPreferences = () => {
      if (this.state.locations.length > 0){
        const users = {}
        for (let i = 0; i < this.state.locations.length; i++){
          
        }
      }
      if (this.state.organizations.length > 0){

      }
      if (this.state.organizations.length > 0){

      }
      if (this.state.locations.length === 0 && this.state.organizations.length === 0 && this.state.sports.length === 0){
        this.setState({users: this.props.info.users, posts: this.props.info.posts})
      }
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
            users={this.state.users}/>

          
          </div>

          

        </div>
    }

}

export default AdminDashboard