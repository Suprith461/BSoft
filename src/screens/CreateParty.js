import React,{useState,useEffect} from 'react'
import {Text,View,TextInput} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';


export default function CreateParty({navigation}){
    const [partieName,setPartieName] = useState(null);
    const [partiePlace,setPartiePlace]= useState(null)
    navigation.setOptions({title:"Enter the details to create commodity"})
    return(
    <View style={{flex:1}}>
        <View style={{flex:0.9,marginHorizontal:50,marginVertical:25,backgroundColor:'white',elevation:25}}>
            <TextInput 
                style={{marginHorizontal:25,marginVertical:10,backgroundColor:'#f7f6f2',flexDirection:'row',borderRadius:5,padding:6,fontSize:20}}
                placeholder="Enter Partie Name"
                textContentType='nickname'
                multiline
                value={partieName}
                onChangeText={setPartieName}
            />
            <TextInput 
                style={{marginHorizontal:25,marginVertical:10,backgroundColor:'#f7f6f2',flexDirection:'row',borderRadius:5,padding:6,fontSize:20}}
                placeholder="Enter partie place "
                textContentType='nickname'
                value={partiePlace}
                onChangeText={setPartiePlace}
            />

            

           
            

                <TouchableOpacity style={{backgroundColor:"orange",alignSelf:"center",paddingVertical:5,paddingHorizontal:40,marginVertical:4,borderRadius:10,elevation:10}}>
                    <Text style={{fontWeight:"bold",fontSize:24,color:"white",alignSelf:"center"}}>
                        Save partie details
                    </Text>
                </TouchableOpacity>
        </View>

    </View>);
}