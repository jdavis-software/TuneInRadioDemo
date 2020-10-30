import { AsyncActions } from '@actions';
import { useEffect, shallowEqual } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export const useAsyncState =  (stateProp, loader) => {
        const dispatch = useDispatch();
        const stateValue  =  useSelector(state => state[stateProp], shallowEqual);

        if (!stateValue) throw new Error(`Property ${stateProp} doesn't exist in @store`);
        
        useEffect(async () => {   
                if(!loader) return
                try {
                       const result = await loader();
                       dispatch(AsyncActions.SUCCESS(stateProp, result)) 
                } catch(error){
                        dispatch(AsyncActions.ERROR(stateProp, error))
                }
        },[stateProp,loader])

        return stateValue
};
