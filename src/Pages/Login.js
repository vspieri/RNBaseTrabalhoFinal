import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';

export default function Login() {

    /*
    const[ email, setEmail ] = useState("");
    const[ senha, setSenha ] = useState("");
    const[ erro, setErro ] = useState(false);

    const{ Login, logado } = useContext( AuthContext );

    function RealizaLogin()
    {
        Login( email, senha );
    }
    */

    return (
        <View style={css.container}>
            <Text style={css.text}>Login</Text>
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        backgroundColor: "#191919",
        flexGrow: 1,
        color: "white",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "white"
    }
});