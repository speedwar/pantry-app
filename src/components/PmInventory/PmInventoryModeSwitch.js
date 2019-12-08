import React from 'react'
import { connect } from 'react-redux'
import { userContextActions } from 'rx/actions'

const PmInventoryModeSwitch = ({ dispatch, userContext }) => {
  const handleUserToggle = () => {
    const toggleUserType = userContext.userType === 'chef' ? 'storekeeper' : 'chef'
    const userTypeObj = { userType: toggleUserType }
    dispatch(userContextActions.updateUserType(userTypeObj))
  }
  
  return (
    <div className="l-grid l-grid--all-center p-2 m-3 border">
      <div className="l-grid__item">
        <span className="font-weight-bold">
          Switch to Mode:
        </span>
      </div>
      <div className="l-grid__item">
        <button
          className="btn btn-primary"
          onClick={ handleUserToggle }
        >
          {userContext.userType === 'chef' ? 'Storekeeper' : 'Chef'}
        </button>
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

export default connect(mapStateToProps)(PmInventoryModeSwitch)
 