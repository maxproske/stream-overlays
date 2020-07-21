import React from 'react'
import styled from 'styled-components'

// Styling
const StyledRatingBlock = styled.div`
  font-family: 'Wendy', sans-serif;
  font-weight: 900;
  background-color: ${({ blockColour }) => blockColour};
  line-height: 0;
  font-size: 2.5rem;
  height: 3rem;
  width: 3rem;
  color: #000;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Wendy';
  text-shadow: none;
  text-indent: 0.15rem;
`

export const RatingBlock = ({ rating }) => {
  const getBlockColour = (rating) => {
    return byMSD(rating)
  }

  // Etterna rating colours
  // https://github.com/etternagame/etterna/blob/423a0fb9cdb85676dd4f76a33f770cef7063d226/Themes/Til%20Death/Scripts/01%20color_config.lua
  const byMSD = (rating) => {
    return hsv2rgb(Math.max(95 - (rating / 40) * 150, -50), 0.9, 0.9)
  }

  const hsv2rgb = (h, s, v) => {
    const f = (n, k = (n + h / 60) % 6) =>
      v - v * s * Math.max(Math.min(k, 4 - k, 1), 0)
    return (
      `rgb(` +
      [
        Math.floor(f(5) * 255),
        Math.floor(f(3) * 255),
        Math.floor(f(1) * 255),
      ].join(',') +
      ')'
    )
  }

  return (
    <StyledRatingBlock blockColour={getBlockColour(rating)}>
      {rating >= 0 && rating}
    </StyledRatingBlock>
  )
}
