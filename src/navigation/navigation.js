
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem } from '@react-navigation/drawer';


import React from 'react';



import CustomDrawerContent from '../navigation/NavDrawer';

//import AddProduct from './screens/AddProduct'

//import EditorDelete from './screens/EditorDelete'
//import Home from './screens/Home'
//import ListorImages from './screens/ListsorImages'
//import Orders from './screens/Orders'
//import Payments from './screens/Payments'
//import CategorySubCategory from './screens/CategorySubCategory'
//import SliderImages2 from './screens/SliderImages2'
//import CreateOrder from './screens/CreateOrder';

import LogInScreen from '../screens/LogInScreen'
//import SignUp from './screens/logsign/SignUpScreen'
//import VerifyOtpScreen from './screens/logsign/VerifyOtp'
//import ForgotPassword from './screens/logsign/ForgotPassword'
//import CreateBill from './screens/bill'
//import OrderDetails from './screens/OrderDetails';
//import { color } from 'react-native-reanimated';


const navWithDrawer = createDrawerNavigator();







export default function NavWithDrawer(){
    return(
    <NavigationContainer>
    

        <navWithDrawer.Navigator drawerContent={props => <CustomDrawerContent {...props}/>}>
          <navWithDrawer.Screen  name = "logIn" component={LogInScreen}  options={{swipeEnabled:false,drawerLabel:null,drawerIcon:null}}/>
         
      
         
         
          
          
        </navWithDrawer.Navigator>
    </NavigationContainer>);

}