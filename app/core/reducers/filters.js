import { 
        SET_RADIO_STATIONS_FAVORITES_FILTER,
        SET_RADIO_STATIONS_SEARCH_FILTER,
        SET_RADIO_STATIONS_CATEGORY_FILTER
} from '@actions'
// @third-party-packages

const InitialState = {
        radioStations: {
                favorites: false,
                search: false,
                categories: []
        }
}
export const filterReducer =  (state = InitialState, {type, payload}) =>{
        switch(type){
                case SET_RADIO_STATIONS_FAVORITES_FILTER:
                        return {
                                ...state,
                                radioStations: {
                                        ...state.radioStations,
                                        favorites: state.radioStations.favorites ? false : true
                                }
                        }
                        case SET_RADIO_STATIONS_SEARCH_FILTER:
                                return {
                                        ...state,
                                        radioStations: {
                                                ...state.radioStations,
                                                search: payload
                                        }
                                }
                        case SET_RADIO_STATIONS_CATEGORY_FILTER:
                                // need to add logic if the categories are blank to return false for the flag
                                // if not return a new Map() and set it           
                                return {
                                        ...state,
                                        radioStations: {
                                                ...state.radioStations,
                                                categories: payload
                                        }
                                }
                default:
                        return state;
        }
}
