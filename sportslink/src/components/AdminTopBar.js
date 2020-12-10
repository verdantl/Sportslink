import React from 'react'
import HomeIcon from '@material-ui/icons/Home';

import './TopBar.css';


class AdminTopBar extends React.Component{

    state = {
        homeIcon: 'homeIcon',
    }
    
    home = (app) => {
        this.props.history.push("/");
    };
    
    render(){
        console.log(this.props)
        return <div className="topBar">
            <ul>

            <li>
            <HomeIcon className={this.state.homeIcon} onClick={() => this.home(this)}/>
            </li>

            </ul>

            </div>
    }
}

export default AdminTopBar