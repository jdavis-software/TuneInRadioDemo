import { SET_USER_RADIO_STATION_FAVORITE  } from '@actions'
// @third-party-packages
import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export function useUserStore(){
        const dispatch = useDispatch()

        const _setRadioStationFavorite = useCallback((radioStationId) =>{
                dispatch({
                        type: SET_USER_RADIO_STATION_FAVORITE,
                        payload: radioStationId
                })
        },[])


        return {
                setRadioStationFavorite: _setRadioStationFavorite
        }

}