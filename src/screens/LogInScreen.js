import { StatusBar } from 'expo-status-bar';

import React,{useContext,useState,useEffect} from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Dimensions,TextInput,Image, Alert} from 'react-native';
//import SignUp from './SignUpScreen';
//import ForgotPassword from './ForgotPassword';
//import {logIn,sendOtp,logInWithEmailPassRequest,logInWithEmailPassFailure} from './../../redux/authentication/authActions'
import { useSelector, useDispatch ,shallowEqual} from 'react-redux';
import loadingScreen from '../../assets/loading.json';
import Lottie from "lottie-react";
import {logIn, loginFailure} from "./../redux/authentication/authActions";

import { useDrawerStatus } from '@react-navigation/drawer';
import { useIsFocused } from '@react-navigation/native';


const LogInScreen = ({navigation}) =>{
    const dispatch =useDispatch();
    const hht = Dimensions.get("window").height;
    const wdth = Dimensions.get("window").width;
    const isFocused = useIsFocused();

    
    const [email,setEmail] =useState(null);
    const [password,setPassword] =useState(null);
    
    const loggingIn = useSelector(state=>state.auth.loggingIn);
    const loginError = useSelector(state=>state.auth.loginError);
    const loginPayload = useSelector(state=>state.auth.loginPayload);

    useEffect(()=>{
        if(loginError!=null){
            alert(loginError)
        }
        
    },[loginError])

    const isDrawerOpen = useDrawerStatus() === 'open';
    
    //Function keeps navigation drawer closed
    useEffect(()=>{
        
        if(isDrawerOpen && isFocused){
            navigation.closeDrawer()
        }
        
    },[isDrawerOpen,navigation,isFocused])

    useEffect(()=>{
        if(loginPayload!=null && loginPayload==='success'){
            navigation.navigate("home")
        }
    },[loginPayload])

    function loginLocal(){
        if(email==null || email==" "){
            //console.log("Email is empty")
           
            alert("Email Field cannot be empty !")
        }else if( password==null || password == " "){
            alert("Password field cannot be empty !")
        }else{
            dispatch(logIn(email,password))
        }
    
    }
   

return(
    //The whole Screen Container
    <View style={{width:wdth,height:hht-65,elevation:25}}>
        
       
        
        
        {/*Text input containers with USername and password text input  */}
        <View style={{width:wdth-wdth*0.3,height:hht-250,backgroundColor:'white',alignSelf:'center',borderRadius:20,borderBottomRightRadius:20,marginTop:100,paddingVertical:50}}>

            
            <Text style={{fontSize:35,marginVertical:30,fontWeight:"bold",alignSelf:'center'}}>LogIn to BSoft to continue</Text>
                 
            

            {/*InputText container for Registered mobile or email entry*/}
            <TextInput 
                placeholder="Enter registered email or mobile number"
                autoCapitalize='none'
                autoCompleteType="email"
                accessibilityHint="User Name"
                style={{height:60,width:(wdth-wdth*0.3)*0.75,borderWidth:0.1,margin:5,alignSelf:'center',paddingHorizontal:10,borderColor:'gray'}}
                onChangeText={setEmail}

            />
            {/*Enter password  */}
            <TextInput 
                placeholder="Enter Password"
                autoCapitalize='none'
                autoCompleteType="email"
                accessibilityHint="User Name"
                style={{height:60,width:(wdth-wdth*0.3)*0.75,borderWidth:0.1,margin:5,alignSelf:'center',paddingHorizontal:10,borderColor:'gray'}}
                secureTextEntry={true}
                onChangeText={setPassword}
            />

            {/*View Container for ForgotPass and LogIn button */}
            <View style = {{flexDirection:'row',alignSelf:'center',width:(wdth-wdth*0.3)*0.75,marginTop:25}}>
                <View style={{flex:0.5}}>
                    
                </View>

                <View style={{flex:0.5}}>
                    <TouchableOpacity
                        onPress={()=>{
                            //console.log("Button Pressed")
                            //dispatch(logIn(email,password))
                            loginLocal();
                        }} 
                        style = {{backgroundColor:'#f69b31',width:100,height:60,flex:1,alignSelf:'flex-end'}}>
                        <Text style={{alignSelf:'center',color:'white',fontSize:20,paddingTop:3,paddingVertical:10}}>
                            LogIn
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>


            
        </View>
        
        {/*Modal showing a loading screen */}
        {loggingIn?
                    <View style={{position:'absolute',top:0,bottom:0,backgroundColor:'#DCDCDC50',width:'100%',height:'100%'}}>
                        <View style={{flexDirection:'row',alignSelf:'center',flex:1}}>
                            
                            <Lottie animationData={loadingScreen} style={{alignSelf:'center',width:'100%',height:'100%'}} />
                      
                        </View>
                    </View>
                
                :null}    
    
    </View>

);


}


const styles =  StyleSheet.create({
    forgotPassword:{
       
    }
    ,
    confirmLogInButton:{
      
        marginTop:25,
        marginLeft:78,
        width:80,
        height:30,
        
    },
    userNameTextInputStyle:{
        
        borderWidth:0.2,
        borderColor:"black",
        width:300,
        height:50,
        alignSelf:"center",
        marginTop:25,
        fontSize:15,
        paddingLeft:5
        
    }


    
    ,
   
    cardStyle:{
        backgroundColor:'#f69b31',
        alignItems:'center'

    },

    
    signUpButton:{
        backgroundColor:"#999999",
        flex:1,
        alignContent:'center',
        borderTopRightRadius:20
    },
    logInTextStyle:{
        color:'white',
        alignSelf:'center',
        fontSize:25,
        margin:15

    },
    signUpTextStyle:{
        color:'white',
        alignSelf:'center',
        fontSize:25,
        marginRight:40,
        marginTop:15


    }

});


export default LogInScreen;