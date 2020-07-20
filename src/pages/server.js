import * as React from 'react';
import { View, Text, Button, StyleSheet, 
  SafeAreaView, TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function ServerScreen() {
  const queryLogin = () => {
    console.log("laaaa");
    fetch('http://10.12.88.215:8080', {phone_number: 17345384734})
    .then(res => console.log(200, res))
    .catch(err => console.log(err));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text>server</Text>
      </View>
      <View>
        <Button onPress={queryLogin.bind()}
         title="fetch Api"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  button:{
    backgroundColor: "#475878",  
  }
});

export default ServerScreen;