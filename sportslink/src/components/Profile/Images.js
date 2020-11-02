import React from 'react'
import coolcat from '../images/coolcat.jpg'

class Images extends React.Component{
    render(){
        return <div className='profileImages'>
            <img src={coolcat}/>
        </div>
    }
}
export default Images;