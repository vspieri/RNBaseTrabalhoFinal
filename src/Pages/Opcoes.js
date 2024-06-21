import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Header from "../Components/Header";

export default function Opcoes({navigation})
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
                <View style={css.final}>
                <MaterialCommunityIcons style={css.icon} name="cog-outline" />
                <Text style={css.text2}>Configurações</Text>
                </View>
                <View style={css.final1}>
                <MaterialCommunityIcons style={css.icon} name="account-wrench" />
                <Text style={css.text3}>Segurança</Text>
                </View>
                <View style={css.final1}>
                <MaterialCommunityIcons style={css.icon} name="archive-cog" />
                <Text style={css.text2}>Documentos</Text>
                </View>
                <View style={css.final1}>
                <MaterialCommunityIcons style={css.icon} name="badge-account" />
                <Text style={css.text4}>Gerencial</Text>
                </View>
                <View style={css.final1}>
                <MaterialCommunityIcons style={css.icon} name="cash-multiple" />
                <Text style={css.text5}>Financeiro</Text>
                </View>
                <View style={css.final1}>
                <MaterialCommunityIcons style={css.icon} name="home" />
                <Text style={css.text6}>Local</Text>
                </View>
                <TouchableOpacity style={css.input5}>
                <Text style={css.btnLoginText} onPress={() => navigation.navigate( "Home" ) }>Voltar</Text>
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
    btnLoginText: {

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
        width: "50%",
        height: 50,
        borderRadius: 10,
        marginBottom: 15,
        backgroundColor: "#796DC7",
        color: "white",
        marginTop: 25,
        textAlign: "center",
        fontSize: 15

        
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
        backgroundColor: "#FAF7F7",
        width: "100%",
        height: 60,
        marginTop: 26,
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
        marginTop: 16,
        fontSize: 22,
        marginLeft: 65
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
        marginTop: 16,
        fontSize: 22,
        marginLeft: 75
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