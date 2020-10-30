import './loader.scss'
import React, { memo } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Loader = memo(({settings}) => {
        return <FontAwesomeIcon className="loader" {...settings}/>
})