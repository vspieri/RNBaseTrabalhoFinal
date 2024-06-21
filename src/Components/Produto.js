import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Produto({ title, image, description, price, category, rating }) {
    return (
        <View style={css.container}>
            <View style={css.caixa}>

                <View style={css.empresa}>
                    <Text style={css.profissional}>{title}</Text>
                </View>

                <View style={css.image}>
                    <Image source={{ uri: image }} style={css.imagem} />
                </View>

                <View style={css.texto1}>
                    <Text style={css.senta}>{rating}</Text>
                </View>

                <View style={css.textos}>
                    <Text style={css.nome}>{category}</Text>
                    <Text style={css.idade}>{price}</Text>
                </View>
                <View style={css.texto2}>
                    <Text style={css.discricao}>{description}</Text>
                </View>

            </View>
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        backgroundColor: "#3F3580",
        marginTop: 40,
        width: 300,
        borderRadius: 20,
        color: "#ffff",
        justifyContent: "center",

    },

    caixa: {
        width: "100%",
        height: 200,
        alignItems: "center"
    },
    profissional: {
        fontSize: 20
    },
    empresa: {
        width: "60%",
        alignItems: "center",
        margin: 2

    },
    image: {
        width: 80,
        height: 80
    },
    imagem: {
        width: "100%",
        height: "100%",
        borderRadius: 50
    },
    textos: {
        display: "flex",
        flexDirection: "row",
    },
    nome: {
        marginRight: 10
    },
    texto1:{
        width: "80%",
        height: "auto",
        alignItems: "center"
    },
    senta: {
        fontSize: 16
    }

})