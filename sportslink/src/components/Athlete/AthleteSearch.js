import React from 'react'
import FilterBox from '../FilterBox'
import DashProfileBox from './DashProfileBox'
import SingleProfileBox from './SingleProfileBox'
import "./AthleteSearch.css"
import lebron from '../images/lebron.jpg'
import harden from '../images/harden.jpg'
import kawhi from '../images/kawhi.jpg'
import durant from '../images/durant.jpg'

import SearchResults from "./SearchResults"


// import AthleteDashBoardProfile from './AthleteDashboardProfile'

class AthleteSearch extends React.Component{
    state = {
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

    render(){
        return <div className="athleteSearch">
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