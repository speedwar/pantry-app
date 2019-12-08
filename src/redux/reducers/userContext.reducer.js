import { userContextConstants } from 'rx/constants'

const initialState = {
  status: null,
  userContext: {
    userType: 'storekeeper' // Default userType is chef for demo
  },
  error: {
    'status': null,
    'message': null,
  }
}

export function userContextReducer(state = initialState, action) {
  switch (action.type) {
    /*
     * UPDATE
     */
    case userContextConstants.USER_UPDATE_SUCCESS:
      return {
        ...state,
        userContext: action.payload
      }
    default:
      return state
  }
}
