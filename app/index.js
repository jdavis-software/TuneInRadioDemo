import './index.scss'
import   { App }  from '@pages'
import { store, persistor } from './core/store/store'
// @third-party-packages
import React  from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

render(
        <Provider store={store}>
                <PersistGate persistor={persistor}>
                                <App/>
                </PersistGate>
        </Provider>,document.getElementById('app')
)



