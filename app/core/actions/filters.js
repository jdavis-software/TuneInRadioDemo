// @third-party-packages
import _ from 'lodash'
import { useCallback } from 'react'
import { useSelector, useDispatch } from 'react-redux'

export const SET_RADIO_STATIONS_FAVORITES_FILTER = 'SET_RADIO_STATIONS_FAVORITES_FILTER'
export const SET_RADIO_STATIONS_SEARCH_FILTER = 'SET_RADIO_STATIONS_SEARCH_FILTER'
export const SET_RADIO_STATIONS_CATEGORY_FILTER = 'SET_RADIO_STATIONS_CATEGORY_FILTER'

export function useFilterStore(){
        const dispatch = useDispatch()

        const isFavoritesFilter = useSelector(state => state.filters.radioStations.favorites)
        const isCategoryFilter = useSelector(state => state.filters.radioStations.categories)

        const _setRadioStationsFavoritesFilter = useCallback(() => dispatch({
                type: SET_RADIO_STATIONS_FAVORITES_FILTER
        }),[])

        const _setRadioStationsSearchFilter = useCallback((searchValue) => {
                let value =  searchValue === '' || searchValue === '  ' ? false : searchValue;
                dispatch({
                        type: SET_RADIO_STATIONS_SEARCH_FILTER,
                        payload: value
                })
        },[])

        const _setRadioStationsCategory = useCallback((categoryName) => {
                let value = isCategoryFilter.includes(categoryName) ? [..._.pull(isCategoryFilter,categoryName)] : [...isCategoryFilter, categoryName]
                return dispatch({
                        type: SET_RADIO_STATIONS_CATEGORY_FILTER,
                        payload: value
                })
        },[isCategoryFilter])

        return {
                isFavoritesFilter: isFavoritesFilter,
                setRadioStationsFavoritesFilter: _setRadioStationsFavoritesFilter,
                setRadioStationsSearchFilter: _setRadioStationsSearchFilter,
                setRadioStationsCategoryFilter: _setRadioStationsCategory
        }
}