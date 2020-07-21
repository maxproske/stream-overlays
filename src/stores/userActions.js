export const updateRatings = (ratings) => {
  return {
    type: 'UPDATE_RATINGS',
    ratings,
  }
}

export const updateMinRating = (minRating) => {
  return {
    type: 'UPDATE_MIN_RATING',
    minRating,
  }
}

export const updateMaxRating = (maxRating) => {
  return {
    type: 'UPDATE_MAX_RATING',
    maxRating,
  }
}
