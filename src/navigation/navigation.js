
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
                
                  
                />
 
          </HomeStack.Navigator>

  );
}

import PartiesScreen from './../screens/Parties';
import CreateParty from './../screens/CreateParty'
import EditParty from './../screens/EditParty'
const PartiesStack = createStackNavigator()
function PartiesStackScreen(){
  return(
          <PartiesStack.Navigator >
              <PartiesStack.Screen 
                name="parties1" 
                component={PartiesScreen} 
                
                  
                />

          <PartiesStack.Screen 
                name="createPartie" 
                component={CreateParty} 
                
                  
                />


          <PartiesStack.Screen 
                name="editPartie" 
                component={EditParty} 
                
                  
                />
 
          </PartiesStack.Navigator>

  );
}


import CreateBill from './../screens/CreateBill'
import CreateBillFinal from './../screens/CreateBillFinal';
const CreateBillStack = createStackNavigator()

function CreateBillStackScreen(){
  return(
    <CreateBillStack.Navigator>

      <CreateBillStack.Screen
        name="createBill1"
        component={CreateBill}
      />

      <CreateBillStack.Screen
        name="createBillFinal"
        component={CreateBillFinal}
      />


      
    </CreateBillStack.Navigator>
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
        
      />

      <CommoditiesStack.Screen
        name="CreateCommodity"
        component={CreateCommodity} 
        

      />


      

      <CommoditiesStack.Screen
        name="EditCommodity"
        component={EditCommodity} 
        

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
        <navWithDrawer.Screen  name = "createBill" component={CreateBillStackScreen} options={{title:"Generate Bill",fontSize:28}}/>
        <navWithDrawer.Screen  name = "parties" component={PartiesStackScreen} options={{title:"Add/Edit partie",fontSize:28}}/>
        
        <navWithDrawer.Screen  name = "logIn" component={LogInScreen}  />
         
      
         
         
          
          
        </navWithDrawer.Navigator>
    </NavigationContainer>);

}