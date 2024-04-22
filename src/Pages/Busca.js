import { View, Text, TextInput, StyleSheet, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';

export default function Busca() {

    const [search, setSearch] = useState(false);
    const [ usuarios, setUsuarios ] = useState( [] );
    const [ filtro, setFiltro ] = useState([]);


    async function getUsuarios()
    {
        await fetch('https://fakestoreapi.com/users', {
            method: 'GET',
            headers: {
              'content-type': 'application/json'
            }
          })
            .then( res => res.json())
            .then( json => setUsuarios( json ) )
    }

    useEffect( () => {
        getUsuarios();
    }, [] );

    function Search( valor ) {
        setFiltro( usuarios.filter( (item) => item.name.firstname == valor ) );
    }

    return (
        <View style={css.container}>
            <View style={css.searchBox}>
                <TextInput
                    style={css.search}
                    placeholder="Buscar usuarios"
                    placeholderTextColor="white"
                    TextInput={search}
                    onChangeText={(digitado) => Search( digitado ) }
                />
            </View>
            <FlatList
                data={filtro}
                renderItem={ ({item}) => <Text style={css.text}>{item.email}</Text>}
                keyExtractor={ (item) => item.id }
            />
        </View>
    )
}
const css = StyleSheet.create({
    container: {
        flexGrow: 1,
        width: "100%",
        alignItems: "center",
        backgroundColor: "#191919",
    },
    text: {
        color: "white"
    },
    searchBox: {
        width: "100%",
        height: 100,
        justifyContent: "flex-end",
        alignItems: "center",
    },
    search: {
        width: "96%",
        height: 60,
        borderWidth: 1,
        borderColor: "white",
        borderRadius: 8,
        padding: 10,
        color: "white"
    }
})