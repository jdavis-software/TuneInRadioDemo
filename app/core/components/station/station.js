import './station.scss'
import { AudioPlayerActions } from '@actions'
import { useAudioPlayerHook } from '@hooks'
// @third-party-packages
import React, { useReducer, memo, useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart, faHeartBroken } from '@fortawesome/free-solid-svg-icons';


// let count = 0
export const Station = memo(({station, setStation, setFavorite}) => {
        const play = (e) => [e.stopPropagation(), setStation(station)]
        const favorite = (e) => [e.stopPropagation(),setFavorite(station.id)];

        return(
                <div className="station" onClick={ (e) => play(e) }>
                        <img src={station.imgUrl}/>
                        <span className="title">{station.name}</span>
                        <span className={station.isFavorite ? 'icon favorite' : 'icon'} onClick={ (e)=> favorite(e) }><FontAwesomeIcon   icon={station.isFavorite ? faHeartBroken : faHeart}  size='1x'/></span>
                </div>
        )
})