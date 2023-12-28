import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const addAnecdote = (e) => {
        e.preventDefault()
        const anecdote = e.target.anecdote.value
        e.target.anecdote.value = ''
        dispatch(createAnecdote(anecdote))
    }
  return (
    <>
    <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <input name="anecdote" type="text" className="bg-slate-200 px-4 py-1"/>
        <button type="submit">create</button>
      </form>
    </>
    
  )
}

export default AnecdoteForm