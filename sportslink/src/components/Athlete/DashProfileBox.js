import React from 'react'
import './DashProfileBox.css'


class DashProfileBox extends React.Component{

    constructor(props){
        super(props)
    }


    render(){
        return <div className="personalProfileBox">
                    <div className="personalPic">
                        <img src={this.props.user.image}/>
                    </div>
                    <div className="personalProfileName">
                        {this.props.user.name}
                    </div>
                    <p>View your profile</p>

                </div>
    }
}

export default DashProfileBox