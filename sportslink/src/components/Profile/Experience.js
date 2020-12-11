import React from 'react'
import {uid} from 'react-uid'
import ExperienceCard from './ExperienceCard'
import AddCircleIcon from '@material-ui/icons/AddCircle';

class Experience extends React.Component{

    handleAddButtonClick = (event) =>{
        this.props.setBoxState(2);
    }

    render(){
        return <div className="experience">
           <span><h1>Experience </h1> </span> <span>  <AddCircleIcon className={"addExperienceButton"} onClick={this.handleAddButtonClick}/></span> 
           {this.props.experience.map((entry) => {
              return <ExperienceCard className="experienceCard" experience={entry} key={uid(entry)} updateExperience={this.props.updateExperience.bind(this)} setBoxState={this.props.setBoxState.bind(this)} setIdToEdit={this.props.setIdToEdit.bind(this)}/>

            }
            )}

        </div>
    }
}

export default Experience