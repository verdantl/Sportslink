import React from 'react'
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import './TopBar.css';
class TopBar extends React.Component{

    state = {
        homeIcon: 'homeIcon',
        settingsIcon: 'settingsIcon',
        userIcon: 'userIcon'
    }
    handleHomeHover = (event) => {
        this.setState({homeIcon: 'homeIconLight'})
    }


    handleHomeHoverOff = (event) => {
        this.setState({homeIcon: 'homeIcon'})
    }


    handleUserHover = (event) => {
        this.setState({userIcon: 'userIconLight'})
    }


    handleUserHoverOff = (event) => {
        this.setState({userIcon: 'userIcon'})
    }

    handleSettingsHover = (event) => {
        this.setState({settingsIcon: 'settingsIconLight'})
    }


    handleSettingsHoverOff = (event) => {
        this.setState({settingsIcon: 'settingsIcon'})
    }

    render(){
        return <div className="topBar">
            <ul>
            <li>
            <input className="searchTitle" placeholder="Search"/>
            </li>
            <li>
            <HomeIcon className={this.state.homeIcon} onMouseEnter={this.handleHomeHover} onMouseLeave={this.handleHomeHoverOff}/>
            </li>
            <li>
            <PersonIcon className={this.state.userIcon} onMouseEnter={this.handleUserHover} onMouseLeave={this.handleUserHoverOff}/>
            </li>
            <li>
            <SettingsIcon className={this.state.settingsIcon} onMouseEnter={this.handleSettingsHover} onMouseLeave={this.handleSettingsHoverOff}/>
            </li>
            </ul>

            </div>
    }
}

export default TopBar