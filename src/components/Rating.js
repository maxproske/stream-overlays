import React from 'react'
import styled from 'styled-components'

// Components
import { RatingBlock } from './RatingBlock'

// Styling
const StyledRating = styled.div`
  display: grid;

  grid-template-columns: 1fr 1fr;
  align-items: center;

  color: white;
`

const StyledCount = styled.div`
  text-align: center;
  font-family: 'Arial', sans-serif;
  font-size: 2.5rem;

  color: '${({ count }) => count > 0 && `green`}';
`

export const Rating = ({ rating, sessionCount, lifetimeCount }) => {
  return (
    <StyledRating>
      <RatingBlock rating={rating} />
      <StyledCount count={sessionCount}>{sessionCount}</StyledCount>
    </StyledRating>
  )
}
