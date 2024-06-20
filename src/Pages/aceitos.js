import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from "../Components/Header";

export default function aceitos()
{
    return(
        <View>
            <ScrollView contentContainerStyle={css.container}>
            <Header/>
            <View>
                <View style={css.btn1}>
            <Image source={require("../../assets/falta.png")} style={css.logo}/>
            <Text style={css.texto}>Kaique👋ㅤ32</Text>
            
            </View>
            <Text style={css.banana}>Pedreiro formado em adm na Unip</Text>
                </View>
                <Text style={css.text2}>Pedidos novos:</Text>
                <View style={css.final}>
                <Text style={css.text3}>
                    Usuario: Maria Rosé
                    Localização: rua beira mar/Sp
                    Pagamento: cartão
                    </Text>
                </View>
                <View style={css.btn1}>
                <TextInput
                inputMode="text"
                placeholder="Voltar"
                style={css.input5}
                placeholderTextColor="white"
            />
            <TextInput
                inputMode="text"
                placeholder="Voltar"
                style={css.input4}
                placeholderTextColor="white"
            />
                </View>
                <View style={css.final}>
                <Text style={css.text3}>
                    Usuario: Mario Roselio
                    Localização: rua beira mor/Sp
                    Pagamento: Xerecard
                    </Text>
                </View>
                <View style={css.btn1}>
                <TextInput
                inputMode="text"
                placeholder="Voltar"
                style={css.input5}
                placeholderTextColor="white"
            />
            <TextInput
                inputMode="text"
                placeholder="Voltar"
                style={css.input4}
                placeholderTextColor="white"
            />
                </View>
            </ScrollView>
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        flexGrow: 1,
        width: "100%",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "#ffffff"
    },
    input2: {
        width: "57%",
        height: 50,
        borderRadius: 10,
        marginBottom: 15,
        padding: 15,
        backgroundColor: "#54499B",
        color: "white",
        
    },
    input3: {
        width: "30%",
        height: 50,
        borderRadius: 10,
        marginBottom: 15,
        padding: 15,
        backgroundColor: "#54499B",
        color: "white",
        marginLeft: 10
        
    },
    input: {
        width: "90%",
        height: 50,
        borderRadius: 10,
        marginBottom: 15,
        padding: 15,
        backgroundColor: "#54499B",
        color: "white",
        marginTop: 30
        
    },
    input4: {
        width: "45%",
        height: 48,
        borderRadius: 20,
        marginBottom: 15,
        padding: 15,
        backgroundColor: "#FDBABA",
        color: "black",
        marginTop: 10,
        textAlign: "center",
        fontSize: 20,
        fontStyle: "italic",
        textAlign: "center"
    },
    input5: {
        width: "45%",
        height: 48,
        borderRadius: 20,
        marginBottom: 10,
        padding: 15,
        backgroundColor: "#BBF7BA",
        color: "black",
        marginTop: 10,
        textAlign: "center",
        fontSize: 15,
        marginRight: 10,
        fontSize: 20,
        fontStyle: "italic",
        textAlign: "center",

        
    },
    forgot: {
        width: "90%",
        marginTop: 10,
        justifyContent: "flex-end",
        alignItems: "flex-end",
    },
    forgotText: {
        color: "#0195fd",
        fontWeight: "bold"
    },
    btnLogin: {
        width: "40%",
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 1,
        backgroundColor: "#796DC7",
        marginRight: 20
    },
    btnLogin1: {
        width: "40%",
        height: 50,
        borderWidth: 1,
        borderRadius: 10,
        marginTop: 30,
        backgroundColor: "#796DC7",
        
    },
    btnLoginText: {
        color: "white",
        lineHeight: 45,
        textAlign: "center",
        fontSize: 15,
        fontWeight: "bold"
    },
    error: {
        width: "100%",
        height: 50,
        marginTop: 10
    },
    errorText: {
        color: "white",
        textAlign: "center"
    },
    btn1: {
        display: "flex",
        flexDirection: "row"
    },
    texto: {
        fontSize: 19,
        marginTop: 42,
        fontStyle: "italic",
        paddingRight: 100
        
    },
    logo: {
        width: 120,
        height: 120,
        borderRadius: 100,
        marginTop: 35,
        marginRight: 20
    },
    banana: {
        position: "absolute",
        paddingTop: 75,
        fontSize: 18,
        paddingLeft: 130,
        fontStyle: "italic"
    },
    final: {
        backgroundColor: "#54499B",
        width: "90%",
        height: 150,
        marginTop: 25,
        display: "flex",
        flexDirection: "row",
        borderRadius: 20
    },
    icon: {
        fontSize: 35,
        marginTop: 13,
        marginLeft: 30
    },
    text2: {
        marginTop: 25,
        fontSize: 22,
        marginLeft: 25
    },
    final1: {
        backgroundColor: "#FAF7F7",
        width: "100%",
        height: 60,
        marginTop: 3,
        display: "flex",
        flexDirection: "row",
        borderRadius: 20
    },
    text3: {
        marginTop: 25,
        fontSize: 25,
        marginLeft: 15,
        color: "white",
        fontStyle: "italic"
    },
    text4: {
        marginTop: 16,
        fontSize: 22,
        marginLeft: 75
    },
    text5: {
        marginTop: 16,
        fontSize: 22,
        marginLeft: 70
    },
    text6: {
        marginTop: 16,
        fontSize: 22,
        marginLeft: 90
    },
});