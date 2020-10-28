import React from 'react'
import Checkbox from "@material-ui/core/Checkbox"
import Select from "@material-ui/core/Select"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import FormControl from "@material-ui/core/FormControl"
import InputLabel from "@material-ui/core/InputLabel"
import SearchIcon from '@material-ui/icons/Search';
import "../components-css/SearchBox.css"



class SearchBox extends React.Component{
    render(){
        return <div className="searchBox">
        <div className="searchTitle">
            <p className="garamond"> Search</p>
        </div>
        <FormControlLabel className="boxes"
        control={<Checkbox  name="checkedAthlete" />}
        label="Athletes"
        />

        <FormControlLabel className="boxes"
        control={<Checkbox name="checkedRecruiters" />}
        label="Recruiters"
        />
        
        <FormControl className='boxes'>
            <InputLabel>
            Filter preferences
            </InputLabel>
            <Select
                native
                value="Bobby"
                inputProps={{
                name: 'age',
                id: 'age-native-simple',
                }}
                >
                <option aria-label="None" value="" />
                <option value={10}>Ten</option>
                <option value={20}>Twenty</option>
                <option value={30}>Filter preferences </option>
            </Select>
        </FormControl>
        <div className="searchButton"><SearchIcon/></div>


        </div>

        
    }
}

export default SearchBox