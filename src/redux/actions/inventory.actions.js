import { inventoryConstants } from 'rx/constants'

import InventoryMockData from 'test/mock/inventory'

export const inventoryActions = {
  getInventory,
  updateInventory,
}

/**
 * GET: inventory list
 */
function getInventory() {
  return (dispatch) => {
    dispatch(request())

    // Promise should be used here. 
    // since this is test, result is always success in local env
    //
    // inventoryServices.getInventory()
    //   .then((response) => {
    //     dispatch(success(response))
    //   })
    //   .catch((error) => {
    //     dispatch(failure(error))
    //   })
    dispatch(success(InventoryMockData))
  }

  function request() {
    return { type: inventoryConstants.INVENTORY_LOAD_REQUEST }
  }
  function success(payload) {
    return { type: inventoryConstants.INVENTORY_LOAD_SUCCESS, payload }
  }
  // No error handling required
  // function failure(error) {
  //   return { type: inventoryConstants.INVENTORY_LOAD_FAILURE, error }
  // }
}

/**
 * UPDATE: inventory list
 */
function updateInventory(data) {
  return (dispatch) => {
    dispatch(request())
    dispatch(success(data))
  }

  function request() {
    return { type: inventoryConstants.INVENTORY_UPDATE_REQUEST }
  }
  function success(payload) {
    return { type: inventoryConstants.INVENTORY_UPDATE_SUCCESS, payload }
  }
}




