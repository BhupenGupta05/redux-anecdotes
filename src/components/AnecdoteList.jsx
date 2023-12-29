import { useDispatch, useSelector } from "react-redux"
import { vote } from "../reducers/anecdoteReducer"
import { setNotification, clearNotification } from "../reducers/notificationReducer"

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const filter = useSelector(state => state.filter)
    const anecdotesToShow = useSelector((state) => state.anecdotes
    .filter((anecdote) => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
    .sort((a,b) => b.votes - a.votes)
    )

    const handleVote = (anecdote) => {
      dispatch(vote(anecdote.id))
      dispatch(setNotification({message: `You voted for "${anecdote.content}"`}))

      setTimeout(() => {
        dispatch(clearNotification())
      }, 5000)
    }

  return (
    <div>
        {anecdotesToShow.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList