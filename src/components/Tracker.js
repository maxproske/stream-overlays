import React, { useEffect, useContext } from 'react'
import styled from 'styled-components'

// Context
import { UserContext } from '../stores/UserContext'

// Actions
import { updateRatings } from '../stores/userActions'

// Components
import { Rating } from './Rating'
import { TrackerEditor } from './TrackerEditor'

// Styling
const StyledTracker = styled.div`
  width: 30rem;
  display: grid;
  grid-gap: 1rem;

  grid-template-columns: 1fr 1fr 1fr 1fr;

  margin: 1rem;
  padding: 1rem;
  background-color: black;
`

export const Tracker = () => {
  const [state, dispatch] = useContext(UserContext)

  useEffect(() => {
    // Note: On individual lines for the sake  of useEffect
    const ratings = state.ratings
    const minRating = state.minRating
    const maxRating = state.maxRating

    if (minRating && maxRating) {
      for (let rating = minRating; rating <= maxRating; rating++) {
        if (!ratings.some((x) => x.rating === rating)) {
          ratings.push({
            rating,
            sessionCount: 0,
          })
        }
      }
    }

    dispatch(updateRatings(ratings))
  }, [dispatch, state.maxRating, state.minRating, state.ratings])

  return (
    <>
      <TrackerEditor />
      <StyledTracker>
        {state.ratings.map((rating) => {
          return (
            state.minRating <= rating.rating &&
            state.maxRating >= rating.rating && (
              <Rating key={rating.rating} {...rating}></Rating>
            )
          )
        })}
      </StyledTracker>
    </>
  )
}
