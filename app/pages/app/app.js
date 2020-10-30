import './app.scss';
import { 
        useFilterStore,
        useRadioStationsStore
} from '@actions'
import { StationsList, Search, AudioPlayer } from '@components'
import { useRadioStationCategorySelector  } from '@hooks'
// @third-party-packages
import React , { Fragment, useMemo, memo, useEffect }  from 'react'
import { useSelector } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faHeart } from '@fortawesome/free-solid-svg-icons';

export const App = memo(() =>  {    
        const { setRadioStationsFavoritesFilter, isFavoritesFilter, setRadioStationsCategoryFilter, setRadioStationsClearFilter  } = useFilterStore();
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
                                        <FontAwesomeIcon onClick={ () => setRadioStationsClearFilter() }   icon={faHeart} size='2x'/>
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
