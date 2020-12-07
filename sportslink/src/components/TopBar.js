import React from 'react'
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import './TopBar.css';
import SearchIcon from "@material-ui/icons/Search"
import MessageIcon from '@material-ui/icons/Message';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { logout } from "../actions/user.js";
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

    home = (app) => {
        this.props.history.push("/");
    };

    profile = (app) => {
        this.props.history.push("/profile");
    };

    search = (app) => {
        this.props.history.push("/search");
    };

    message = (app) => {
        this.props.history.push("/messaging");
    };

    settings = (app) => {
        this.props.history.push("/settings");
    };

    logoutUser = (app) => {
        this.props.history.push("/login");
        logout(app);
    };

    render(){
        const {app} = this.props;
        return <div className="topBar">
            <ul>
            {/* <li>
            <input className="searchTitle" placeholder="Search" onKeyPress={this.handleSearch}/>
            </li> */}
            <li>
            <HomeIcon className={this.state.homeIcon} onClick={() => this.home(this)}/>
            </li>
            <li>
            <PersonIcon className={this.state.userIcon} onClick={() => this.profile(this)}/>
            </li>
            <li>
            <SearchIcon className={this.state.searchIcon} onClick={() => this.search(this)}/>
            </li>
            <li>
            <MessageIcon className={this.state.messageIcon} onClick={() => this.message(this)}/>
            </li>
            <li>
            <SettingsIcon className={this.state.settingsIcon} onClick={() => this.settings(this)}/>
            </li>
            <li>
            <ExitToAppIcon className={this.state.exitIcon} onClick={() => this.logoutUser(app)}/>
            </li>
            </ul>

            </div>
    }
}

export default TopBar