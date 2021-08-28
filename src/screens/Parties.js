import React ,{useState,useEffect} from 'react';
import {Text,View,TouchableOpacity,TextInput,FlatList} from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function PartiesScreen({navigation}){
    
    const [searchName,setSearchName] = useState(null);


   

    const subBills= [
        {id:0,partieName:"Shakti Traders , Jalagaon",place:"jalagaon"},
        {id:1,partieName:"Manohar Parikar , Maharastra",place:"jalagaon"},
        {id:2,partieName:"Venkaiyya Naydu Industries Private Ltd , Hyderabad",place:"jalagaon"},
        {id:3,partieName:"Bangarappa Industries Prvt ltd , mysore",place:"jalagaon"},
        {id:4,partieName:"Manohar Parikar , Maharastra",place:"jalagaon"},
        {id:5,partieName:"GreenGram",place:"jalagaon"},
        {id:6,partieName:"Bangarappa Industries Prvt ltd , mysore",place:"jalagaon"},
        {id:7,partieName:"Manohar Parikar , Maharastra",place:"jalagaon"},
        {id:8,partieName:"Shakti Traders , Jalagaon",place:"jalagaon"},
        {id:9,partieName:"Venkaiyya Naydu Industries Private Ltd , Hyderabad",place:"jalagaon"},
        {id:10,partieName:"Shakti Traders , Jalagaon",place:"jalagaon"}
    ]

    function SubBillItem({partieName,place}){
        return(
        <View style={{height:75,marginVertical:5,elevation:10,backgroundColor:"white"}}>
            <TouchableOpacity style={{flex:1,flexDirection:"row"}} onPress={()=>{navigation.navigate("editPartie",{partieName:partieName,place:place})}}>
                <View style={{flex:1,paddingVertical:5,paddingHorizontal:10}}>
                    <Text style={{fontSize:22,fontWeight:"500"}}>{partieName}</Text>
                </View>
                
                

            </TouchableOpacity>
        </View>)
    }

    function CreatePartie(){
        
        return(
            <TouchableOpacity style={{height:75,borderColor:'orange',borderWidth:0.1,backgroundColor:'white',marginVertical:10,alignItems:'center'}} onPress={()=>{navigation.navigate("createPartie")}}>
                <View style={{flexDirection:"row"}}>
                    
                    <Text style={{fontSize:25,color:'orange',fontWeight:'700',alignContent:'center',marginVertical:18}}>Create New Partie</Text>
                    <Ionicons name="add-circle-outline" size={30} color="orange"  style={{marginHorizontal:20,alignSelf:"center",marginVertical:18}}/>
                </View>
                

            </TouchableOpacity>
        )
    }





    navigation.setOptions({title:"Parties"})
    return(
    <View style={{flex:1}}>
        <View style={{flexDirection:"row",height:50,marginHorizontal:20,marginTop:50,elevation:20,backgroundColor:"white",borderRadius:10}}>
            
            
            
            <View style={{flex:0.9,borderLeftWidth:0.1,borderColor:"#DCDCDC"}}>
                    <TextInput 
                        style={{marginHorizontal:25,marginVertical:4,backgroundColor:'#f7f6f2',flexDirection:'row',borderRadius:5,padding:6,fontSize:20}}
                        placeholder="Enter partie name to search"
                        textContentType='nickname'
                        maxLength={10}
                        value={searchName}
                        onChangeText={setSearchName}
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
            ListHeaderComponent={()=>{return(<CreatePartie/>)}} 
            renderItem={({item})=>{        
                return(<SubBillItem partieName={item.partieName} place={item.place}/>);}}
            keyExtractor={(item) => item.id}
            style={{marginHorizontal:20,marginVertical:10}}
            
            />


    </View>)

}