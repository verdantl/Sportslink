import React from 'react'
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';
import './TopBar.css';
class TopBar extends React.Component{

    state = {
        homeIcon: 'homeIcon',
        settingsIcon: 'settingsIcon'
    }

    handleHover = (event) => {
        console.log(event.target.parentElement)
        if (event.target.parentElement.classList[0] === 'homeIcon'){
            this.setState({homeIcon: 'homeIconHover'})

        }
        else if (event.target.parentElement.classList[0] === 'settingsIcon'){
            this.setState({settingsIcon: 'settingsIconHover'})

        }

    }

    handleHoverOff = (event) => {
        if (event.target.parentElement.classList[0] === 'homeIconHover'){
            this.setState({homeIcon: 'homeIcon'})

        }
        else if (event.target.parentElement.classList[0] === 'settingsIconHover'){
            this.setState({settingsIcon: 'settingsIcon'})

        }
    }


    render(){
        return <div className="topBar">
            <ul>
            <li className={this.state.homeIcon}>
            <HomeIcon className='home' onMouseEnter={this.handleHover} onMouseLeave={this.handleHoverOff}/>
            </li>
            <li className={this.state.settingsIcon}>
            <SettingsIcon className='settings' onMouseEnter={this.handleHover} onMouseLeave={this.handleHoverOff}/>
            </li>
            </ul>

            </div>
    }
}

export default TopBar