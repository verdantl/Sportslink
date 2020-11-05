import React from 'react'

class ExperienceCard extends React.Component{
    render(){
        return <div className={this.props.className}>
            <h2>{this.props.experience.title}</h2>
            <h3>{this.props.experience.organization} {this.props.experience.years}</h3>
            <h4>{this.props.experience.league}</h4>
            {/* <p>{this.props.experience.stats}</p> */}
            <p>{this.props.experience.description}</p>

        </div>
    }
}

export default ExperienceCard