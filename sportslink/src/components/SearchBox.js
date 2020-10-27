import React from 'react'
import Checkbox from "@material-ui/core/Checkbox"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import "../components-css/SearchBox.css"

class SearchBox extends React.Component{
    render(){
        return <div>
        <div className="searchTitle">
            <p className="garamond"> Search</p>
        </div>
        <FormControlLabel
        control={<Checkbox  name="checkedAthlete" />}
        label="Athletes"
        />

        <FormControlLabel
        control={<Checkbox name="checkedRecruiters" />}
        label="Recruiters"
        />
        </div>
    }
}

export default SearchBox