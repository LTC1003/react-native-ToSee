import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, 
  SafeAreaView, ScrollView, Image,
  TextInput, TouchableHighlight, DatePickerAndroid, } from 'react-native';
// import {StackActions, NavigationActions} from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import MD5 from 'js-md5';
import $_Api from '../serverModule/api';

function LoginScreen({ route, navigation }) {
  /* 2. Get the param */
  // const { otherParam } = route.params;
  // const { itemId } = route.params;
  const signTips = () => {
    let textName = "密码登录"
    return textName;
  };
  const rePrarms = {
    phoneValue: '',
    PhoneVerify: '',
  };
  const _doFetchLogin = function(){
    // fetch('http://10.12.88.215:8080/api/code/login/send_code', requstOption)
    // .then(res => {
    //   return res.text();
    // }).then( resText => {
    //   console.log(202,resText);
    // })
    // .catch(err => console.log(err));
    console.log(this, 32444)
    $_Api.userInfo.getSendCode({phone_number: 13022532993}).then((res) => {
      console.log(res, 'hahu,404');
    })
  }
  class Myinput extends React.Component {
    constructor(props){
      super(props);
      this._onChangeText = this._onChangeText.bind(this);
      this.state = {
        showValue:"",
      }
    }
    _onChangeText(inputData){
      console.log("输入的内容",inputData);
      //把获取到的内容，设置给showValue
      this.setState({showValue:inputData});
    }
    showData(){
      alert(this.state.showValue);//展示输入框的内容
    }
    render() {
      return (
        <View>
          <TextInput 
            style={styles.textInput}
            placeholder="请输入手机号" 
            clearButtonMode='while-editing'
            defaultValue= ''
            onChangeText={(text) => ({text})}
            value={(value) => ({value})} 
          />
        </View>
      )
    }
  }
  return (
    
    <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <View>
            <Text style={styles.TextTitle}>登录ToSee</Text>
          </View>
          <View>
            <Myinput />
            <View style={{position:"relative"}}>
              <TextInput placeholder="请输入验证码" 
              style={styles.textInput} />
              <TouchableHighlight style={{position:"absolute", right: 15, top: 4}}
                onPress={() => {
                  console.log(rePrarms.phoneValue, 499)
                }}>
                <Text style={{backgroundColor: "#6ea1f3", paddingVertical: 5}}>
                  获取验证码
                </Text>
              </TouchableHighlight> 
            </View>
            <TouchableHighlight 
              style={styles.submitBtn} 
              onPress={_doFetchLogin.bind()}>
              <Text 
                style={{textAlign: "center", color: "#ffffff", fontSize: 16}}>
                登录
              </Text>
            </TouchableHighlight>
            <Text style={{color:"#999999", fontSize: 11, paddingLeft: 15}}>未注册用户登录时将自动创建ToSee账号</Text>
            <View style={{marginTop: 40}}>
              <Text style={{textAlign: "center",color: "#333333", fontSize: 16}}>{signTips()}</Text>
            </View>
          </View>
          <View>
            <View style={styles.otherLogin}>
              <Image style={styles.image} source={require("../../static/login/register_icon_microblog.png")}></Image>
              <Image style={styles.image} source={require("../../static/login/register_icon_qq.png")}></Image>
              <Image style={styles.image} source={require("../../static/login/register_icon_wechat.png")}></Image>
            </View>
            <View style={styles.tiaokuan}>
              <Text style={{color: "#999999", fontSize: 12}}>登录即同意ToSee</Text><Text>{"用户服务协议"} 和 {"隐私政策"}</Text>
            </View>
          </View>
        </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  TextTitle: {
    height: 25,
    fontSize: 18,
    textAlign: "left",
    paddingLeft: 15,
    color: "#333333",
    // marginBottom: 50,
  },
  body: {
    flex: 1, 
    justifyContent: "space-between",
    // backgroundColor:"#25224d",
  },
  textInput: {
    borderColor: "#CCCCCC",
    borderBottomWidth: 1,
    paddingVertical: 5,
    fontSize: 16,
    marginHorizontal: 15,
    marginBottom: 30,
    // backgroundColor: "#895745",
  },
  submitBtn: {
    marginHorizontal: 15,
    backgroundColor: "#DF2E46",
    borderRadius: 5,
    paddingVertical: 14,
    marginVertical: 10,
  },
  otherLogin:{
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: "#F34e34",
    padding: 20,
    marginHorizontal:15,
    borderTopWidth:1,
    borderTopColor: "#CCCCCC",
  },
  image: {
    width: 46,
    height: 46,
  },
  tiaokuan:{
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 20,
    fontSize: 12,
  },
  testBox: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#5a7fe1",
  }
});

export default LoginScreen;