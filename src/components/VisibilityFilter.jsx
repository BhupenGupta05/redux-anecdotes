import { useDispatch } from "react-redux"
import { filterChange } from "../reducers/filterReducer"

const VisibilityFilter = () => {
    const dispatch = useDispatch()

  return (
    <div>
        filter
        <input type="text" 
        name="filter"
        onChange={(e) => dispatch(filterChange(e.target.value))}/>
    </div>
  )
}

export default VisibilityFilter