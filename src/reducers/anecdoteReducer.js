import { createSlice } from "@reduxjs/toolkit"

const anecdoteSlice = createSlice({
  name: 'anecdotes',
  initialState: [],
  reducers: {
    createAnecdote(state, action) {
      state.push(action.payload)
    },
    vote(state, action) {
      const id = action.payload
      console.log(JSON.parse(JSON.stringify(state)))
      return state.map(anecdote => anecdote.id !== id ? anecdote : {...anecdote, votes: anecdote.votes + 1})
    },
    appendAnecdote(state, action) {      
      state.push(action.payload)    
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { createAnecdote, vote, appendAnecdote, setAnecdotes } = anecdoteSlice.actions
export default anecdoteSlice.reducer