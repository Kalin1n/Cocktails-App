import {getCocktailsStatus} from "./actions.js"

let defaultState = { 
    list : [],
    error : "", 
    status : "", 
}


export const cocktailsReducer = (state = defaultState, action) => {
    switch(action.type){
        case getCocktailsStatus: 
            return {...state, list : action.payload, error : action.error, status : action.status};
        default: 
            return state;
    }
}