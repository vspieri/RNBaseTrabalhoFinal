import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';

import Home from '../Pages/Home';
//import Busca from '../Pages/Busca';
import Login from '../Pages/Login';
import Cadastro from '../Pages/Cadastro';
import Registro from '../Pages/Registro';
import Opcoes from '../Pages/Opcoes';
import aceitos from '../Pages/aceitos';
//import Videos from '../Pages/Videos';
//import Perfil from '../Pages/Perfil';
//import Inserir from '../Pages/Inserir';


const Tab = createBottomTabNavigator();

export default function Rotas() {

    const { logado } = useContext(AuthContext);

    if (!logado) {
        return (<Login />)
    }

    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home"
                screenOptions={{
                    headerShown: false,
                    tabBarShowLabel: false,
                    tabBarStyle: {
                        backgroundColor: '#191919',
                    },
                    tabBarActiveTintColor: "white"
                }}
            >
                <Tab.Screen
                    name="Home"
                    component={Home}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Cadastro"
                    component={Cadastro}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="login-variant" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Registro"
                    component={Registro}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="cash-register" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen
                    name="Opções"
                    component={Opcoes}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="account-settings" color={color} size={size} />
                        ),
                    }}
                />
                {/* <Tab.Screen
                    name="Fodao"
                    component={aceitos}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="notification-clear-all" color={color} size={size} />
                        ),
                    }}
                /> */}
            </Tab.Navigator>
        </NavigationContainer>
    )
}