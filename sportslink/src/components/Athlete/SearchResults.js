import SingleProfileBox from './SingleProfileBox'
import React from 'react'
class SearchResults extends React.Component{
    constructor(props){
        super(props)
    }


    render(){
        return <div>           
            {this.props.users.map((user) => {
              return <SingleProfileBox user={user}/>
            }
            )}
            </div>    

    }
}

export default SearchResults