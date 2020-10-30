import { createSelector } from 'reselect'
//@radioStationsList
const selectRadioStations = state => state.radioStations.data.list
const selectRadioStationsCategories = state => state.radioStations.data.categories
//@filters
const selectFilterRadioStationsFavorites = state => state.filters.radioStations.favorites
const selectFilterRadioStationsSearch = state => state.filters.radioStations.search
const selectFilterRadioStationsCategories = state => state.filters.radioStations.categories
//@userFavorites
const selectUserRadioStationsFavorites = state => state.user.radioStations.favorites

import  _  from 'lodash'

export const selectUserRadioStationAndFavoritesSelector = createSelector(
        [selectRadioStations, selectUserRadioStationsFavorites],
        (radioStations,userFavorites) => {
                radioStations = radioStations ? radioStations : []
                return radioStations.map(station => userFavorites.includes(station.id) ? { ...station, isFavorite: true } : { ...station, isFavorite: false})
        }
)

export const selectRadioStationsFilterCategories = createSelector(
        [selectRadioStationsCategories, selectFilterRadioStationsCategories],
        (categories, filters) => {
                filters = filters ? filters : []
                categories = categories ? categories : []
                return _.uniq(filters.reduce((acc,curr) => [...acc, ...categories[curr]],[]))
        }
)

export const useRadioStationCategorySelector = createSelector(
        [selectRadioStationsCategories,selectFilterRadioStationsCategories],
        (categories,isCategories) => {
                categories = categories ? Object.keys(categories) : []
                if(isCategories){
                        return  categories.map(category => isCategories.includes(category) ? { name: category, isFiltered: true} : { name: category, isFiltered: false})
                }
                return  categories.map(category => ({ name: category, isFiltered: false }))
        }
)

export const useStationSelector = createSelector(
        [
                selectUserRadioStationAndFavoritesSelector,
                selectFilterRadioStationsFavorites,
                selectFilterRadioStationsSearch,
                selectFilterRadioStationsCategories,
                selectRadioStationsFilterCategories,
        ],
        (radioStations,  isFavorite, isSearch, isCategories, radioStationsCategories) => {


                let params = [
                        {
                                type: 'SEARCH',
                                value: isSearch
                        },
                        {
                                type: 'FAVORITES',
                                value: isFavorite
                        },
                        {
                                type: 'CATEGORIES',
                                value: isCategories.length <= 0  ? false : isCategories ,
                        }
                ];

                let filter = params.reduce((acc,{ type, value }) => (value) ? acc.concat(type,'_') : acc ,'').slice(0,-1)
                
                filter = filter ? filter : 'NO_FILTER'

                console.log('[DYNAMIC FILTER]: ', filter)
                
                switch(filter){
                        case 'NO_FILTER':
                                return radioStations
                        case 'SEARCH':
                                return radioStations.filter(({ name }) => name.toLowerCase().includes(isSearch.toLowerCase()))
                        case 'FAVORITES':
                                return radioStations.filter(station =>  station.isFavorite ? station : false)
                        case 'CATEGORIES':
                                return radioStations.filter(station => radioStationsCategories.includes(station.id) ? station : false)
                        case 'SEARCH_FAVORITES':
                                const favorites = radioStations.filter((station) =>  station.isFavorite ? station : false)
                                return favorites.filter(({ name }) => name.toLowerCase().includes(isSearch.toLowerCase()))
                        case 'SEARCH_CATEGORIES':
                                let catFilter = radioStations.filter(station => radioStationsCategories.includes(station.id) ? station : false)
                                return catFilter.filter(({ name }) => name.toLowerCase().includes(isSearch.toLowerCase()))
                        case 'FAVORITES_CATEGORIES':
                                let catsFilter = radioStations.filter(station => radioStationsCategories.includes(station.id) ? station : false)
                                return catsFilter.filter(station =>  station.isFavorite ? station : false)
                        case 'SEARCH_FAVORITES_CATEGORIES':
                                let catssFilter = radioStations.filter(station => radioStationsCategories.includes(station.id) ? station : false)
                                let favvFilter = catssFilter.filter(station =>  station.isFavorite ? station : false)
                                return favvFilter.filter(({ name }) => name.toLowerCase().includes(isSearch.toLowerCase()))
                        default:
                                return radioStations
                }
        }
)