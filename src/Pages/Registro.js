import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native'
import React, { useContext, useState } from 'react'
import { AuthContext } from '../Context/AuthContext';
import Header from "../Components/Header";

export default function Registro() {
    const [nome, setNome] = useState();
    const [cnpj, setCnpj] = useState();
    const [telefone, setTelefone] = useState();
    const [localidade, setLocalidade] = useState();
    const [descricao, setDescricao] = useState();
    const [foto, setFoto] = useState();

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

    return (
        <View>
            <ScrollView contentContainerStyle={css.container}>
                <Header />
                <Text style={css.texto}>Deseja ser um afiliado do nosso app?</Text>
                <TextInput
                    inputMode="text"
                    placeholder="Nome Completo"
                    style={css.input}
                    placeholderTextColor="white"
                    value={nome}
                    onChangeText={(digitado) => setNome(digitado)}

                />
                <TextInput
                    inputMode="numeric"
                    placeholder="Cnpj"
                    style={css.input3}
                    placeholderTextColor="white"
                    value={cnpj}
                    onChangeText={(digitado) => setCnpj(digitado)}

                />
                <TextInput
                    inputMode="numeric"
                    placeholder="Telefone"
                    style={css.input4}
                    placeholderTextColor="white"
                    value={telefone}
                    onChangeText={(digitado) => setTelefone(digitado)}

                />
                <TextInput
                    inputMode="text"
                    placeholder="Localização"
                    style={css.input5}
                    placeholderTextColor="white"
                    value={localidade}
                    onChangeText={(digitado) => setLocalidade(digitado)}

                />
                <TextInput
                    inputMode="text"
                    placeholder="Breve Descrição"
                    style={css.input6}
                    placeholderTextColor="white"
                    value={descricao}
                    onChangeText={(digitado) => setDescricao(digitado)}

                />
                <TextInput
                    inputMode="text"
                    placeholder="Adicione o link da sua foto"
                    placeholderTextColor="white"
                    value={foto}
                    onChangeText={(digitado) => setFoto(digitado)}
                    style={css.input7}></TextInput>

                <TouchableOpacity onPress={SalvarCadastro} style={css.btnLogin1}>
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
    input3: {
        width: "90%",
        height: 50,
        borderRadius: 10,
        marginBottom: 15,
        padding: 15,
        backgroundColor: "#54499B",
        color: "white",


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
    input7: {
        width: "90%",
        height: 50,
        borderRadius: 10,
        marginBottom: 15,
        padding: 15,
        backgroundColor: "#54499B",
        color: "white"
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


});