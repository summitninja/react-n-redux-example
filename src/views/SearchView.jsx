import {set} from "../stores/QueryData.js"
import { useSelector, useDispatch } from 'react-redux'
function SearchBar(){
    const query = useSelector(state => state.queryData.value)
    const dispatch = useDispatch()

    return (<>
    <input type="text" onChange={(e)=>{dispatch(set(e.target.value))}} />
        <p>{query}</p>
    </>)
}

export default SearchBar