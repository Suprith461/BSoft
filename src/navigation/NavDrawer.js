import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import { Drawer } from "react-native-paper";
import { MaterialCommunityIcons,FontAwesome,FontAwesome5 ,MaterialIcons,Foundation,Ionicons} from "@expo/vector-icons";





export default function CustomDrawerContent(props) {
  return (
     
    <DrawerContentScrollView {...props} contentContainerStyle={{paddingTop:0,marginTop:0}}>
    
      <View style={styles.drawerContent}>
     
        
        <Drawer.Section title=" ">
          {/*Home */}
          <DrawerItem
            icon={({ color, size }) => (
              <FontAwesome name="home" size={size} color={color} />
            )}
            label="Home"
            onPress={() => {console.log('Home Pressed');props.navigation.navigate('home')}}
          />
                
            {/*Orders */}    
            <DrawerItem
              icon={({ color, size }) => (
                <FontAwesome5 name="seedling" size={24} color="black" />
              )}
            label="Create/Edit Commodity"
            onPress={() => {console.log('Orders Pressed');props.navigation.navigate('commodity')}}
          />

            {/*Create Orders */}    
            <DrawerItem
              icon={({ color, size }) => (
                <Foundation name="clipboard-notes"  size={size} color={color}/>
              )}
            label="Create New Record"
            onPress={() => {console.log('Orders Pressed');props.navigation.navigate('CreateOrder')}}
          />

          <DrawerItem
              icon={({ color, size }) => (
                <Ionicons name="people" size={24} color="black" />
              )}
            label="Parties"
            onPress={() => {console.log('Orders Pressed');props.navigation.navigate('CreateOrder')}}
          />
          <DrawerItem
              icon={({ color, size }) => (
                <FontAwesome5 name="people-carry" size={24} color="black" />
              )}
            label="Commission Agents"
            onPress={() => {console.log('Orders Pressed');props.navigation.navigate('CreateOrder')}}
          />

          </Drawer.Section>

        
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  userInfoSection: {
      margin:0,
      paddingTop:50,
      paddingBottom:20,
    paddingLeft: 20,
    alignItems:'flex-start'
   
  },
  title: {
    color:'#fff',
    fontWeight: "bold",
  },
  
  apartmentName: {
    color:'#fff',
    fontSize: 14,
    lineHeight: 14 
  },
  nearBy:{
    color:'#fff',
    fontSize: 14,
    lineHeight: 14 
  },

  
  streetDetails:{
    color:'#fff',
    fontSize: 14,
    lineHeight: 14
  },


  row: {
   
    marginBottom:10,
    flexDirection: "row",
    alignItems: "center",
  },
  section: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 15,
  },
  paragraph: {
    fontWeight: "bold",
    marginRight: 3,
  },
  drawerSection: {
    marginTop: 15,
  },
  preference: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
});