import React from 'react'
import HomeIcon from '@material-ui/icons/Home';

import './TopBar.css';


class AdminTopBar extends React.Component{

    state = {
        homeIcon: 'homeIcon',
    }
    handleHomeHover = (event) => {
        this.setState({homeIcon: 'homeIconLight'})
    }


    handleHomeHoverOff = (event) => {
        this.setState({homeIcon: 'homeIcon'})
    }

    handleClick = (event) => {
        window.location.href = '/admin'
    }

    
    render(){
        return <div className="topBar">
            <ul>

            <li>
            <HomeIcon className={this.state.homeIcon} onMouseEnter={this.handleHomeHover} onMouseLeave={this.handleHomeHoverOff} onClick={this.handleClick}/>
            </li>

            </ul>

            </div>
    }
}

export default AdminTopBar