import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { View,StyleSheet,Text, Button ,TouchableOpacity,Image} from 'react-native';
import As5 from './assignment/signinpage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import As55 from './assignment/loginpage';
import As56 from './assignment/postpage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Stack = createNativeStackNavigator();
const App =() =>{
  return (<NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name ='Social' component ={Home}
      options={{
        headerStyle:{
          backgroundColor:'#AC94F4',
        },
        headerTintColor:'white'
      }}/>
      <Stack.Screen name ='Signup' component ={Signup}
      options={{
        headerStyle:{
          backgroundColor:"#AC94F4"
        },
        headerTintColor:"white"
      }}/>
      <Stack.Screen name ='Login' component={Login}
      options={{
        headerStyle:{
          backgroundColor:'#AC94F4'
        },
        headerTintColor:'white'
      }}/>

    </Stack.Navigator>
  </NavigationContainer>
  )
};
const Home = (props)=>{
  const [islogin,setIslogin]=useState("false");
  const getdata= async()=>{
    try{
      const value =await AsyncStorage.getItem('token');
      if(value!==null){
        setIslogin(true);
      }
    }catch(e){}
  };
  return(
    <View>
    {islogin==true?
       <View>
        <As56/>
       </View>
       :
    <View style= {styles.home}>
      <Image style={{height:200,width:400,marginBottom:3}}source={require("./assets/girl.png")}/>
  
      <View style={{backgroundColor:"#AC94F4",height:700,borderTopLeftRadius:500,}}>
      <TouchableOpacity style ={styles.button}>
            <Text style={styles.buttonText}onPress={()=>props.navigation.navigate("Signup")}>SIGNUP</Text>
           </TouchableOpacity>
      <TouchableOpacity style ={styles.button1}>
            <Text style={styles.buttonText2} onPress={()=>{props.navigation.navigate("Login"); getdata();}}>LOGIN</Text>
           </TouchableOpacity>
    </View>
    </View>
    }

    </View>
  )
}
const Signup = ()=>{
  return(
    <As5/>
  )
}
const Login = () =>{
  return(
    <As55/>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  home:{
   backgroundColor:"white",
    flex:1,
  },
  head:{
    fontSize:50,
    textAlignVertical:'center',
    textAlign:'center',
    marginTop:90,
    marginBottom:90,
  },
  button:{
    alignItems:'center',
    backgroundColor:"white",
    borderRadius:30,
    justifyContent:'center',
    height:50,
    width:300,
    marginTop:90,
    marginLeft:28,
    shadowColor:'black',
    elevation:30,
    borderColor:'black',
    borderWidth:2,
    marginBottom:20,
    },
    button1:{
      alignItems:'center',
      backgroundColor:"#AC94F4",
      borderRadius:30,
      // marginTop:90,
      justifyContent:'center',
      height:50,
      width:300,
      marginLeft:58,
      shadowColor:'black',
      elevation:30,
      borderColor:'black',
      borderWidth:2,
      },
  buttonText:{
    color:'#AC94F4',
    fontSize:25,

  },
  buttonText2:{
    color:'white',
    fontSize:25,
  }
});

export default App;

