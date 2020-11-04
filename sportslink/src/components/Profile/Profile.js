import React from 'react'
import ProfilePicture from './ProfilePicture'
import Biography from './Biography'
import Images from './Images'
import Career from './Career'
import PersonalInfo from './PersonalInfo'
import Experience from './Experience'
import './profile.css'
import coolcat from '../images/coolcat.jpg'
import icedragon from '../images/icedragon.jpg'
import lebron from '../images/lebron.jpg'

class Profile extends React.Component{
    state = {
        images: [coolcat, icedragon],
        user: {
            name: "Lebron James",
            image: lebron,
            description: "Stuff",
            location: "Los Angeles, California",
            organization: "Los Angeles Lakers",
            sports:"Basketball",
            contact: "",
            accomplishments: ["4x NBA Champion", '4x NBA Finals MVP', '4x NBA MVP', '16x NBA All Star', '13x All-NBA First Team'],
            experience: [{title: 'Point Guard', organization: 'Los Angeles Lakers', league: "NBA", stats: {'2019': '25 ppg, 10apg'},
            description: 'Led Lakers to a championship in the NBA Bubble 2020, averaging almost 30 ppg in the Finals against the Miami Heat',
            years: '2018-2020'},
            {title: 'Small Forward', organization: 'Cleveland Cavaliers', league: "NBA", stats:{},
            description: 'Made the NBA Finals in all four years, came back from a 3-1 deficit and won a championship in the 2016 NBA FInals', years: '2014-2018'},
            {title: 'Small Forward', organization: 'Miami Heat', league: "NBA", stats:{},
            description: 'Made the NBA Finals in all four years, delivered two championships and won Finals MVP in 2012 and 2013', years: '2010-2014'},
            {title: 'Small Forward', organization: 'Cleveland Cavaliers', league: "NBA", stats:{},
            description: 'Took the team to an NBA Finals in 2009, averaged over 25 ppg', years: '2003-2010'}]
            }
    }
    render(){
        return <div className="profile">
            <div className="profileCard">
            <div className="profileInfo">
            <ProfilePicture image={this.state.user.image} name={this.state.user.name}/>
            
            <div className="contactDetails"> 
            <div className="contact">Contact </div>

            <PersonalInfo user={this.state.user}/>
            </div>
            
            </div>
            <Biography/>
            </div>

            <div className="achievements">
                <div></div>
                <Experience experience={this.state.user.experience}/>
                <div className="profileRightColumn">
                <Images images={this.state.images}/>
                <Career accomplishments={this.state.user.accomplishments}/>
                </div>

            </div>
        </div>
    }
}

export default Profile