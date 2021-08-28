import React,{useState,useEffect} from 'react'
import {Text,View,TextInput,ActivityIndicator,Dimensions,TouchableOpacity} from 'react-native'

import {useSelector,useDispatch} from 'react-redux';
import {createPartie} from './../redux/partie/partieActions'
import Modal from 'modal-react-native-web';

export default function CreateParty({navigation}){
    const {width,height} = Dimensions.get("screen")
    const [partieName,setPartieName] = useState(null);
    const [partiePlace,setPartiePlace]= useState(null);
    const [pCommission,setPCommission] = useState(null);
    navigation.setOptions({title:"Enter the details to create commodity"})
    const dispatch = useDispatch();
    const creatingPartie = useSelector(state=>state.partie.creatingPartie);
    const createPartieError = useSelector(state=>state.partie.createPartieError);
    


    useEffect(()=>{
        if(createPartieError!=null){
            alert(createPartieError)
        }
        
    },[createPartieError,navigation])

    function checkFields(){
        if(partieName!=null && partiePlace!=null && pCommission!=null){
            return true;
        }
        return false;
    }

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

            <TextInput 
                style={{marginHorizontal:25,marginVertical:10,backgroundColor:'#f7f6f2',flexDirection:'row',borderRadius:5,padding:6,fontSize:20}}
                placeholder="Enter purchase commission "
                textContentType='newPassword'
                value={pCommission}
                onChangeText={setPCommission}
            />
            

           
            

                <TouchableOpacity style={{backgroundColor:"orange",alignSelf:"center",paddingVertical:5,paddingHorizontal:40,marginVertical:4,borderRadius:10,elevation:10}}
                    onPress={()=>{
                        if(checkFields()){
                            dispatch(createPartie({partieName:partieName,partiePlace:partiePlace,pCommission:pCommission}))
                        }else{
                            alert("No fields can be empty!","Please fill all the fields")
                        }
                    }}
                >
                    <Text style={{fontWeight:"bold",fontSize:24,color:"white",alignSelf:"center"}}>
                        Save partie details
                    </Text>
                </TouchableOpacity>
        </View>
        <Modal
            animationType="none"
            transparent={true}
            visible={creatingPartie}
              >  
          <View style={{flex:1,backgroundColor:"#DCDCDC50",alignItems:"center"}}>
                <View style={{flex:0.1}}></View>
            <View style={{flex:0.8,width:width,flexDirection:"row"}}>
                <View style={{flex:0.2}}></View>
                {/*All the commodities */}
                <View style={{backgroundColor:"white",flex:0.6}}>

                <ActivityIndicator style={{alignSelf:'center' ,flex:0.6}} size={100} color='orange'/>

                <Text style={{fontSize:20,color:'#DCDCDC' ,fontWeight:'bold',alignSelf:'center'}}> {"Adding commodity to database.\n Please wait till it gets exceuted"}</Text>

                </View>
                <View style={{flex:0.2}}></View>
                
                
            </View>
            
            
          </View>
        </Modal>
    </View>);
}