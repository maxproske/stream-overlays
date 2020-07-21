import React, { useContext } from 'react'
import styled from 'styled-components'

// Context
import { UserContext } from '../stores/UserContext'

// Actions
import {
  updateRatings,
  updateMinRating,
  updateMaxRating,
} from '../stores/userActions'

// Styling
const StyledForm = styled.div`
  color: white;
  margin: 1rem;
  padding: 1rem;
  background: black;
`

export const TrackerEditor = () => {
  const [state, dispatch] = useContext(UserContext)

  const handleMinChange = (e) => {
    const { value, min, max } = e.target
    const minRating = Math.max(min, Math.min(max, value))

    dispatch(updateMinRating(minRating))
  }

  const handleMaxChange = (e) => {
    const { value, min, max } = e.target
    const maxRating = Math.max(min, Math.min(max, value))

    dispatch(updateMaxRating(maxRating))
  }

  const handleReset = () => {
    const ratingsUpdate = state.ratings.map((rating) => {
      if (rating.sessionCount > 0) {
        return {
          ...rating,
          sessionCount: 0,
        }
      }
      return rating
    })

    dispatch(updateRatings(ratingsUpdate))
  }

  return (
    <StyledForm>
      <form>
        <button onClick={handleReset}>Reset</button>
        <br />
        <br />
        <label>Min Rating </label>
        <input
          min="0"
          max="40"
          placeholder="20"
          type="number"
          value={state.minRating}
          onChange={handleMinChange}
        />
        <br />
        <br />
        <label>Max Rating </label>
        <input
          min="0"
          max="40"
          placeholder="23"
          type="number"
          value={state.maxRating}
          onChange={handleMaxChange}
        />
      </form>
    </StyledForm>
  )
}
