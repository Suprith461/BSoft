import React from "react";
import { View, StyleSheet } from "react-native";
import { DrawerItem, DrawerContentScrollView } from "@react-navigation/drawer";
import { Drawer } from "react-native-paper";
import { MaterialCommunityIcons,FontAwesome,FontAwesome5 ,MaterialIcons,Foundation} from "@expo/vector-icons";





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
            onPress={() => {console.log('Home Pressed');props.navigation.navigate('Home')}}
          />
                
            {/*Orders */}    
            <DrawerItem
              icon={({ color, size }) => (
                <FontAwesome5 name="truck"  size={20} color={color}/>
              )}
            label="Orders"
            onPress={() => {console.log('Orders Pressed');props.navigation.navigate('Orders')}}
          />

            {/*Create Orders */}    
            <DrawerItem
              icon={({ color, size }) => (
                <Foundation name="clipboard-notes"  size={size} color={color}/>
              )}
            label="Create Order"
            onPress={() => {console.log('Orders Pressed');props.navigation.navigate('CreateOrder')}}
          />


          {/*Payments */}
          <DrawerItem
              icon={({ color, size }) => (
                <MaterialIcons name="payments" size={size} color={color} />
              )}
            label="Payments"
            onPress={() => {console.log('Paymnets Pressed');props.navigation.navigate('Payments')}}
          />

            {/*Uploaded Images or lists */}
            <DrawerItem
              icon={({ color, size }) => (
                <FontAwesome name="list-alt" size={size} color={color}/> 
              )}
            label="Uploaded Lists/Images"
            onPress={() => {console.log('UploadedImages/List Pressed');props.navigation.navigate('ListorImages')}}
          />
         
        </Drawer.Section>
        
        <Drawer.Section style={styles.drawerSection}>

          {/*Add Product */}
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialIcons name="post-add" size={size} color={color} />
            )}
            label="Add Product"
            onPress={() => {console.log('Add Product Pressed');props.navigation.navigate("AddProduct")}}
          />

          {/*Edit product */}
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="file-document-edit-outline" size={size} color={color} />
            )}
            label="Edit/Delete Product"
            onPress={() => {console.log('Edit Product Pressed');props.navigation.navigate("EditorDelete")}}
          />

          {/*Slider Images */}
          <DrawerItem
            icon={({ color, size }) => (
              <FontAwesome name="sliders" size={size} color={color} />
            )}
            label="Slider Images"
            onPress={() => {console.log('Slider Images Pressed');props.navigation.navigate("SliderImages")}}
          />

            {/*Send notifications */}
           <DrawerItem
            icon={({ color, size }) => (
              <MaterialIcons name="category" size={size} color={color} />
              
              
            )}
            label="CategorySubCategory"
            onPress={() => {console.log('Send Notification Pressed');props.navigation.navigate("CategorySubCategory")}}
          />


          {/*Create Bill Pressed */}
          <DrawerItem
            icon={({ color, size }) => (
              <MaterialCommunityIcons name="printer-check" size={size} color={color} />
              
            )}
            label="Create Bill"
            onPress={() => {console.log('Create Bill Pressed');props.navigation.navigate("CreateBill")}}
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