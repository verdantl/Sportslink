import React from 'react'
import './AdminDashboard.css'
import AdminSearchResults from "./AdminSearchResults"
import AdminSearchBox from './AdminSearchBox'
import lebron from '../images/lebron.jpg'
import harden from '../images/harden.jpg'
import kawhi from '../images/kawhi.jpg'
import durant from '../images/durant.jpg'
import AdminSideFilters from './AdminSideFilters'

class AdminDashboard extends React.Component{
    state = {

      users: [
        {image: lebron, name: "Lebron James", description:'Point guard for the Los Angeles Lakers. 4 time NBA champion, 4x Finals MVP, 4x Regular Season MVP.'},
        {image: harden, name: 'James Harden', description: "No. 13, Houston Rockets. 3x scoring champion"},
        {image: kawhi, name: "Kawhi Leonard  ", description: "2x Finals MVP, LA Clippers SF"},
        {image: durant, name: "Kevin Durant", description: "NBA Player for the Brooklyn Nets"}
      ],
      posts: [
        {user: {name: 'Lebron James', image: lebron}, text: "Finals MVP, 2020!!!", likes: 2, comments: [{user: {name: 'Kawhi Leonard', image: kawhi}, text: "I wish I were a Laker..."}, {user: {name: 'Kevin Durant', image: durant}, text: "Great post!"}]}, 
        {user: {name: 'Lebron James', image: lebron}, text: "Lakers have reached the Finals", likes: 5, comments: [{user: {name: 'James Harden', image: harden}, text: "Good match..."}, {user: {name: 'Kevin Durant', image: durant}, text: "You are a great player!"}]}]
    }
    removePost = (id) => {
      this.state.posts.splice(id, 1)
      this.setState({
        posts: this.state.posts
      })
    }
    render(){
        return <div className="adminDashboard">
          <AdminSideFilters/>
          <div className="adminRightColumn">
          <AdminSearchBox/>

          <AdminSearchResults removePost={this.removePost} posts={this.state.posts} users={this.state.users}/>
          </div>


        </div>
    }

}

export default AdminDashboard