import { SET_AUDIO_PLAYER_STATION } from '@actions'
// @third-party-packages
import { useCallback } from 'react'
import {useDispatch } from 'react-redux'

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
