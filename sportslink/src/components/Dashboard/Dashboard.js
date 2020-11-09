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
        ]
      }


    render(){
        return <div className="dashboard">
            <div className="dashboardLeftColumn">
                <DashProfileBox user={this.state.user} className="personalProfile"/>
                <NewsBox/>                
                </div>
            <div className="dashboardRightColumn">
                <NewPost/>
                <Posts/>
            </div>

        </div>
    }
}

export default Dashboard