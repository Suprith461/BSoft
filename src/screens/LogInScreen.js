import { StatusBar } from 'expo-status-bar';

import React,{useContext,useState} from 'react';
import {StyleSheet,Text,View,TouchableOpacity,Dimensions,TextInput,Image} from 'react-native';
import SignUp from './SignUpScreen';
import ForgotPassword from './ForgotPassword';
import {logIn,sendOtp,logInWithEmailPassRequest,logInWithEmailPassFailure} from './../../redux/authentication/authActions'
import { useSelector, useDispatch ,shallowEqual} from 'react-redux';
import loadingScreen from '../../../assets/loading.json';
import Lottie from "lottie-react";




const LogIn = ({navigation}) =>{
    const dispatch =useDispatch();
    const hht = Dimensions.get("window").height;
    const wdth = Dimensions.get("window").width;

    const user=useSelector(state=>state.auth.loginDownPayload);
    const loggingIn=useSelector(state=>state.auth.loggingIn);
    const loggingInError=useSelector(state=>state.auth.loginErrorPayload);
    
    if(user!=null){
        navigation.navigate('Home');
    }
    
    if(loggingInError!=null && loggingInError!='errorRepeat'){
        alert(loggingInError.code+'\n'+loggingInError.message)
        dispatch(logInWithEmailPassRequest('request'))
        dispatch(logInWithEmailPassFailure('errorRepeat'))
    }

    //const {login} =useContext(AuthContext); 
    const [email,setEmail] =useState(null);
    const [password,setPassword] =useState(null);

    

return(
    //The whole Screen Container
    <View style={{width:wdth,height:hht-65,elevation:25}}>
        
        
        {/*Top two LOgin and SignUp button container*/}
        <View style={{flexDirection:'row',backgroundColor:'white',alignSelf:'center',marginTop:30,width:wdth-wdth*0.3,height:100,borderTopLeftRadius:20,borderTopRightRadius:20,alignItems:'stretch'}}>
            
            {/*Log In button */}
            <View style={{backgroundColor:'#f69b31',flex:1,borderTopLeftRadius:20 }}>
                <TouchableOpacity >
                    <Text style={styles.logInTextStyle}>
                        LogIn
                    </Text>
                </TouchableOpacity>
            </View>
            
            {/*SignUp button container */}
            <View  style={styles.signUpButton}>            
                <TouchableOpacity onPress={()=>{navigation.navigate("SignUp")}}>
                    <Text style={styles.signUpTextStyle}>
                        SignUp
                    </Text>
                </TouchableOpacity>
            </View>
        
        </View>      
        
        {/*Text input containers with USername and password text input  */}
        <View style={{width:wdth-wdth*0.3,height:hht-250,backgroundColor:'white',alignSelf:'center',borderBottomLeftRadius:20,borderBottomRightRadius:20}}>

            <View style={{flexDirection:'row'}}>
                <Image
                    source={require('./../../../assets/logoWithNameAndTitle.png')}
                    style={{height:100,marginLeft:120,width:3.3141*100,alignSelf:'center',marginVertical:25}}
                />
                 
            </View>

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
                    <TouchableOpacity style={{flex:1}} onPress={()=>{
                        //;navigation.navigate('ForgotPass')
                        dispatch(sendOtp(email))
                        }}>
                        <Text style={{color:'#f69b31',fontSize:20}}>Forgot Password</Text>
                    </TouchableOpacity>
                </View>

                <View style={{flex:0.5}}>
                    <TouchableOpacity
                        onPress={()=>{
                            dispatch(logIn(email,password))
                        }} 
                        style = {{backgroundColor:'#f69b31',width:100,height:60,flex:1,alignSelf:'flex-end'}}>
                        <Text style={{alignSelf:'center',color:'white',fontSize:20,paddingTop:3}}>
                            LogIn
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>


            {/*View container for socail icons */}
            <View style={{flexDirection:'row',width:(wdth-wdth*0.3)*0.75,alignSelf:'center'}}>
                <TouchableOpacity onPress={()=>dispatch(logInWithGoogle())}>
                    {/*Google LoginSocial icon */}
                    <Image
                        style={{width:55,height:55,marginLeft:90,marginTop:50,marginRight:50}}
                        source={require('./../social/google.png')} />
                </TouchableOpacity>
                    
                <TouchableOpacity>
                    {/*FaceBook login Social Icon */}
                    <Image
                        style={{width:62,height:62,marginTop:47}}
                        source={require('./../social/facebook.png')} />
                </TouchableOpacity>
            </View>

             {/*View for showing terms and policies */}
             <View style={{margin:20,height:30,flexDirection:'row',alignItems:'center'}}>
                <Text style ={{fontSize:15,alignSelf:"center"}}>By continuing  ,you agree to our </Text>
                    <TouchableOpacity style={{alignItems:'center'}}>
                        <Text style={{color:'blue',fontSize:15,marginTop:2,marginRight:4}}>  Terms and Conditions </Text>
                    </TouchableOpacity>
                    <Text style={{fontSize:14,marginTop:2}}>and</Text> 
                    <TouchableOpacity>
                        <Text style={{color:'blue',fontSize:15,marginTop:2,marginLeft:4}}>
                               Privacy Policy
                        </Text>
                    </TouchableOpacity>

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


export default LogIn;