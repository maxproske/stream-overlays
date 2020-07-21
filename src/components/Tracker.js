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
    // Note: Assign on individual lines for useEffect dependencies
    const ratings = state.ratings
    const minRating = state.minRating
    const maxRating = state.maxRating

    if (minRating && maxRating) {
      for (let rating = minRating; rating <= maxRating; rating++) {
        // Check if exists
        const ratingExists = ratings.some((x) => x.rating === rating)
        if (!ratingExists) {
          ratings.push({
            rating,
            sessionCount: 0,
          })

          // Sort by rating
          ratings.sort((a, b) => a.rating - b.rating)
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
