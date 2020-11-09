import React from 'react'
import './Dashboard.css'
import DashProfileBox from '../Athlete/DashProfileBox'
import NewsBox from './NewsBox'
import lebron from '../images/lebron.jpg'
import harden from '../images/harden.jpg'
import kawhi from '../images/kawhi.jpg'
import durant from '../images/durant.jpg'
import NewPost from './NewPost'
import Posts from './Posts'

class Dashboard extends React.Component{
    state = {
        user: {
            image: lebron,
            name: "Lebron James"
        },
        users: [
          {image: harden, name: 'James Harden', description: "No. 13, Houston Rockets. 3x scoring champion"},
          {image: kawhi, name: "Kawhi Leonard  ", description: "2x Finals MVP, LA Clippers SF"},
          {image: durant, name: "Kevin Durant", description: "NBA Player for the Brooklyn Nets"}
        ],
        posts: [
            {user: {name: 'Lebron James', image: lebron}, text: "Finals MVP, 2020!!!", likes: 2, comments: [{user: {name: 'Kawhi Leonard', image: kawhi}, text: "I wish I were a Laker..."}, {user: {name: 'Kevin Durant', image: durant}, text: "Great post!"}]}, 
            {user: {name: 'Lebron James', image: lebron}, text: "Lakers have reached the Finals", likes: 5, comments: [{user: {name: 'James Harden', image: harden}, text: "Good match..."}, {user: {name: 'Kevin Durant', image: durant}, text: "You are a great player!"}]}]
      }

    createNewPost = (post) => {
        let currPosts = this.state.posts
        currPosts.unshift({user: {name: 'Lebron James', image: lebron}, text: post, likes: 0, comments: []})
        this.setState({posts: currPosts})
    }

    render(){
        return <div className="dashboard">
            <div className="dashboardLeftColumn">
                <DashProfileBox user={this.state.user} className="personalProfile"/>
                <NewsBox/>                
                </div>
            <div className="dashboardRightColumn">
                <NewPost createNewPost={this.createNewPost}/>
                <Posts posts={this.state.posts}/>
            </div>

        </div>
    }
}

export default Dashboard