import React from 'react'
import {uid} from 'react-uid'
import ExperienceCard from './ExperienceCard'

class Experience extends React.Component{

    render(){
        return <div className="experience">
            <h1>Experience </h1>
           {this.props.experience.map((entry) => {
              return <ExperienceCard className="experienceCard" experience={entry} key={uid(entry)}/>

            }
            )}
        </div>
    }
}

export default Experience