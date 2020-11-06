import React from 'react'


class Biography extends React.Component{
    render(){
        return <div className = 'profileBio'>
            {this.props.description} 
            
        </div>
    }
}

export default Biography