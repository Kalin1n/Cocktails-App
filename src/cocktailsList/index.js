import React, {Component} from "react";
import {getCocktails} from "../../store/cocktailsReducer/actions";
import { connect } from "react-redux";
import {View, Text, Image, ScrollView, StyleSheet} from "react-native";


class CocktailsList extends Component{
   
    async componentDidMount(){
        this.props.getCocktails()
    }
    render(){
        return(
            <ScrollView>
                {this.props.list.drinks ? this.props.list.drinks.map((drink)=>
                    <View key={drink.iddrink} style={style.card}>
                        <Image style={style.image} source={{uri:drink.strDrinkThumb}}/>
                        <Text style={style.title}>{drink.strDrink}</Text>
                    </View>
                ) : <Text> {this.props.status} </Text>}
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

const mapStateToProps = (state) => {
    return{
        status : state.cocktails.status,
        list : state.cocktails.list,
        error : state.cocktails.error
    }
}

const mapDispathToProps = { 
    getCocktails
}

export default connect(mapStateToProps, mapDispathToProps)(CocktailsList);