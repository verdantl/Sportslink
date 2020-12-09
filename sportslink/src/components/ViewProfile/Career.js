import React from 'react'
import {uid} from 'react-uid'

class Career extends React.Component{
    render(){
        return <div className="profileCareer">
           <h1>Career Accomplishments</h1>
           {this.props.accomplishments.map((accomplishment) => {
              return <div key={uid(accomplishment)} className='accomplishmentCard'>
                  <span>{accomplishment.career}</span>

              </div>
            }
            )}
        </div>
    }
}

export default Career