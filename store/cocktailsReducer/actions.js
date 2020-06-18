export const getCocktailsStatus = "getCocktailsStatus";

const cocktailsPending = () => ({
    type : getCocktails, 
    status : "pending"
});

const cocktailsResolved = (data) => ({
    type : getCocktails, 
    status : "resolved", 
    paylaod : data, 
    error : null
});

const cocktailsRejected = (error) =>({
    type : getCocktails, 
    status : "rejected", 
    payload : null, 
    error : error
});

export function getCocktails(){
    return async dispatch => {
        dispatch(cocktailsPending())
        let data = await( await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")).json()
        if(data){
            dispatch(cocktailsResolved(data))
        }
        else{ 
            dispatch(cocktailsRejected(data))
        }
    }      
}