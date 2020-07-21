export const initialUserState = {
  minRating: 20,
  maxRating: 23,
  ratings: [],
}

export const userReducer = (state = initialUserState, action) => {
  switch (action.type) {
    case 'UPDATE_RATINGS':
      const { ratings } = action
      localStorage.setItem('ratings', ratings)
      return {
        ...state,
        ratings,
      }
    case 'UPDATE_MIN_RATING':
      const { minRating } = action
      localStorage.setItem('minRating', minRating)
      return {
        ...state,
        minRating,
      }
    case 'UPDATE_MAX_RATING':
      const { maxRating } = action
      localStorage.setItem('maxRating', maxRating)
      return {
        ...state,
        maxRating,
      }
    default: {
      console.error(`Unhandled action type: ${action.type}`)
      return state
    }
  }
}
