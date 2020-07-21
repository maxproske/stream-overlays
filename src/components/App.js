import React, { useReducer } from 'react'

// Context
import { UserContext } from '../stores/UserContext'
import { userReducer, initialUserState } from '../stores/userReducer'

// Components
import { GlobalStyle } from './GlobalStyle'
import { Tracker } from './Tracker'

export const App = () => {
  const [state, dispatch] = useReducer(userReducer, initialUserState)

  return (
    <div>
      <UserContext.Provider value={[state, dispatch]}>
        <Tracker />
      </UserContext.Provider>
      <GlobalStyle />
    </div>
  )
}
