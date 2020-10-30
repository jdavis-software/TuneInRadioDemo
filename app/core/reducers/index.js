// @configs
import { persist as config} from '@configs'
// @reducers
import { userReducer } from './user'
import { AsyncReducer } from './async'
import { audioPlayerReducer } from './audioPlayer'
import { filterReducer } from './filters'
// @third-party-packages
import { combineReducers as combine } from 'redux'
import { persistReducer } from 'redux-persist'

const rootReducer = combine({
        user: userReducer,
        filters: filterReducer,
        audioPlayer: audioPlayerReducer,
        radioStations: AsyncReducer('radioStations'),
})

// @persist - connector
export default persistReducer(config, rootReducer)
