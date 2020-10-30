import { 
        SET_RADIO_STATIONS_FAVORITES_FILTER,
        SET_RADIO_STATIONS_SEARCH_FILTER,
        SET_RADIO_STATIONS_CLEAR_FILTER,
        SET_RADIO_STATIONS_CATEGORY_FILTER
} from '@actions'

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
                        return {
                                ...state,
                                radioStations: {
                                        ...state.radioStations,
                                        categories: payload
                                }
                        }
                case SET_RADIO_STATIONS_CLEAR_FILTER:
                        return {
                                ...state,
                                radioStations: {
                                        ...InitialState.radioStations
                                }
                        }
                default:
                        return state;
        }
}
