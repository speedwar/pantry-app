import React, { lazy, Suspense, useEffect } from 'react'
import { connect } from 'react-redux'
import { inventoryActions } from 'rx/actions'
import LoadingScreen from 'components/shared/LoadingScreen/LoadingScreen'
import PropTypes from 'prop-types'

// import PmInventoryChef from 'components/PmInventory/PmInventoryChef/PmInventoryChef'
// import PmInventoryStorekeeper from 'components/PmInventory/PmInventoryStorekeeper/PmInventoryStorekeeper'

// Lazy loading
// React.lazy and Suspense is not yet available for server side rendering
// If you want to do code-splitting in a server-rendered app,
// Loadable Components is highly recommended
const PmInventoryChef = lazy(() => 
  import('components/PmInventory/PmInventoryChef/PmInventoryChef'))
const PmInventoryStorekeeper = lazy(() => 
  import('components/PmInventory/PmInventoryStorekeeper/PmInventoryStorekeeper'))

const PmInventory = ({ dispatch, userContext, inventory }) => {
  // Mounting
  useEffect(() => {
    dispatch(inventoryActions.getInventory())
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Suspense fallback={ <LoadingScreen /> }>
      <div className='pm-inventory mt-3 border'>
        { userContext.userType === 'chef'
          ? <PmInventoryChef list={ inventory }/>
          : <PmInventoryStorekeeper list={ inventory } />
        }
      </div>
    </Suspense>
  )
}

PmInventory.propTypes = {
  inventory: PropTypes.object.isRequired,
  userContext: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  const {
    userContext
  } = state.userContextReducer
  const {
    pantryRequest
  } = state.pantryRequestReducer
  const {
    inventory,
  } = state.inventoryReducer
  return {
    inventory,
    pantryRequest,
    userContext
  }
}

export default connect(mapStateToProps)(PmInventory)

