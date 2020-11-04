import React from 'react'

class ExperienceCard extends React.Component{
    render(){
        return <div className="experienceCard">
            <h4>{this.props.experience.title}</h4>
            <h5>{this.props.experience.organization} {this.props.experience.years}</h5>
            <h6>{this.props.experience.league}</h6>
            {/* <p>{this.props.experience.stats}</p> */}
            <p>{this.props.experience.description}</p>

        </div>
    }
}

export default ExperienceCard