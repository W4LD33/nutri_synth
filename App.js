import React, { useState, useEffect } from 'react';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import MyDrawer from './routes/drawer';  // Rename for clarity
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  
  const [isFontLoaded] = useFonts({
    'Inter-Black': require('./assets/fonts/Inter/static/Inter-Black.ttf'),
    'Inter-Bold': require('./assets/fonts/Inter/static/Inter-Bold.ttf'),
    'Inter-ExtraBold': require('./assets/fonts/Inter/static/Inter-ExtraBold.ttf'),
    'Inter-ExtraLight': require('./assets/fonts/Inter/static/Inter-ExtraLight.ttf'),
    'Inter-Light': require('./assets/fonts/Inter/static/Inter-Light.ttf'),
    'Inter-Medium': require('./assets/fonts/Inter/static/Inter-Medium.ttf'),
    'Inter-Regular': require('./assets/fonts/Inter/static/Inter-Regular.ttf'),
    'Inter-SemiBold': require('./assets/fonts/Inter/static/Inter-SemiBold.ttf'),
    'Inter-Thin': require('./assets/fonts/Inter/static/Inter-Thin.ttf'),
    'Inter-Variable': require('./assets/fonts/Inter/static/Inter-Variable.ttf')
    // ... additional fonts if any
  });

  // This keeps the splash screen visible until fonts are loaded
  useEffect(() => {
    if (isFontLoaded) {
      setAppIsReady(true);
    }
  }, [isFontLoaded]);

  useEffect(() => {
    const init = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
    };

    init();
  }, []);

  useEffect(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null; // Or you can return a placeholder component
  }

  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
