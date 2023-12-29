import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { setNotification, clearNotification } from "../reducers/notificationReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const addAnecdote = (e) => {
        e.preventDefault()
        const anecdote = e.target.anecdote.value
        e.target.anecdote.value = ''
        dispatch(createAnecdote(anecdote))
        dispatch(setNotification({message: `New anecdote created: "${anecdote}"` }))

      setTimeout(() => {
        dispatch(clearNotification())
      }, 5000)
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