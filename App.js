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
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'home' }}/>
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// const data = {
//   "_bodyBlob": {
//     "_data": {
//       "__collector": [Object], 
//       "blobId": "32c86a35-48af-4bc6-a220-9787121479bd", 
//       "offset": 0, 
//       "size": 112
//     }
//   }, 
//   "_bodyInit": {
//     "_data": {
//       "__collector": [Object], 
//       "blobId": "32c86a35-48af-4bc6-a220-9787121479bd", 
//       "offset": 0, 
//       "size": 112
//     }
//   }, 
//   "bodyUsed": false, 
//   "headers": {
//     "map": {
//       "access-control-allow-headers": "*", 
//       "access-control-allow-methods": "*", 
//       "access-control-allow-origin": "*", 
//       "connection": "keep-alive",
//       "content-type": "application/json;charset=utf-8", 
//       "date": "Tue, 21 Jul 2020 07:14:32 GMT", 
//       "keep-alive": "timeout=60", 
//       "transfer-encoding": "chunked", 
//       "vary": "Origin, Access-Control-Request-Method, Access-Control-Request-Headers"
//     }
//   }, 
//   "ok": false, 
//   "status": 404, 
//   "statusText": undefined, 
//   "type": "default", "url": "http://10.12.88.215:8080/"
// }