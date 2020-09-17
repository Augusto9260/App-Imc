import React from 'react';
import {} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../pages/Home';
import Infomation from '../pages/Infomation';
import { FontAwesome, Entypo } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return(
        <NavigationContainer>
            <Tab.Navigator tabBarOptions={{
                activeTintColor: '#000',
                activeBackgroundColor: '#90AFFE',
                keyboardHidesTabBar: true,
                
            }}>
                <Tab.Screen name='Home' component={Home}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome name='home' size={size} color={color} />
                    )
                }} />
                <Tab.Screen name='Infomation' component={Infomation}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Entypo name= 'info' size={size} color={color} />
                    )
                }} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}