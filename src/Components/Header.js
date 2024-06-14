import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

export default function Header() {
    return (
        <View style={css.Header}>
           <Image source={require("../../assets/logo.png")} style={css.logo}/>
        </View>
    )
}
const css = StyleSheet.create({
    Header: {
        backgroundColor: "#514a83",
        height: 250,
        width: "100%",
        borderRadius: 60,
        marginTop: -160
    },
    logo: {
       resizeMode: "contain",
       width: "50%",
       marginLeft: 95,
       marginTop: -30
    }
})
