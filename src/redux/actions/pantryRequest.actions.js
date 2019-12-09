import { pantryRequestConstants } from 'rx/constants'


export const pantryRequestActions = {
  updatePantryRequest,
}

function updatePantryRequest(data) {
  return (dispatch) => {
    dispatch(request())
    dispatch(success(data))
  }

  function request() {
    return { type: pantryRequestConstants.PANTRY_REQUEST_REQUEST }
  }
  function success(payload) {
    return { type: pantryRequestConstants.PANTRY_REQUEST_SUCCESS, payload }
  }
}
