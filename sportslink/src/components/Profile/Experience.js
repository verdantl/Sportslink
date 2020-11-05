import React from 'react'
import {uid} from 'react-uid'
import ExperienceCard from '../ViewProfile/ExperienceCard'
import AddCircleIcon from '@material-ui/icons/AddCircle';

class Experience extends React.Component{

    render(){
        return <div className="experience">
           <span><h1>Experience </h1>   <AddCircleIcon className="addExperienceButton"/></span> 
           {this.props.experience.map((entry) => {
              return <ExperienceCard className="experienceCardEditable" experience={entry} key={uid(entry)}/>

            }
            )}

        </div>
    }
}

export default Experience