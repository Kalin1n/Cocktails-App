import React, {Component} from "react";
import {View, Text, Image, ScrollView, StyleSheet} from "react-native";


class CocktailsList extends Component{
    constructor(props){
        super(props);
        this.state = { 
            list : []
        }
    }

    async componentDidMount(){
        let data = await (await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail")).json(); 
        console.log(data)
        this.setState({list : data})
    }
    render(){
        return(
            <ScrollView>
                {this.state.list.drinks ? this.state.list.drinks.map((drink)=>
                    <View key={drink.iddrink} style={style.card}>
                        <Image style={style.image} source={{uri:drink.strDrinkThumb}}/>
                        <Text>{drink.strDrink}</Text>
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
        marginBottom : 10
    }
})

export default CocktailsList;