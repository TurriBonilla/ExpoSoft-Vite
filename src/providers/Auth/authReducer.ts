import { UPDATE_USER } from '../types'

interface actionProps {
  type: string
  payload: any
}

interface stateProps {
  user: null
}

const authReducer = (state: stateProps, action: actionProps) => {
  if (action.type === UPDATE_USER) {
    return {
      ...state,
      user: action.payload,
    }
  }
  return state
}

export default authReducer
