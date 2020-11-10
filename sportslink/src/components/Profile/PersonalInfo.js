import React from 'react'
import Edit from '@material-ui/icons/Edit'

class PersonalInfo extends React.Component{

    render(){
        const {global} = this.props;
        return <div className='personalInfo'>

            <div>
            <h4 className="detailsTitle">Location:</h4> {global.location}
            </div>
            <div>
            <h4 className="detailsTitle">Current Organization:</h4> {global.organization}
            </div>
            <div>
            <h4 className="detailsTitle">Sport(s):</h4> {global.sports}
            </div>


        </div>
    }
}

export default PersonalInfo