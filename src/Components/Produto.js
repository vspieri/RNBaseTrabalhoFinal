import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function Produto({ title, image, description, price, category, rating }) {
    return (
        <View style={css.container}>
            <View style={css.image}>
                <Image source={{ uri: image }} style={css.imagem}/>
            </View>
            <View style={css.texto1}>
                <Text style={css.profissional}>{description}</Text>
            </View>
            <View style={css.textos}>
                <Text style={css.nome}>{category}</Text>
                <Text style={css.idade}>{category}</Text>
            </View>
            <View style={css.texto2}>
                <Text style={css.discricao}>{category}</Text>
            </View>
            
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        backgroundColor: "#3F3580",
        marginTop: 40,
        width: "95%",
        borderRadius: 20,
        color: "#ffff",
        justifyContent: "center",
        
    }
    
})