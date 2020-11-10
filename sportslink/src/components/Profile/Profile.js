import React from 'react'
import Biography from '../ViewProfile/Biography'
import Images from './Images'
import Career from './Career'
import ProfileInfo from './ProfileInfo'
import Experience from './Experience'
import './profile.css'
import coolcat from '../images/coolcat.jpg'
import icedragon from '../images/icedragon.jpg'
import lebron from '../images/lebron.jpg'
import EditButton from './EditButton'


class Profile extends React.Component{
    state = {
        contactClass: 'contact',

        user: {
            name: "Lebron James",
            image: lebron,
            images: [coolcat, icedragon],
            description: 'Point guard for the Los Angeles Lakers. 4 time NBA champion, 4x Finals MVP, 4x Regular Season MVP.',
            location: "Los Angeles, California",
            organization: "Los Angeles Lakers",
            sports:"Basketball",
            contact: "",
            accomplishments: ["4x NBA Champion", '4x NBA Finals MVP', '4x NBA MVP', '16x NBA All Star', '13x All-NBA First Team'],
            experience: [{id: '0', title: 'Point Guard', organization: 'Los Angeles Lakers', league: "NBA", stats: {'2019': '25 ppg, 10apg'},
            description: 'Led Lakers to a championship in the NBA Bubble 2020, averaging almost 30 ppg in the Finals against the Miami Heat',
            years: '2018-2020'},
            {id: '1', title: 'Small Forward', organization: 'Cleveland Cavaliers', league: "NBA", stats:{},
            description: 'Made the NBA Finals in all four years, came back from a 3-1 deficit and won a championship in the 2016 NBA FInals', years: '2014-2018'},
            {id: '2', title: 'Small Forward', organization: 'Miami Heat', league: "NBA", stats:{},
            description: 'Made the NBA Finals in all four years, delivered two championships and won Finals MVP in 2012 and 2013', years: '2010-2014'},
            {id: '3', title: 'Small Forward', organization: 'Cleveland Cavaliers', league: "NBA", stats:{},
            description: 'Took the team to an NBA Finals in 2009, averaged over 25 ppg', years: '2003-2010'}]
            }
    }

    handleButtonOff = (event) => {
        this.setState({addButtonClass: 'addExperienceButton'})

    }
    
    updateExperience = (id, title, organization, league, stats, description, years) => {
        console.log('this.state.user.experience');
        console.dir(this.state.user.experience);
        console.log('id', id);
        console.log('league', league);
        
        var experiences = this.state.user.experience;
        var i;
        for (i in experiences){
            console.dir(experiences[i])
            if (experiences[i].id == id){
                experiences[i].title = title;
                experiences[i].organization = organization;
                experiences[i].league = league;
                experiences[i].stats = stats;
                experiences[i].description = description;
                experiences[i].years = years;
            }
        }
        console.dir(experiences)
        this.setState({experience: experiences});
    }

    render(){
        const {global} = this.props;
        return <div className={(global.player) ? "userProfile" : "recruiterProfile"}>
            <div className="profileCard">
                <ProfileInfo user={global.name} global={global}/>
                <div className='editSection'>
                <Biography description={global.description}/>
                <EditButton/>
                </div>

            </div>

            <div className="achievements">
                <div></div>
                <Experience experience={global.experience} updateExperience={this.updateExperience.bind(global)}/>
                <div className="profileRightColumn">
                <Images images={this.state.user.images}/>
                <Career accomplishments={global.accomplishments}/>
                </div>
                
            </div>
        </div>
    }
}

export default Profile