import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';
import Header from "../Components/Header";

const [nome, setNome] = useState("");


async function SalvarCadastro() {
    await fetch('http://10.133.22.38:5251/api/Cadastro/CreateCadastro', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            cadastroNome: nome,
            cnpj: cnpj,
            telefone: telefone,
            localidade: localidade,
            descricao: descricao,
            foto: foto
            })
        })
        .then(res => res.json())
        .then(json => {
           console.log(json);
        })
        .catch(err => setError(true))
}


export default function Cadastro() {
    return (
        <View>
            <ScrollView contentContainerStyle={css.container}>
                <Header />
                <Text style={css.texto}>Cadastro</Text>
                <TextInput
                    inputMode="text"
                    placeholder="Digite seu Nome"
                    style={css.input2}
                    value={nome}
                    onChangeText={(digitado) => setNome(digitado)}
                    placeholderTextColor="white"
                />
                <View style={css.btn1}>
                    <TextInput
                        inputMode="numeric"
                        placeholder="Telefone"
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
                    inputMode="email"
                    placeholder="Email"
                    style={css.input4}
                    placeholderTextColor="white"
                />
                <TextInput
                    inputMode="email"
                    placeholder="Email Novamente"
                    style={css.input4}
                    placeholderTextColor="white"
                />
                <TextInput
                    inputMode="numeric"
                    placeholder="Senha"
                    secureTextEntry={true}
                    style={css.input4}
                    placeholderTextColor="white"
                />
                <TextInput
                    inputMode="numeric"
                    placeholder="Senha Novamente"
                    secureTextEntry={true}
                    style={css.input4}
                    placeholderTextColor="white"
                />
                <TouchableOpacity style={css.btnLogin}>
                    <Text style={css.btnLoginText} onPress={SalvarCadastro}>Cadastrar</Text>
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
        width: "50%",
        height: 50,
        borderRadius: 10,
        marginBottom: 15,
        padding: 15,
        backgroundColor: "#796DC7",
        color: "white",
        marginTop: 1,
        textAlign: "center"


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
        fontSize: 60,
        marginTop: 18,
        fontStyle: "italic"

    }
});