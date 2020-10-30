import { SET_USER_RADIO_STATION_FAVORITE } from '@actions' 
// @third-party-packages
import  _  from 'lodash'

const INIT_STATE = {
        radioStations: {
                history: [],
                favorites: [],
                recommended: []
        }
}

export const  userReducer = (state = INIT_STATE, { type, payload }) => {
        switch(type){
                case SET_USER_RADIO_STATION_FAVORITE:
                        const current = state.radioStations.favorites;
                        return {
                                ...state,
                                radioStations: {
                                        ...state.radioStations,
                                        favorites: current.includes(payload) ?[... _.pull(current,payload)] : [...current,payload]
                                }
                        }
                default: 
                        return state
        }
}