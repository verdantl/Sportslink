import React from 'react'
import ProfilePicture from './ProfilePicture'
import Biography from './Biography'
import Images from './Images'
import Career from './Career'
import PersonalInfo from './PersonalInfo'
import Experience from './Experience'
import './viewProfile.css'
import coolcat from '../images/coolcat.jpg'
import icedragon from '../images/icedragon.jpg'
import lebron from '../images/lebron.jpg'

class ViewProfile extends React.Component{
    state = {
        contactClass: 'contact',
        images: [coolcat, icedragon],
        user: {
            name: "Lebron James",
            image: lebron,
            description: 'Point guard for the Los Angeles Lakers. 4 time NBA champion, 4x Finals MVP, 4x Regular Season MVP.',
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

    handleButton = (event) => {
        if (event.target.classList[0] === 'contact'){
            this.setState({contactClass: 'contactLight'})
        }
        else{
            this.setState({contactClass: 'contact'})
        }
    }
    render(){
        const {global} = this.props;
        return <div className="profile">
            <div className="profileCard">
            <div className="profileInfo">
            <ProfilePicture image={global.image} name={global.name}/>
            
            <div className="contactDetails"> 
            <div className={this.state.contactClass} onMouseEnter={this.handleButton} onMouseLeave={this.handleButton}>Contact </div>

            <PersonalInfo user={global}/>
            </div>
            
            </div>
            <Biography description={global.description}/>
            </div>

            <div className="achievements">
                <div></div>
                <Experience experience={global.experience}/>
                <div className="profileRightColumn">
                <Images images={this.state.images}/>
                <Career accomplishments={global.accomplishments}/>
                </div>

            </div>
        </div>
    }
}

export default ViewProfile