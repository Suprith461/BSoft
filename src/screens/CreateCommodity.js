import React,{useState,useEffect} from 'react'
import {Text,View,TextInput} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function CreateCommodity({navigation}){
    const [commission,setCommission] = useState(null);
    const [commodityName,setCommodityName] = useState(null);
    const [marketFee,setMarketFee] = useState(null);
    const [weighmanFee,setWeighManFee] = useState(null);
    const [vat,setVat] = useState(null);
    const [bardan,setBardan] = useState(null);
    const [bardanVat,setBardanVat] = useState(null);
    const [hamali,setHamali]=useState(null);
    const [ascFee,setAscFee]=useState(null);
    const [freight,setFreight]=useState(null);

    navigation.setOptions({title:"Enter the details to create commodity"})
    return(
    <View style={{flex:1}}>
        <View style={{flex:0.9,marginHorizontal:50,marginVertical:25,backgroundColor:'white',elevation:25}}>
            <TextInput 
                style={{marginHorizontal:25,marginVertical:10,backgroundColor:'#f7f6f2',flexDirection:'row',borderRadius:5,padding:6,fontSize:20}}
                placeholder="Enter Commodity Name"
                textContentType='nickname'
                value={commodityName}
                onChangeText={setCommodityName}
            />
            <TextInput 
                style={{marginHorizontal:25,marginVertical:10,backgroundColor:'#f7f6f2',flexDirection:'row',borderRadius:5,padding:6,fontSize:20}}
                placeholder="Enter commission %"
                textContentType='newPassword'
                value={commission}
                onChangeText={setCommission}
            />

            <TextInput 
                style={{marginHorizontal:25,marginVertical:10,backgroundColor:'#f7f6f2',flexDirection:'row',borderRadius:5,padding:6,fontSize:20}}
                placeholder="Enter Weighman Fee / bag"
                textContentType='newPassword'
                value={weighmanFee}
                onChangeText={setWeighManFee}
            />

            <TextInput 
                style={{marginHorizontal:25,marginVertical:10,backgroundColor:'#f7f6f2',flexDirection:'row',borderRadius:5,padding:6,fontSize:20}}
                placeholder="Enter market Fee  %"
                textContentType='newPassword'
                value={marketFee}
                onChangeText={setMarketFee}
            />

            <TextInput 
                style={{marginHorizontal:25,marginVertical:10,backgroundColor:'#f7f6f2',flexDirection:'row',borderRadius:5,padding:6,fontSize:20}}
                placeholder="Enter vat %"
                textContentType='newPassword'
                value={vat}
                onChangeText={setVat}
            />


            <TextInput 
                style={{marginHorizontal:25,marginVertical:10,backgroundColor:'#f7f6f2',flexDirection:'row',borderRadius:5,padding:6,fontSize:20}}
                placeholder="Enter bardan %"
                textContentType='newPassword'
                value={bardan}
                onChangeText={setBardan}
            />


            <TextInput 
                style={{marginHorizontal:25,marginVertical:10,backgroundColor:'#f7f6f2',flexDirection:'row',borderRadius:5,padding:6,fontSize:20}}
                placeholder="Enter bardan vat %"
                textContentType='newPassword'
                value={bardanVat}
                onChangeText={setBardanVat}
            />

            <TextInput 
                style={{marginHorizontal:25,marginVertical:10,backgroundColor:'#f7f6f2',flexDirection:'row',borderRadius:5,padding:6,fontSize:20}}
                placeholder="Enter Hamali fees "
                textContentType='newPassword'
                value={hamali}
                onChangeText={setHamali}
            />


            <TextInput 
                style={{marginHorizontal:25,marginVertical:10,backgroundColor:'#f7f6f2',flexDirection:'row',borderRadius:5,padding:6,fontSize:20}}
                placeholder="Enter ascFees %"
                textContentType='newPassword'
                value={ascFee}
                onChangeText={setAscFee}
            />


            <TextInput 
                style={{marginHorizontal:25,marginVertical:10,backgroundColor:'#f7f6f2',flexDirection:'row',borderRadius:5,padding:6,fontSize:20,alignSelf:''}}
                placeholder="Enter freight %"
                textContentType='newPassword'
                value={freight}
                onChangeText={setFreight}
            />

                <TouchableOpacity style={{backgroundColor:"orange",alignSelf:"center",paddingVertical:5,paddingHorizontal:40,marginVertical:4,borderRadius:10,elevation:10}}>
                    <Text style={{fontWeight:"bold",fontSize:24,color:"white",alignSelf:"center"}}>
                        Create Commodity
                    </Text>
                </TouchableOpacity>
        </View>

    </View>);
}