import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';
import Header from "../Components/Header";

export default function Cadastro()
{
    return(
        <View>
            <ScrollView contentContainerStyle={css.container}>
            <Header/>
            <Text style={css.texto}>Deseja ser um afiliado do nosso app?</Text>
            <TextInput
                inputMode="text"
                placeholder="Nome Completo"
                style={css.input}
                placeholderTextColor="white"
            />
            <View style={css.btn1}>
            <TextInput
                inputMode="numeric"
                placeholder="Cpf"
                style={css.input2}
                placeholderTextColor="white"
            />
            <TextInput
            inputMode="numeric"
            placeholder="Data"
            style={css.input3}
            placeholderTextColor="white"
            />
            </View>
            <TextInput
                inputMode="text"
                placeholder="Ensino"
                style={css.input4}
                placeholderTextColor="white"
            />
            <TextInput
                inputMode="text"
                placeholder="Localização"
                style={css.input5}
                placeholderTextColor="white"
            />
            <TextInput
                inputMode="text"
                placeholder="Breve Descrição"
                style={css.input6}
                placeholderTextColor="white"
            />
            <View style={css.ft}>
            <TextInput style={css.adi}>Adicione sua Foto</TextInput>
            <Image source={require("../../assets/ped.jpg")} style={css.img}/>
            </View>
            
            <TouchableOpacity style={css.btnLogin}>
                <Text style={css.btnLoginText}>Cadastrar</Text>
            </TouchableOpacity>
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
        width: "90%",
        height: 50,
        borderRadius: 10,
        marginBottom: 15,
        padding: 15,
        backgroundColor: "#54499B",
        color: "white",
        
    },
    input5: {
        width: "90%",
        height: 50,
        borderRadius: 10,
        marginBottom: 15,
        padding: 15,
        backgroundColor: "#54499B",
        color: "white",
        
    },
    input6: {
        width: "90%",
        height: 200,
        borderRadius: 10,
        marginBottom: 15,
        padding: 15,
        backgroundColor: "#54499B",
        color: "white",
        
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
        marginRight: 0
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
        fontSize: 23,
        marginTop: 18,
        fontStyle: "italic"
        
    },
    img: {
        width: 120,
        height: 120,
        borderRadius: 100,
        marginTop: 35,
        marginBottom: 25
    },
    adi: {
        fontSize: 15
    }
   
});