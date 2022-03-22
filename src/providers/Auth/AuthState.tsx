import { useState, useEffect, useReducer } from 'react'

import { onAuthStateChanged, User } from 'firebase/auth'

import { UPDATE_USER } from '../types'
import authContext from './authContext'
import authReducer from './authReducer'
import { auth } from '../../services/auth'
import { isObject } from '../../utils'
import { usuarioGetByID } from '../../components/usuario/usuarioService'

interface authStateProps {
  children: JSX.Element | JSX.Element[]
}

const AuthState = (props: authStateProps) => {
  const { children } = props

  const initialState = {
    user: undefined,
  }

  const [state, dispatch] = useReducer(authReducer, initialState)

  const [authState, setAuthState] = useState<User | null>()

  const updateUser = (newUser: User | null) => {
    try {
      dispatch({
        type: UPDATE_USER,
        payload: newUser,
      })
    } catch (error) {
      console.log(error)
    }
  }

  onAuthStateChanged(auth, authResult => setAuthState(authResult))

  useEffect(() => {
    if (authState === null) {
      updateUser(authState)
      return
    }

    if (isObject(authState) && authState && authState.email) {
      usuarioGetByID(authState.email, updateUser)
    }
  }, [authState])

  return <authContext.Provider value={{ user: state.user }}>{children}</authContext.Provider>
}

export default AuthState
