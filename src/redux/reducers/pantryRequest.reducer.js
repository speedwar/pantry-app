import { pantryRequestConstants } from 'rx/constants'

const initialState = {
  status: null,
  pantry: null,
  error: {
    'status': null,
    'message': null,
  }
}

export function pantryRequestReducer(state = initialState, action) {
  switch (action.type) {
    case pantryRequestConstants.PANTRY_REQUEST_SUCCESS:
      return {
        ...state,
        pantry: action.payload
      }

    default:
      return state
  }
}
