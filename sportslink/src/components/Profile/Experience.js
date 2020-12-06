import React from 'react'
import {uid} from 'react-uid'
import ExperienceCard from './ExperienceCard'
import AddCircleIcon from '@material-ui/icons/AddCircle';

class Experience extends React.Component{
    state ={
        addButtonClass : 'addExperienceButton'        
    }

    handleButtonOn = (event) => {
        this.setState({addButtonClass: 'addExperienceButtonLight'})

    }

    handleButtonOff = (event) => {
        this.setState({addButtonClass: 'addExperienceButton'})

    }
    render(){
        console.dir(this);
        return <div className="experience">
           <span><h1>Experience </h1> </span> <span>  <AddCircleIcon className={this.state.addButtonClass} onMouseEnter={this.handleButtonOn} onMouseLeave={this.handleButtonOff}/></span> 
           {this.props.experience.map((entry) => {
              return <ExperienceCard className="experienceCard" experience={entry} key={uid(entry)} updateExperience={this.props.updateExperience.bind(this)} setBoxState={this.props.setBoxState.bind(this)} setIdToEdit={this.props.setIdToEdit.bind(this)}/>

            }
            )}

        </div>
    }
}

export default Experience