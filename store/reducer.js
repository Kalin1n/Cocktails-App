import {combineReducers} from "redux"; 
import {cocktailsReducer} from "./cocktailsReducer/reducer";

export default combineReducers({
    cocktails : cocktailsReducer
});