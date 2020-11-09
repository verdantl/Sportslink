import React from 'react'
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import './TopBar.css';
import SearchIcon from "@material-ui/icons/Search"
import MessageIcon from '@material-ui/icons/Message';
import {barClick} from "../actions/user.js";
import {search} from '../actions/user.js'

class TopBar extends React.Component{

    state = {
        homeIcon: 'homeIcon',
        settingsIcon: 'settingsIcon',
        userIcon: 'userIcon',
        messageIcon: 'messageIcon'
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


    handleMessageHover = (event) => {
        this.setState({messageIcon: 'messageIconLight'})
    }


    handleMessageHoverOff = (event) => {
        this.setState({messageIcon: 'messageIcon'})
    }

    handleSearch = (event) => {
        if (event.key === 'Enter'){
            this.props.search(event.target.value)
            search();
        }
    }
    render(){
        return <div className="topBar">
            <ul>
            <li>
            <input className="searchTitle" placeholder="Search" onKeyPress={this.handleSearch}/>
            </li>
            <li>
            <HomeIcon className={this.state.homeIcon} onMouseEnter={this.handleHomeHover} onMouseLeave={this.handleHomeHoverOff} onClick={() => barClick(this)}/>
            </li>
            <li>
            <PersonIcon className={this.state.userIcon} onMouseEnter={this.handleUserHover} onMouseLeave={this.handleUserHoverOff} onClick={() => barClick(this)}/>
            </li>
            <li>
            <MessageIcon className={this.state.messageIcon} onMouseEnter={this.handleMessageHover} onMouseLeave={this.handleMessageHoverOff} onClick={() => barClick(this)}/>
            </li>
            <li>
            <SettingsIcon className={this.state.settingsIcon} onMouseEnter={this.handleSettingsHover} onMouseLeave={this.handleSettingsHoverOff} onClick={() => barClick(this)}/>
            </li>
            </ul>

            </div>
    }
}

export default TopBar