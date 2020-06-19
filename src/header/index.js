import React from "react";
import {View, Text, Image, StyleSheet} from "react-native";


function Header(){
    return(
        <View style={style.container}>
            <Text style={style.text}>Drinks</Text>
            <Image source={require("../../assets/icon.png")}/ >
        </View>
    )
};

const style = StyleSheet.create({
    container:{
        flexDirection : "row",
        justifyContent : "space-between",  
        marginTop : 50,
        paddingBottom : 10, 
        borderBottomColor : "#000",
        borderBottomWidth : 1
    },
    text : {
        fontWeight : "500",
        fontSize : 24
    }
});

export default Header;