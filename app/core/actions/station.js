
import { StateProps } from '@configs'
import { tuneInRadioAPI } from '@api'
import { useAsyncState, useStationSelector, useRadioStationCategorySelector  } from '@hooks'
// @third-party-packages
import { useCallback, useEffect } from 'react'
import { useSelector } from 'react-redux'

export function useRadioStationsStore() {
        
        const _load = useCallback(() => {
                return  useAsyncState(StateProps.radioStations, tuneInRadioAPI.getStations)
        },[])

        const _getRadioStations = useCallback(() => {
                return useSelector(useStationSelector);
        },[])

        const _getRadioStationsCategories = useCallback(() => {
                return  useSelector(useRadioStationCategorySelector)
        })

        return {
                load: _load,
                getRadioStations: _getRadioStations,
                getRadioStationCategories: _getRadioStationsCategories
        }

}