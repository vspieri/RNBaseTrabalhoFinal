import React from 'react'
import { View, StyleSheet, Image } from 'react-native'

export default function Header() {
    return (
        <View style={css.Header}>
            <Image source={require("../../assets/logo.png")} style={css.logo} />
        </View>
    )
}
const css = StyleSheet.create({
    Header: {
        backgroundColor: "#2A2359",
        height: 100,
        width: "100%"
    },
    logo: {
        width: "100%",

        resizeMode: "contain",
        marginBottom: -150
    }
})
