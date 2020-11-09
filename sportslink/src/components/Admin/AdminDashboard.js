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
      users: this.props.info.users,
      posts: this.props.info.posts
    }

    removePost = (id) => {
      this.state.posts.splice(id, 1)
      this.setState({
        posts: this.state.posts
      })
    }

    changeFilter = (filter) => {
      this.setState({
        filters: filter
      })
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
          <AdminSideFilters filter={this.state.filters} changeFilter={this.changeFilter}/>
          <div className="adminRightColumn">
          <AdminSearchBox/>

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