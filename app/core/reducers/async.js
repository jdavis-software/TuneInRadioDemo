import { LOADING, SUCCESS, ERROR } from '@actions'

const initialState = {
        data: [],
        meta: undefined,
        isError: undefined,
        isLoading: true,
}

export const  AsyncReducer = (stateProp) =>  (state = initialState, { type, payload } ) => {
        switch(type){
                case LOADING(stateProp):
                        return {  ...state, isLoading: true }
                case SUCCESS(stateProp):
                        return { ...state, isLoading: false, data: payload.data}
                case ERROR(stateProp):
                        return { isLoading: false, isError: payload, data: undefined, meta: undefined }
                default:
                        return state;
        }
}