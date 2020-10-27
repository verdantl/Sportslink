import React from 'react'
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';
import '../components-css/TopBar.css';
class TopBar extends React.Component{

    render(){
        return <div className="topBar">

            <HomeIcon className="homeIcon"/>
            <SettingsIcon className="settingsIcon"/>

            </div>
    }
}

export default TopBar