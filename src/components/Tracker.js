import React, { useState, useEffect, useContext } from 'react'
import styled from 'styled-components'

// Context
import { UserContext } from '../stores/UserContext'

// Actions
import {
  updateRatings,
  updateMinRating,
  updateMaxRating,
} from '../stores/userActions'

// Components
import { Rating } from './Rating'
import { TrackerEditor } from './TrackerEditor'

// Styling
const StyledTracker = styled.div`
  display: grid;
  grid-gap: 1rem;

  grid-template-columns: 1fr 1fr 1fr 1fr;

  margin: 1rem;
  padding: 1rem;
  background-color: black;
`

export const Tracker = () => {
  const [state, dispatch] = useContext(UserContext)
  const [checkedLocalStorage, setCheckedLocalStorage] = useState(false)

  // Update state with cache
  useEffect(() => {
    const cachedMinRating = +localStorage.getItem('minRating')
    if (cachedMinRating) {
      dispatch(updateMinRating(cachedMinRating))
    }

    const cachedMaxRating = +localStorage.getItem('maxRating')
    if (cachedMaxRating) {
      dispatch(updateMaxRating(cachedMaxRating))
    }

    const cachedRatings = JSON.parse(localStorage.getItem('ratings'))
    if (cachedRatings) {
      dispatch(updateRatings(cachedRatings))
    }

    // Set flag
    setCheckedLocalStorage(true)
  }, [dispatch])

  useEffect(() => {
    if (checkedLocalStorage) {
      // Note: Assign on individual lines for useEffect dependencies
      const ratings = state.ratings
      const minRating = state.minRating
      const maxRating = state.maxRating

      if (minRating !== null && maxRating !== null && ratings !== null) {
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

        dispatch(updateRatings(ratings))
      }
    }
  }, [
    checkedLocalStorage,
    dispatch,
    state.maxRating,
    state.minRating,
    state.ratings,
  ])

  return (
    <>
      <TrackerEditor />
      <StyledTracker>
        {state.ratings &&
          state.ratings.map((rating) => {
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
