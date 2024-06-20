import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native'
import React, { useEffect, useState } from 'react'
import Produto from '../Components/Produto';
import  MaterialCommunityIcons  from 'react-native-vector-icons/MaterialCommunityIcons';


import Header from '../Components/Header';



export default function Home() {

  const [produtos, setProdutos] = useState([]);

  async function getProdutos() {
    await fetch('http://10.133.22.38:5251/api/Produtos/GetAll', {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(json => setProdutos(json))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getProdutos();
  }, []);

  return (
    <View style={css.container}>
      {produtos ?
        <>
        <Header/>
        <View style={css.pesquisa}>
        <MaterialCommunityIcons name="magnify" style={css.lupa}/>
          <TextInput 
          inputMode='text' 
          placeholder='Encontre o Profissional'>
          </TextInput>
        </View>

          <FlatList
            data={produtos}
            renderItem={({ item }) => <Produto title={item.title} price={item.price} image={item.image} description={item.description} category={item.category} rating={item.rating} />}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ height: (produtos.length * 600) + 110 }}
          />
        </>
        :
        <Text style={css.text}>Carregando produtos...</Text>
      }
    </View>
  )
}
const css = StyleSheet.create({
  container: {
    backgroundColor: "#ffff",
    flexGrow: 1,
    color: "white",
    justifyContent: "center",
    alignItems: "center",
  },
  pesquisa: {
    marginTop: 40,
    borderRadius: 300,
    backgroundColor: "#54499B",
    width: "60%",
    display: "flex",
    flexDirection: "row"
  },
  lupa: {
    fontSize: 35
  }

})
