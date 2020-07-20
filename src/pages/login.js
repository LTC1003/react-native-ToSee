import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, 
  SafeAreaView, ScrollView, Image,
  TextInput, TouchableHighlight, DatePickerAndroid, } from 'react-native';
// import {StackActions, NavigationActions} from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import MD5 from 'js-md5';

function LoginScreen({ route, navigation }) {
  /* 2. Get the param */
  const { otherParam } = route.params;
  const { itemId } = route.params;
  const signTips = () => {
    let textName = "密码登录"
    return textName;
  };
  
  const reqData = "17359453234";
  const reqParams = addCode(reqData);
  const requstOption={
    //请求方式
    method: 'POST',
    //请求头
    headers:{
      'Accept': 'application/json',
      //取决于服务器端，所以请和服务器端的开发人员沟通确定清楚
      'Content-Type': 'application/json',  
      appVersion : reqParams.appVersion,
      timeStamp : reqParams.timeStamp,
      userAgent : reqParams.userAgent,
      sign : reqParams.sign,
    },
    //请求体(GET方式无需设置)
    body: JSON.stringify({
      phone_number: 17345384734
    }),
    
  };
  function queryLogin() {
    console.log("luuuuuu")
    fetch('http://10.12.88.215:8080', requstOption)
    .then(res => console.log(201, res))
    .catch(err => console.log(err));
  };

  function addCode(reqData, coolback){
    /***
     * (Headers和Params 按字母a-z排序拼接参数,首字母相同按第二字母排序，依次类推，key值最后拼接,不参与排序) 
     * 如: MD5(appVersion=1.0&timeStamp=123456&token=0f47c79af7e04dd&userAgent=ios&key=DN6AjdNsv6PZXYUoOxVmrVILB+S).toUpperCase() 
     * 注：token为 Params参数 ;另Params参数为Object 其属性不参与sign签名
    ***/ 
    let reqHead = {
      userAgent: "web",
      timeStamp: (new Date()).valueOf().toString(),
      appVersion: "1.0.1",
    };
    let sortArr = [];
    let mergeObj = Object.assign({},reqData,reqHead);
    let newkeyArr = Object.keys(mergeObj).sort();
    newkeyArr.forEach((val,k) => {
      for(var v in mergeObj) {
        if (val == v){
          val = {}
          k = v
          val[k] = mergeObj[v]
          sortArr.push(val);
          return
        }
      }
    })
    let reapteData = JSON.stringify(sortArr).replace(/[\[|\]|\{|\}|\'|\"]/g, '');
    reapteData = reapteData.replace(/[,]/g, '&');
    reapteData = reapteData.replace(/[:]/g, '=');
    reapteData += '&key=DN6AjdNsv6PZXYUoOxVmrVILB+S';
    // console.log(reapteData, 'sort sort bef');
    reqHead['sign'] = MD5(reapteData).toUpperCase();
    // console.log(reqHead['sign'], 'sort aft');
    coolback = reqHead;
    return coolback
  }

  return (
    
    <SafeAreaView style={styles.container}>
        <View style={styles.body}>
          <View>
            <Text style={styles.TextTitle}>登录ToSee</Text>
          </View>
          <View>
            <TextInput placeholder="请输入手机号"
              defaultValue={"ssss"}
              style={styles.textInput} />
            <View style={{position:"relative"}}>
              <TextInput placeholder="请输入验证码" style={styles.textInput} />
              <View style={{position:"absolute", right: 15, top: 4}}>
                <Text style={{backgroundColor: "#6ea1f3", paddingVertical: 5}}>
                  获取验证码
                </Text>
              </View> 
            </View>
            <TouchableHighlight 
              style={styles.submitBtn} 
              onPress={queryLogin.bind()}>
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
              <Text style={{color: "#99999", fontSize: 12}}>登录即同意ToSee</Text><Text>{"用户服务协议"} 和 {"隐私政策"}</Text>
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