import React from 'react'
import './Dashboard.css'
import DashProfileBox from '../Athlete/DashProfileBox'
import NewsBox from './NewsBox'
import lebron from '../images/lebron.jpg'
import NewPost from './NewPost'
import Posts from './Posts'
import { getPosts, newPost, newComment } from '../../actions/posts'

class Dashboard extends React.Component{
    constructor(props) {
        super(props);
        this.props.history.push("/dashboard");
        getPosts(this)
    }
    
    state = {
        user: {
            image: lebron,
            name: "Lebron James",
            username: "user"
        },
        users: this.props.users,
        posts: []
      }

    createNewPost = (postText) => {
        const post = {
            user: this.state.user,
            text: postText
        }
        newPost(post)
        getPosts(this)
    }

    addNewComment = (commentText, postID) => {
        const comment = {
            user: this.state.user,
            text: commentText
        }
        newComment(comment, postID)
        getPosts(this)
    }
    upvotePost = (post, number) => {
        this.state.posts[post].likes += number;
        this.setState({posts: this.state.posts})
    }


    render(){

        return <div className="dashboard">
            <div className="dashboardLeftColumn">
                <DashProfileBox user={this.state.user} className="personalProfile"/>
                <NewsBox/>                
                </div>
            <div className="dashboardRightColumn">
                <NewPost createNewPost={this.createNewPost}/>
                {/* Removed posts temporarily */}
                <Posts 
                // user={this.state.user} 
                upvote={this.upvotePost} newComment={this.addNewComment} posts={this.state.posts}/>
            </div>

        </div>
    }
}

export default Dashboard