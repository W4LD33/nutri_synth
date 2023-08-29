import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native'; // Using a simple Button for this example.
import Home from '../screens/home';
import Plan from '../screens/plan';
import Recipe from '../screens/recipe';
import Menu from '../assets/Icons/Menu';

const HomeStackNav = createStackNavigator();

const HomeStack = () => {
    const navigation = useNavigation();

    return (
      <HomeStackNav.Navigator initialRouteName="HomeScreen">
        <HomeStackNav.Screen 
          name="HomeScreen" 
          component={Home} 
          options={{ 
            title: 'nutri_synth',
            headerTitleStyle:{
                fontSize: 24, // Font size
                fontFamily: 'Inter-Medium'
            },
            headerTitleAlign: 'left',
            headerRight: () => (
              <Menu 
                width={24} 
                height={24}
                title="Menu"
                onPress={() => navigation.toggleDrawer()}
                style={{ marginRight: 16 }}
              />
            ),
          }} 
        />
        <HomeStackNav.Screen 
          name="Plan" 
          component={Plan}
          options={{ 
            title: 'Plan Overview',
            headerTitleAlign: 'center'
          }}
        />
        <HomeStackNav.Screen 
          name="Recipe" 
          component={Recipe}
          options={{ 
            title: 'Recipe Overview',
            headerTitleAlign: 'center'
          }} 
        />
      </HomeStackNav.Navigator>
    );
}  

export default HomeStack;
