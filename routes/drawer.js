import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import colors from '../assets/styles/colors';
import typography from '../assets/fonts/typography';

import HomeStack from './homeStack';
import DetailsStack from './detailsStack';

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator 
      initialRouteName="Home"
      screenOptions={{
        drawerActiveBackgroundColor: colors.PigmentGreen, // Background color of the selected item
        drawerActiveTintColor: colors.BaseWhite, // Text color of the selected item
        drawerInactiveTintColor: colors.Gray900, // Text color of the selected item
        drawerLabelStyle: {
          fontSize: 16, // Font size
          fontFamily: 'Inter-Medium'
        },
        drawerStyle: {
          backgroundColor: '#f5f5f5', // Background color for the entire drawer
        },
      }}
    >
      <Drawer.Screen 
        name="Home" 
        component={HomeStack} 
        options={{ headerShown: false }} 
      />
      <Drawer.Screen 
        name="Personal Information" 
        component={DetailsStack} 
        options={{ headerShown: false }} 
      />
    </Drawer.Navigator>
  );
}

export default MyDrawer;
