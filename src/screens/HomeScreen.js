import React ,{useState,useEffect} from 'react';
import {Text,View,TouchableOpacity,TextInput,FlatList} from 'react-native';
import CategoryListComp from '../components/CategoryListComp'

export default function HomeScreen({navigation}){
    const [partie,setPartie] =useState(null);
    const [searchDate,setSearchDate] = useState(null);


    const dataOfCommodities=[
        {id:0,subCategory:"GreenGram",showAs:"Green Gram"},
        {id:1,subCategory:"GroundNut",showAs:"Ground Nut"},
        {id:2,subCategory:"SoyaBean",showAs:"Soya Bean"}
    ]

    const subBills= [
        {id:0,partieName:"Shakti Traders , Jalagaon",date:"2021/08/18"},
        {id:1,partieName:"Manohar Parikar , Maharastra",date:"2021/08/18"},
        {id:2,partieName:"Venkaiyya Naydu Industries Private Ltd , Hyderabad",date:"2021/08/18"},
        {id:3,partieName:"Bangarappa Industries Prvt ltd , mysore",date:"2021/08/18"},
        {id:4,partieName:"Manohar Parikar , Maharastra",date:"2021/08/18"},
        {id:5,partieName:"GreenGram",date:"2021/08/18"},
        {id:6,partieName:"Bangarappa Industries Prvt ltd , mysore",date:"2021/08/18"},
        {id:7,partieName:"Manohar Parikar , Maharastra",date:"2021/08/18"},
        {id:8,partieName:"Shakti Traders , Jalagaon",date:"2021/08/18"},
        {id:9,partieName:"Venkaiyya Naydu Industries Private Ltd , Hyderabad",date:"2021/08/18"},
        {id:10,partieName:"Shakti Traders , Jalagaon",date:"2021/08/18"}
    ]

    function SubBillItem({partieName,date}){
        return(
        <View style={{height:75,marginVertical:5,elevation:10,backgroundColor:"white"}}>
            <TouchableOpacity style={{flex:1,flexDirection:"row"}}>
                <View style={{flex:0.8,paddingVertical:5,paddingHorizontal:10}}>
                    <Text style={{fontSize:22,fontWeight:"500"}}>{partieName}</Text>
                </View>
                <View style={{flex:0.2,paddingVertical:5,paddingHorizontal:10}}>
                    <Text style={{fontSize:22,fontWeight:"500"}}>{date}</Text>
                </View>
                

            </TouchableOpacity>
        </View>)
    }

    navigation.setOptions({title:"Home"})
    return(
    <View style={{flex:1}}>
        <View style={{flexDirection:"row",height:50,marginHorizontal:20,marginTop:50,elevation:20,backgroundColor:"white",borderRadius:10}}>
            
            <View style={{flex:0.45,borderLeftWidth:0.1,borderColor:"#DCDCDC"}}>
                <CategoryListComp subCat1='Select partie name to search' data={dataOfCommodities} style={{flex:1}} selectedItem={partie} setItem={setPartie} callback={()=>{}}/>
            </View>
            
            <View style={{flex:0.45,borderLeftWidth:0.1,borderColor:"#DCDCDC"}}>
                    <TextInput 
                        style={{marginHorizontal:25,marginVertical:4,backgroundColor:'#f7f6f2',flexDirection:'row',borderRadius:5,padding:6,fontSize:20}}
                        placeholder="Enter Search Date in order(YYYY/mm/dd)"
                        textContentType='oneTimeCode'
                        maxLength={10}
                        value={searchDate}
                        onChangeText={setSearchDate}
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
                return(<SubBillItem partieName={item.partieName} date={item.date}/>);}}
            keyExtractor={(item) => item.id}
            style={{marginHorizontal:20,marginVertical:10}}
            
            />


    </View>)

}