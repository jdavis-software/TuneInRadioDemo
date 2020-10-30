import './audioPlayer.scss'

// @third-party-packages
import React, { Fragment,useEffect, useRef, useReducer, useMemo, memo, useCallback, shallowEquals } from 'react';
import { useSelector, useDispatch } from 'react-redux'

const PLAYER_SET_SOURCE = 'PLAYER_SET_SOURCE'
const PLAYER_PLAYING = 'PLAYER_PLAYING'

class AudioPlayerActions {
        static setSource(streamUrl){
                return {
                        type: PLAYER_SET_SOURCE,
                        payload: streamUrl
                }
        }
        static setPlaying(isPlaying, streamUrl){
                return {
                        type: PLAYER_PLAYING,
                        payload: {
                                isPlaying: isPlaying,
                                streamUrl: streamUrl
                        }
                }
        }
}

export const reducer = (state = initalState, {type, payload}) => {
        switch(type){
                case PLAYER_SET_SOURCE:
                        return {
                                ...state,
                                isPlaying: true,
                                isLoading: false,
                                stationUrl: payload
                        }
                case PLAYER_PLAYING:
                        return {
                                 ...state, 
                                isPlaying: payload.isPlaying,
                                stationUrl: payload.streamUrl
                        }

                default:
                        return state;
        }
}

const initalState  = {
        isLoading: true,
        isPlaying: false,
        stationUrl: false
}
export const AudioPlayer = memo(() => {
        const player = useRef(null);
        const dispatch = useDispatch();

        const [{ isLoading, stationUrl, isPlaying}, localDispatch] = useReducer(reducer, initalState);

        const activeStation = useSelector(state => state.audioPlayer.station)


        useEffect(() => {
                if(activeStation) localDispatch(AudioPlayerActions.setSource(activeStation.streamUrl))
        },[activeStation])

        const pause = () => localDispatch(AudioPlayerActions.setPlaying(false,false))
        const play = () => localDispatch(AudioPlayerActions.setSource(activeStation.streamUrl))
        const onVolume = (value) => player.current.volume = value / 100

        const createAudioTag = () => {
                const src = stationUrl ? stationUrl : 'false'

                return(
                        <Fragment>
                                { isPlaying   ?  (<button onClick={ () => pause() }>PAUSE</button>) : (<button onClick={ () => play() }>PLAY</button>)}
                                <audio src={src} autoPlay={true}/>
                                <input  type="range"  min="0" max="100" step="1" onInput={ (e) => onVolume(e.target.value) } onChange={ (e)=> onVolume(e.target.value) } />
                        </Fragment>
                )
        }

        return  (
                <Fragment>
                        { !isLoading  ? createAudioTag() : null }
                </Fragment>
        )
})