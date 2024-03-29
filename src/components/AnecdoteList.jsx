import { useDispatch, useSelector } from "react-redux"
import { updateAnecdote } from "../reducers/anecdoteReducer"
import { showNotification } from "../reducers/notificationReducer"

const AnecdoteList = () => {
    const dispatch = useDispatch()
    const filter = useSelector(state => state.filter)
    const anecdotesToShow = useSelector((state) => state.anecdotes
    .filter((anecdote) => anecdote.content.toLowerCase().includes(filter.toLowerCase()))
    .sort((a,b) => b.votes - a.votes)
    )

    const handleVote = (anecdote) => {
      dispatch(updateAnecdote(anecdote.id, {...anecdote, votes: anecdote.votes + 1}))
      dispatch(showNotification(`You voted for "${anecdote.content}"`, 5))
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