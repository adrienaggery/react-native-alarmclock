import { combineReducers } from 'redux'
import { ActionConst as RouterActionTypes } from 'react-native-router-flux'

const currentScene = (state = null, action) => {
    switch (action.type) {
        case RouterActionTypes.FOCUS:
            return action.scene
        default:
            return state
    }
}

export default combineReducers({
    currentScene
})
