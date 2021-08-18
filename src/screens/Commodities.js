import React,{useState,useEffect} from 'react';
import {Text,View,TouchableOpacity,TextInput,FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Commodities({navigation}){
    const [searchTerm,setSearchTerm] =useState(null);
   
    

    const subBills= [
        {id:0,commodity:"GreenGram",date:"2021/08/18"},
        {id:1,commodity:"GreenGram",date:"2021/08/18"},
        {id:2,commodity:"GreenGram",date:"2021/08/18"},
        {id:3,commodity:"GreenGram",date:"2021/08/18"},
        {id:4,commodity:"GreenGram",date:"2021/08/18"},
        {id:5,commodity:"GreenGram",date:"2021/08/18"},
        {id:6,commodity:"GreenGram",date:"2021/08/18"},
        {id:7,commodity:"GreenGram",date:"2021/08/18"},
        {id:8,commodity:"GreenGram",date:"2021/08/18"},
        {id:9,commodity:"GreenGram",date:"2021/08/18"},
        {id:10,commodity:"GreenGram",date:"2021/08/18"}
    ]

    function CreateCommodity(){
        navigation.navigate("createCommodity")
        return(
            <TouchableOpacity style={{height:80,borderColor:'orange',borderWidth:0.1,backgroundColor:'white',marginVertical:10,alignItems:'center'}} onPress={()=>{navigation.navigate("CreateCommodity")}}>
                <View style={{flexDirection:"row"}}>
                    
                    <Text style={{fontSize:25,color:'orange',fontWeight:'700',alignContent:'center',marginVertical:18}}>Add a new commodity</Text>
                    <Ionicons name="add-circle-outline" size={30} color="orange"  style={{marginHorizontal:20,alignSelf:"center",marginVertical:18}}/>
                </View>
                

            </TouchableOpacity>
        )
    }

    

    function SubBillItem({commodity,date}){
        return(
        <View style={{height:75,marginVertical:5,elevation:10,backgroundColor:"white"}}>
            <TouchableOpacity style={{flex:1,flexDirection:"row"}} onPress={()=>{navigation.navigate("EditCommodity")}}>
                <View style={{flex:0.5,paddingVertical:5,paddingHorizontal:10}}>
                    <Text style={{fontSize:22,fontWeight:"500"}}>{commodity}</Text>
                </View>
                <View style={{flex:0.5,paddingVertical:5,paddingHorizontal:10}}>
                    <Text style={{fontSize:22,fontWeight:"500"}}>{date}</Text>
                </View>
                

            </TouchableOpacity>
        </View>)
    }
    return(
    <View style={{flex:1}}>
        <View style={{flexDirection:"row",height:50,marginHorizontal:20,marginTop:50,elevation:20,backgroundColor:"white",borderRadius:10}}>
            
            
            
            <View style={{flex:0.9,borderLeftWidth:0.1,borderColor:"#DCDCDC"}}>
                    <TextInput 
                        style={{marginHorizontal:25,marginVertical:4,backgroundColor:'#f7f6f2',flexDirection:'row',borderRadius:5,padding:6,fontSize:20}}
                        placeholder="Enter commodity name to search"
                        textContentType='oneTimeCode'
                        maxLength={10}
                        value={searchTerm}
                        onChangeText={setSearchTerm}
                        
                    />
            </View>
            
            <View style={{flex:0.1}}>
                <TouchableOpacity style={{backgroundColor:"orange",alignSelf:"center",paddingVertical:5,paddingHorizontal:40,marginVertical:4,borderRadius:10,elevation:10}}>
                    <Text style={{fontWeight:"bold",fontSize:24,color:"white",alignSelf:"center"}}>
                        Search
                    </Text>
                </TouchableOpacity>
            </View>
        </View>


        {/*Flat List Containing SmallBills */}
        <FlatList
            data={subBills}
            showsVerticalScrollIndicator 
            renderItem={({item})=>{        
                return(<SubBillItem commodity={item.commodity} date={item.date}/>);}}
            keyExtractor={(item) => item.id}
            style={{marginHorizontal:20,marginVertical:10}}
            ListHeaderComponent={<CreateCommodity/>}
            
            />


    </View>)

}