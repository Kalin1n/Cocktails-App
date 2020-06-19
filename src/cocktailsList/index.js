import React, {Component} from "react";
import {View, Text, Image, ScrollView, StyleSheet} from "react-native";


class CocktailsList extends Component{
    constructor(){
        super();
        this.state = { 
            list : [],
            loaded : false
        }
    }
    async componentDidMount(){
        let data = await (await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")).json()
        this.setState({list : data})
    }
    render(){
        return(
            <ScrollView>
                {this.state.list.drinks ? this.state.list.drinks.map((drink)=>
                    <View key={drink.iddrink} style={style.card}>
                        <Image style={style.image} source={{uri:drink.strDrinkThumb}}/>
                        <Text style={style.title}>{drink.strDrink}</Text>
                    </View>
                ) : <Text> Loading... </Text>}
            </ScrollView>
        )
    }
}

const style = StyleSheet.create({
    image : { 
        width : 100, 
        height : 100
    }, 
    card : {
        flexDirection : "row",
        marginBottom : 10,
        alignItems : "center"
    }, 
    title : {
        color : "#7E7E7E",
        marginLeft : 20
    }
})


export default CocktailsList;