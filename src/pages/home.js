import * as React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const imgSrc = require("../../static/login/login_logo_picture.png");

function HomeScreen({navigation}){
  return(
    <View style={styles.container}>
      <ImageBackground source={require("../../static/login/login_background_picture.png")} style={styles.image}>
        <Image
          style={{
            resizeMode: "cover",
            height: 98.5,
            width: 140,
            marginTop: 29
          }}
          source={imgSrc}
        />
        
        <View style={{width: 345, marginBottom: 30}}>
          <View style={{marginBottom: 20}}>
            <Button
              title="游客"
              onPress={() => {
                /* 1. Navigate to the Details route with params */
                navigation.navigate('Details', {
                  itemId: 86,
                  otherParam: 'anything you want here',
                });
              }}
            />
          </View>
          <View style={{marginBottom: 60}}>
            <Button
              title="登录" 
              onPress={() => {
                navigation.navigate('Login', {
                  itemId: 68,
                  otherParam: "欢迎来到登录页面,我们开始吧",
                })
              }}
            />
          </View>
          {/* <View style={{marginBottom: 60}}>
            <Button
              title="testServer" 
              onPress={() => {
                navigation.navigate('Server')
              }}
            />
          </View> */}
          <View >
            <Text style={{color: "#9A9A9A", textAlign: "center", fontSize: 14}}>
              Welcome to the tosee family
            </Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "space-around",
    justifyContent: "space-between",
    // justifyContent: "space-evenly",
    alignItems: "center"
  },
  text: {
    color: "#3ba45c",
    fontSize: 30,
    fontWeight: "bold"
  }
});

export default HomeScreen;