import React, { useContext } from 'react'
import styled from 'styled-components'

// Components
import { RatingBlock } from './RatingBlock'

// Context
import { UserContext } from '../stores/UserContext'

// Actions
import { updateRatings } from '../stores/userActions'

// Styling
const StyledRating = styled.div`
  display: grid;

  grid-template-columns: 3rem ${({ isBPM }) => (isBPM ? '12rem' : '4.25rem')};
  grid-gap: 0.5rem;
  align-items: center;

  color: white;
`

const StyledCount = styled.div`
  text-align: center;
  font-family: 'Arial', sans-serif;
  font-size: 2.5rem;

  color: '${({ count }) => count > 0 && `green`}';

  input {
    width: 100%;
    background: none;
    border: none;
    color: inherit;
  }
`

export const Rating = ({
  rating,
  sessionCount,
  lifetimeCount,
  bpmCount,
  isBPM = false,
}) => {
  const [state, dispatch] = useContext(UserContext)

  const handleCountChange = (e) => {
    const sessionCountUpdate = +e.target.value

    const ratingsUpdate = state.ratings.map((x) => {
      if (x.rating === rating) {
        return {
          ...x,
          sessionCount: sessionCountUpdate,
        }
      }
      return x
    })

    dispatch(updateRatings(ratingsUpdate))
  }

  const handleBPMChange = (e) => {
    const sessionBPMUpdate = e.target.value

    const bpmUpdate = state.ratings.map((x) => {
      if (x.rating === rating) {
        return {
          ...x,
          bpmCount: sessionBPMUpdate,
        }
      }
      return x
    })

    dispatch(updateRatings(bpmUpdate))
  }

  return (
    <StyledRating isBPM={isBPM}>
      <RatingBlock rating={rating} />
      <StyledCount count={sessionCount}>
        {isBPM ? (
          <input type="text" value={bpmCount} onChange={handleBPMChange} />
        ) : (
          <input
            type="number"
            min="0"
            value={sessionCount}
            onChange={handleCountChange}
          />
        )}
      </StyledCount>
    </StyledRating>
  )
}
