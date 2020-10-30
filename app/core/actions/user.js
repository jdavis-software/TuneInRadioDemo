import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'


export const SET_USER_RADIO_STATION_FAVORITE = 'SET_USER_RADIO_STATION_FAVORITE'


export function useUserStore(){
        const dispatch = useDispatch()

        const _setRadioStationFavorite = useCallback((radioStationId) =>{
                dispatch({
                        type: SET_USER_RADIO_STATION_FAVORITE,
                        payload: radioStationId
                })
        },[dispatch])


        return {
                setRadioStationFavorite: _setRadioStationFavorite
        }

}