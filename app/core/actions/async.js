export const LOADING = (stateProp) => `LOADING_${stateProp}`
export const SUCCESS = (stateProp) => `SUCCESS_${stateProp}`
export const ERROR = (stateProp) => `ERROR_${stateProp}`
export class AsyncActions{
        static LOADING = (stateProp) => ({
                type: LOADING(stateProp),
        })
        
        static SUCCESS = (stateProp, payload) => ({
                type: SUCCESS(stateProp),
                payload
        })

        static ERROR = (stateProp, payload) => ({
                type: ERROR(stateProp),
                error: payload
        })
}