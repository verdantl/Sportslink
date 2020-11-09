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
        user: {
            image: lebron,
            name: "Lebron James"
        },
        users: [
          {image: harden, userType: "athlete", name: 'James Harden', description: "No. 13, Houston Rockets. 3x scoring champion", location: "Houston TX, USA"},
          {image: kawhi, userType: "athlete", name: "Kawhi Leonard  ", description: "2x Finals MVP, LA Clippers SF", location: "Los Angeles CA, USA"},
          {image: durant, userType: "athlete", name: "Kevin Durant", description: "NBA Player for the Brooklyn Nets", location: "Brooklyn NY, USA"}
        ],
        posts: [
            {user: {name: 'Lebron James', image: lebron}, text: "Finals MVP, 2020!!!", likes: 2, comments: [{user: {name: 'Kawhi Leonard', image: kawhi}, text: "I wish I were a Laker..."}, {user: {name: 'Kevin Durant', image: durant}, text: "Great post!"}]}, 
            {user: {name: 'Lebron James', image: lebron}, text: "Lakers have reached the Finals", likes: 5, comments: [{user: {name: 'James Harden', image: harden}, text: "Good match..."}, {user: {name: 'Kevin Durant', image: durant}, text: "You are a great player!"}]}]
      }

    render(){
        return <div className="athleteSearch">
            <div className="searchLeftColumn">
                <DashProfileBox user={this.state.user} className="personalProfile"/>
            </div>

            <div className="searchContainer">
                <FilterBox />
                <SearchResults posts={this.state.posts} users={this.state.users}/>
            </div>

            </div>
    }
}

export default AthleteSearch