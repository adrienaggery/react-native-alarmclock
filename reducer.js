import { combineReducers } from 'redux'

import routing from 'features/routing'

export default combineReducers({
    [routing.constants.NAME]: routing.reducer
})
