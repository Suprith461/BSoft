import React,{useState,useEffect} from 'react';
import {Text,View,TouchableOpacity,TextInput,FlatList,ActivityIndicator,Dimensions} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Print from 'expo-print';
import bill from './../finalBill/bill.html' 
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import {fetchCommodities} from './../redux/commodity/commodityActions';
import {useDispatch,useSelector} from 'react-redux'

import Modal from 'modal-react-native-web';


export default function Commodities({navigation}){
    const {width,height} = Dimensions.get("screen")
    const dispatch = useDispatch()
    const fetching = useSelector(state => state.commodity.fetchingCommodities)
    const fetchCommodityPayload = useSelector(state=>state.commodity.fetchedCommoditiesPayload)
    const fetchCommodityError = useSelector(state=>state.commodity.fetchedCommoditiesError)
    

    useEffect(() => {
      dispatch(fetchCommodities())
    }, [])

    

    const subBills= [
        {id:0,commodityName:"Dry pulses",dCommission:5,weighManFee:1,hamali:3},
        {id:1,commodityName:"Oil",dCommission:5,weighManFee:1,hamali:3},
        {id:2,commodityName:"Dry pulses",dCommission:5,weighManFee:1,hamali:3},
        {id:3,commodityName:"Oil pulses",dCommission:5,weighManFee:1,hamali:3},
        {id:4,commodityName:"Dry pulses",dCommission:5,weighManFee:1,hamali:3},
    ]
  

    function CreateCommodity(){
        
        return(
            <TouchableOpacity style={{height:80,borderColor:'orange',borderWidth:0.1,backgroundColor:'white',marginVertical:10,alignItems:'center'}} onPress={()=>{navigation.navigate("CreateCommodity")}}>
                <View style={{flexDirection:"row"}}>
                    
                    <Text style={{fontSize:25,color:'orange',fontWeight:'700',alignContent:'center',marginVertical:18}}>Add a new commodity</Text>
                    <Ionicons name="add-circle-outline" size={30} color="orange"  style={{marginHorizontal:20,alignSelf:"center",marginVertical:18}}/>
                </View>
                

            </TouchableOpacity>
        )
    }

    

    function SubBillItem({commodityName,dCommission,weighManFee,hamali,sess}){
        return(
        <View style={{height:75,marginVertical:5,elevation:10,backgroundColor:"white"}}>
            <TouchableOpacity style={{flex:1,flexDirection:"row"}} onPress={()=>{
              navigation.navigate("EditCommodity",{commodityName:commodityName,dCommission:dCommission,weighManFee:weighManFee,hamali:hamali,sess:sess})}}>
                <View style={{flex:1,paddingVertical:5,paddingHorizontal:10}}>
                    <Text style={{fontSize:22,fontWeight:"500"}}>{commodityName}</Text>
                </View>
                
                

            </TouchableOpacity>
        </View>)
    }
    return(
    <View style={{flex:1}}>
        


        {/*Flat List Containing SmallBills */}
        <FlatList
            data={fetchCommodityPayload}
            showsVerticalScrollIndicator 
            renderItem={({item})=>{        
                return(<SubBillItem commodityName={item.commodityName} dCommission={item.dCommission} weighManFee={item.weighmanFee} hamali={item.hamali} sess={item.sess}/>);}}
            keyExtractor={(item) => item.id}
            style={{marginHorizontal:20,marginVertical:10}}
            ListHeaderComponent={<CreateCommodity/>}
            
            />
      <Modal
            animationType="none"
            transparent={true}
            visible={fetching}
              >  
          <View style={{flex:1,backgroundColor:"#DCDCDC50",alignItems:"center"}}>
                <View style={{flex:0.1}}></View>
            <View style={{flex:0.8,width:width,flexDirection:"row"}}>
                <View style={{flex:0.2}}></View>
                {/*All the commodities */}
                <View style={{backgroundColor:"white",flex:0.6}}>

                <ActivityIndicator style={{alignSelf:'center' ,flex:0.6}} size={100} color='orange'/>

                <Text style={{fontSize:20,color:'#DCDCDC' ,fontWeight:'bold',alignSelf:'center'}}> {"Fetching commodities...."}</Text>

                </View>
                <View style={{flex:0.2}}></View>
                
                
            </View>
            
            
          </View>
        </Modal>

    </View>)

}