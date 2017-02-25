import { React } from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import reducer from '..'

import routing from 'features/routing'

const store = createStore(reducer)

const App = () => {
    const {
        Routes
    } = routing.components

    return (
        <Provider store={store}>
            <Routes/>
        </Provider>
    )
}

export default App
