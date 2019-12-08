import React, { useState } from 'react'
import { connect } from 'react-redux'
import { inventoryActions } from 'rx/actions'
// import PropTypes from 'prop-types'
import { isNumber } from 'utils'

const PmInventoryItemController = ({
  userContext,
  dispatch,
  title
}) => {
  const [ itemName, setItemName ] = useState('')
  const [ itemQty, setItemQty ] = useState('')

  const handleItemNameBlur = (e) => {
    const nameValue = e.target.value
    setItemName(nameValue)
  }

  const handleQuantityChange = (e) => {
    let qtyValue = e.target.value
    setItemQty(qtyValue)
  }

  const handleQuantityBlur = () => {
    const itemData = { name: itemName, quantity: itemQty, eventType: 'onblur' }
    if (itemData.name === '' || itemData.quantity === '') return

    if (!isNumber(itemQty)) {
      setItemQty('')
      return
    }

    setItemQty(itemQty)

    if (userContext.userType === 'storekeeper') {
      dispatch(inventoryActions.updateInventory(itemData))
    } else {
      // TODO: Chef action
    }
  }

  const handleEventIncrement = () => {
    const itemData = { name: itemName, quantity: itemQty + 1, eventType: 'increment' }
    let qty = itemQty
    if (itemData.name === '' || itemData.quantity === '') return
    setItemQty(++qty)

    if (userContext.userType ==='storekeeper') {
      dispatch(inventoryActions.updateInventory(itemData))
    } else {
      // TODO: Chef action
    }
  }

  const handleEventDecrement = () => {
    const itemData = { name: itemName, quantity: itemQty - 1, eventType: 'decrement' }
    let qty = itemQty
    if (itemData.name === '' || itemData.quantity === '' || itemData.quantity < 0 ) return
    setItemQty(--qty)

    if (userContext.userType === 'storekeeper') {
      dispatch(inventoryActions.updateInventory(itemData))
    } else {
      // TODO: Chef action
    }
  }

  return (
    <div className="p-2 m-3 border">
      <div className="mb-2">
        <span className="font-weight-bold">
          { title }
        </span>
      </div>
      <div className="l-grid mb-2">
        <div className="l-grid__item">
          <label className="font-weight-bold" htmlFor="itemName">
            Item name:
          </label>
        </div>
        <div className="l-grid__item">
          <input type="text" id="itemName" onBlur={ handleItemNameBlur } />
        </div>
      </div>
      <div className="l-grid mb-2">
        <div className="l-grid__item">
          <label className="font-weight-bold" htmlFor="itemQty">
            Quantity:
          </label>
        </div>
        <div className="l-grid__item">
          <input
            id="itemQty"
            type="text"
            onChange={ handleQuantityChange }
            onBlur={ handleQuantityBlur }
            value={ itemQty }
            maxLength="3"
            disabled={ itemName === '' }
          />
        </div>
      </div>
      <div className="l-grid">
        <div className="l-grid__item">
          <button
            className="btn btn-primary"
            onClick={ handleEventIncrement }
          >
          +
        </button>
        </div>
        <div className="l-grid__item">
          <button
            className="btn btn-primary"
            onClick={ handleEventDecrement }
          >
            -
          </button>
        </div>
      </div>
    </div>
  )
}

function mapStateToProps(state) {
  const {
    userContext
  } = state.userContextReducer
  return {
    userContext
  }
}

export default connect(mapStateToProps)(PmInventoryItemController)