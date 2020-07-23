import * as React from 'react';
import { View, Text, Button, Alert,} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { RootNavigator } from 'react-navigation';
import HomeScreen from './src/pages/home';
import DetailsScreen from './src/pages/details';
import LoginScreen from './src/pages/login';

// global.XMLHttpRequest = global.origin.XMLHttpRequest || global.XMLHttpRequest

const Stack = createStackNavigator();

const App = () => {  
  return (
    <NavigationContainer>
      <Stack.Navigator 
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'home'}}/>
        <Stack.Screen name="Details" component={DetailsScreen} options={{
          title: 'My Details',
          headerShown: true,
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}/>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
