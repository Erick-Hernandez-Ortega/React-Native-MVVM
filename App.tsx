import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { MainStackNavigator } from './src/presentation/navigation/MainStackNavigator';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
  );
}

export default App;
