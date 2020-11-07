import React from 'react'
import Edit from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete';
import EditButton from './EditButton'
import DeleteButton from './DeleteButton'

class ExperienceCard extends React.Component{
    state = {
        hideButtons: true
    }

    handleDisplay = (event) => {
        this.setState({hideButtons: false})
    }

    handleHide = (event) => {
        this.setState({hideButtons: true})
    }

    render(){
        return <div className={this.props.className} onMouseEnter={this.handleDisplay} onMouseLeave={this.handleHide}>
            <h2>{this.props.experience.title}</h2>
            <h3>{this.props.experience.organization} {this.props.experience.years}</h3>
            <h4>{this.props.experience.league}</h4>
            <p>{this.props.experience.description}</p>
            <div className="editDelete" hidden={this.state.hideButtons}>
                <EditButton/>
                <DeleteButton/>
            </div>
        </div>
    }
}

export default ExperienceCard