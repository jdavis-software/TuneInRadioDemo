import './audioPlayer.scss'
import { AudioPlayerActions } from '@actions'
import { audioPlayerReducer } from '@reducers'
// @third-party-packages
import React, { useEffect, useRef, useReducer } from 'react';
import { useSelector } from 'react-redux'

export const AudioPlayer = () => {
        const player = useRef(null);
        const [state, dispatch ] = useReducer(audioPlayerReduce);
        

        useEffect(() => {
                console.log('state', state)
        },[state])

        
        // useEffect(() => {
        //         if(station){
        //                 dispatch({
        //                         isLoading: false,
        //                         isPlaying: true,
        //                         isPaused: false,
        //                         source: station.streamUrl
        //                 })
        //         }
        // },[station])

        // const onPlayThrough = () => {
        //         console.log('<<< STREAM READY >>>')
        //         // player.current.play()
        //         console.log('DURATION', player.current.duration)
        // }

        const onPause = () => {
                dispatch({
                        isLoading: false,
                        isPlaying: false,
                        isPaused: true,
                        source: ''
                })
        }

        const onPlay = () => {
                dispatch({
                        isLoading: false,
                        isPlaying: true,
                        isPaused: false,
                        source: station.streamUrl
                })
        }
        
        const onError = (e) => {
                // console.error(e)
        }

        const onVolume = (value) => {
                player.current.volume = value / 100;
        }

        const loading = (<div>Loading...</div>)
        
        const loadAudio = (
                <audio    
                        ref={player}
                        src={state.source}
                        duration='true'
                        onCanPlayThrough={ () => onPlayThrough() }
                        onPause={ () => onPause() }
                        onError={ () => onError() }
                />
        )

        const controls = () => {
                return (
                        <>
                                {
                                        state.isPlaying && !state.isPaused
                                        ?  <button onClick={ () => onPause() }>PAUSE</button> 
                                        :  <button onClick={ () => onPlay() }>PLAY</button>
                                }
                        </>)
        }

        const loaded = (
                <>
                        { controls() }
                        { loadAudio }

                        <input  
                                type="range" 
                                min="0" 
                                max="100" 
                                step="1" 
                                onInput={ (e) => onVolume(e.target.value) } 
                                onChange={ (e)=> onVolume(e.target.value) }
                        />
                </>
        )

        return  (
                <div></div>
        )
}



