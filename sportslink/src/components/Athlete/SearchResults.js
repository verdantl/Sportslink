import SingleProfileBox from './SingleProfileBox'
import React from 'react'
import { uid } from "react-uid";

class SearchResults extends React.Component{


    render(){
        return <div>           
            {this.props.users.map((user) => {
              return <SingleProfileBox key={uid(user)} user={user}/>
            }
            )}
            </div>    

    }
}

export default SearchResults