
import { Storage } from '@utils'
import rootReducer from '@reducers'
// @third-party-packages
import { persistStore } from 'redux-persist'
import { default as thunk }    from 'redux-thunk'
import { createLogger as logger } from 'redux-logger'
import { createStore, applyMiddleware as middleware } from 'redux'
import { composeWithDevTools as reduxTools } from 'redux-devtools-extension'
// @store - initial state
// export const store = createStore(rootReducer,reduxTools(middleware(thunk,logger())))
export const store = createStore(rootReducer,reduxTools(middleware(thunk)))
export const persistor = persistStore(store)
export default { store, persistor }