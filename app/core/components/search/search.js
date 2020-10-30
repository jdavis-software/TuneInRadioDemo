import './search.scss'
import { Loader } from '@components'
import { useFilterStore } from '@hooks'
// @third-party-packages
import React, { Fragment,useRef, useState, useEffect, memo } from 'react'
import { useSelector } from 'react-redux'
import { faAtom } from '@fortawesome/free-solid-svg-icons'

export const Search = memo(( ) => {
        const searchRef = useRef()
        const { setRadioStationsSearchFilter } = useFilterStore()
        const [isSearching, setSearching] = useState(false)
        const [searchValue, setSearchValue] = useState('')
        
        const valueStore = useSelector(state => state.filters.radioStations.search);

        useEffect(() => {
                setSearchValue(valueStore ? valueStore  : '')
        },[valueStore]);


        useEffect( () => {                        
                if(searchValue === searchRef.current.value){
                        const timer = setTimeout(() => [setSearching(true), setRadioStationsSearchFilter(searchValue)], 200);
                        return () => [setSearching(false),  clearTimeout(timer)]
                }
        },[searchValue, searchRef])

        const loader = () => <Loader settings={{ icon: faAtom, size: '2x', spin: true} }/>

        return(
                <Fragment>
                        <div id='loader'>{!isSearching && searchValue ? loader() : null}</div>
                        <input
                                type="search"
                                ref={searchRef}
                                placeholder="search for stations by name..."
                                value={searchValue}
                                onChange={ (e) => setSearchValue(e.target.value)}
                        />
                </Fragment>

        ) 
})