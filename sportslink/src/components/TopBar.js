import React from 'react'
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import './TopBar.css';
import SearchIcon from "@material-ui/icons/Search"
import MessageIcon from '@material-ui/icons/Message';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {barClick} from "../actions/user.js";
import {search} from '../actions/user.js'

class TopBar extends React.Component{

    state = {
        homeIcon: 'homeIcon',
        settingsIcon: 'settingsIcon',
        userIcon: 'userIcon',
        messageIcon: 'messageIcon',
        searchIcon: 'searchIcon',
        exitIcon: 'exitIcon'
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
            {/* <li>
            <input className="searchTitle" placeholder="Search" onKeyPress={this.handleSearch}/>
            </li> */}
            <li>
            <HomeIcon className={this.state.homeIcon} onClick={() => barClick(this)}/>
            </li>
            <li>
            <PersonIcon className={this.state.userIcon} onClick={() => barClick(this)}/>
            </li>
            <li>
            <SearchIcon className={this.state.searchIcon} onClick={() => barClick(this)}/>
            </li>
            <li>
            <MessageIcon className={this.state.messageIcon} onClick={() => barClick(this)}/>
            </li>
            <li>
            <SettingsIcon className={this.state.settingsIcon} onClick={() => barClick(this)}/>
            </li>
            <li>
            <ExitToAppIcon className={this.state.exitIcon} onClick={() => barClick(this)}/>
            </li>
            </ul>

            </div>
    }
}

export default TopBar