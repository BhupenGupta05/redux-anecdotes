import { useDispatch } from "react-redux"
import { filterChange } from "../reducers/filterReducer"

const VisibilityFilter = () => {
    const dispatch = useDispatch()

    const style = {
      marginBottom: 10,
    }

  return (
    <div style={style}>
        filter
        <input type="text" 
        name="filter"
        onChange={(e) => dispatch(filterChange({ filter: e.target.value}))} style={{outline: 'none'}}/>
    </div>
  )
}

export default VisibilityFilter