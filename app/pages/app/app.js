import './app.scss';
import { useFilterStore, useRadioStationsStore } from '@hooks'
import { StationsList, Search, AudioPlayer } from '@components'
// @third-party-packages
import React , { Fragment, memo }  from 'react'
import {  faHeart, faBan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const App = memo(() =>  {    
        const { isFavoritesFilter, setRadioStationsFavoritesFilter,  setRadioStationsCategoryFilter, setRadioStationsClearFilter  } = useFilterStore();
        const { getRadioStationCategories } = useRadioStationsStore();

        const radioStationCategories = getRadioStationCategories();

        const categories = () => {
                return radioStationCategories.map( ({ name, isFiltered }, i)=> {
                        return <span key={i}  className={isFiltered ? 'active' : null}  onClick={ () => setRadioStationsCategoryFilter(name) }>{name}</span>
                })
        }

        return (
                <Fragment>
                        <header>
                                <Search></Search>
                                <div id='filters' className={isFavoritesFilter ? 'active' : ' '}>
                                        <FontAwesomeIcon onClick={ () => setRadioStationsFavoritesFilter() }   icon={faHeart} size='2x'/>
                                        <FontAwesomeIcon  onClick={ () => setRadioStationsClearFilter() }   icon={faBan} size='2x'/>
                                </div>
                        </header>
                        <div id='categories'>{categories()}</div>
                        <main>
                                <StationsList></StationsList>
                        </main>
                        <aside id="audio-player" className='show' >
                                <AudioPlayer></AudioPlayer>
                        </aside>
                 </Fragment>
        )        
})
