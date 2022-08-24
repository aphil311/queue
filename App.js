import React from 'react';
import Home from './components/Home.tsx';
import { NavigationContainer } from '@react-navigation/native';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Aleo-Bold': require('./assets/fonts/Aleo-Bold.ttf'),
  });

  if(!fontsLoaded)
    return null;

  return (
      <NavigationContainer>
        <Home />
      </NavigationContainer>
  );
}