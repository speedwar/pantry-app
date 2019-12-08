import { userContextConstants } from 'rx/constants'

export const userContextActions = {
  updateUserType,
}

/**
 * request getInventory list
 */
function updateUserType(userType) {
  return (dispatch) => {
    dispatch(success(userType))
  }

  function success(payload) {
    return { type: userContextConstants.USER_UPDATE_SUCCESS, payload }
  }
}
