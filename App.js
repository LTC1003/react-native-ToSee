import * as React from 'react';
import { View, Text, Button, Alert,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { RootNavigator } from 'react-navigation';
import HomeScreen from './src/pages/home';
import DetailsScreen from './src/pages/details';
import LoginScreen from './src/pages/login';
import ServerScreen from './src/pages/server';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'home' }}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Server" component={ServerScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;