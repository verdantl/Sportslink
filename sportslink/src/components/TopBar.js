import React from 'react'
import SettingsIcon from '@material-ui/icons/Settings';
import HomeIcon from '@material-ui/icons/Home';

class TopBar extends React.Component{

    render(){
        return <div>
            <HomeIcon/>
            <SettingsIcon/>

            </div>
    }
}

export default TopBar