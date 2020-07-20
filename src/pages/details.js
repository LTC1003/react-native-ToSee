import * as React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
// import {StackActions, NavigationActions} from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function DetailsScreen({ route, navigation }) {
  /* 2. Get the param */
  const { itemId } = route.params;
  const { otherParam } = route.params;
  return (
    <View style={styles.container}>
      <Text>Details Screen</Text>
      <Text>itemId: {JSON.stringify(itemId)}</Text>
      <Text>otherParam: {JSON.stringify(otherParam)}</Text>
      <Button
        title="刷新详情"
        onPress={() =>
          navigation.push('Details', {
            itemId: Math.floor(Math.random() * 100),
          })
        }
      />
      <Button
        title="返回第一个屏幕"
        onPress={() => navigation.popToTop()}
      />
      <Button
        title="去登录页面"
        onPress={() => navigation.push(
          'Login', {title: "hello Login"}
        )}
      />
      <Button title="返回home" onPress={() => navigation.navigate('Home')} />
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default DetailsScreen;