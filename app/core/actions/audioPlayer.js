// @third-party-packages
import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const SET_AUDIO_PLAYER_STATION = 'SET_AUDIO_PLAYER_STATION'

export function useAudioPlayerStore(){
        const dispatch = useDispatch()

        const _setAudioPlayerStation = useCallback((radioStation) => dispatch({
                type: SET_AUDIO_PLAYER_STATION,
                payload: radioStation
        }),[])

        return {
                setAudioPlayerStation: _setAudioPlayerStation
        }
}
