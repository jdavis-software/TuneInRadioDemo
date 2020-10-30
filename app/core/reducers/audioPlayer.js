import { 
        SET_AUDIO_PLAYER_STATION 
} from '@actions'



const INIT_STATE = {
        station: false
}

export const audioPlayerReducer = (state = INIT_STATE, {type, payload}) => {
        switch(type){
                case SET_AUDIO_PLAYER_STATION:
                        return {
                                ...state,
                                station: payload,
                        }
                default:
                        return state;
        }
}