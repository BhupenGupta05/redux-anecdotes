import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import anecdoteService from '../services/anecdotes'
import { setNotification, clearNotification } from "../reducers/notificationReducer"

const AnecdoteForm = () => {
    const dispatch = useDispatch()
    const addAnecdote = async (e) => {
        e.preventDefault()
        const content = e.target.anecdote.value
        e.target.anecdote.value = ''
        const newAnecdote = await anecdoteService.createNew(content)
        dispatch(createAnecdote(newAnecdote))
        dispatch(setNotification({message: `New anecdote created: "${content}"` }))

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