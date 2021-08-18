
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderTitle } from '@react-navigation/stack';
import { createDrawerNavigator,DrawerContentScrollView,DrawerItemList,DrawerItem } from '@react-navigation/drawer';


import React from 'react';



import CustomDrawerContent from '../navigation/NavDrawer';
import LogInScreen from '../screens/LogInScreen';
import HomeScreen from '../screens/HomeScreen';


const navWithDrawer = createDrawerNavigator();

const HomeStack=createStackNavigator();
function HomeStackScreen(){
  return(
          <HomeStack.Navigator >
              <HomeStack.Screen 
                name="home1" 
                component={HomeScreen} 
                options={{headerStyle:{height:0,width:0}}} 
                  
                />
 
          </HomeStack.Navigator>

  );
}

import Commodities from "./../screens/Commodities"
import CreateCommodity from "./../screens/CreateCommodity"
import EditCommodity from "./../screens/EditCommodity"

const CommoditiesStack = createStackNavigator();
function CommoditiesStackScreen(){
  return(
    <CommoditiesStack.Navigator>

      <CommoditiesStack.Screen
        name="commodities"
        component={Commodities} 
        options={{headerStyle:{height:0,width:0}}}

      />

      <CommoditiesStack.Screen
        name="EditCommodity"
        component={EditCommodity} 
        options={{headerStyle:{height:0,width:0}}}

      />

      <CommoditiesStack.Screen
        name="CreateCommodity"
        component={CreateCommodity} 
        options={{headerStyle:{height:0,width:0}}}

      />
      

      
    </CommoditiesStack.Navigator>
  );
}




export default function NavWithDrawer(){
    return(
    <NavigationContainer>
    

        <navWithDrawer.Navigator drawerContent={props => <CustomDrawerContent {...props}/>}>
        <navWithDrawer.Screen  name = "commodity" component={CommoditiesStackScreen} options={{title:"Create/Edit commodities",fontSize:28}}/>
        <navWithDrawer.Screen  name = "home" component={HomeStackScreen} options={{title:"Bsoft",fontSize:28}}/>
          <navWithDrawer.Screen  name = "logIn" component={LogInScreen}  />
          
         
      
         
         
          
          
        </navWithDrawer.Navigator>
    </NavigationContainer>);

}