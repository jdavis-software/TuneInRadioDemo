import './stationsList.scss'
import { Station, Loader } from '@components'
import {  useUserStore, useRadioStationsStore, useAudioPlayerStore } from '@hooks'
// @third-party-packages
import React, { Fragment,  memo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faAtom, faSadCry } from '@fortawesome/free-solid-svg-icons';

export const StationsList = memo(() => {
        const { load, getRadioStations } = useRadioStationsStore();
        const { setRadioStationFavorite } = useUserStore();
        const { setAudioPlayerStation } = useAudioPlayerStore();

        const { isLoading } = load(); 
        const radioStations = getRadioStations()

        const loader = () => <Loader settings={{ icon: faAtom, size: '4x', spin: true  } }/>
        const empty = () => (
                <div className="empty">
                        <FontAwesomeIcon icon={faSadCry} size='8x'/>
                        <div>There are no stations...</div>
                </div>
        )

        const radioStationsList = () => {                
                if(!isLoading && radioStations.length > 0 ){
                        return radioStations.map((station) =>  {
                                return (
                                        <Station 
                                                key={station.id}  
                                                station={station} 
                                                setStation={setAudioPlayerStation} 
                                                setFavorite={setRadioStationFavorite}
                                        />
                                )
                        })
                }
        }
        return (<Fragment> { isLoading  ? loader()  : radioStations.length > 0 ? radioStationsList() : empty()   } </Fragment>)
})

