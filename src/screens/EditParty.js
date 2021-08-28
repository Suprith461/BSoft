import React,{useState,useEffect} from 'react'
import {Text,View,TextInput,Dimensions,TouchableOpacity,ActivityIndicator} from 'react-native'

import {useDispatch,useSelector}  from 'react-redux';
import {createPartie} from './../redux/partie/partieActions';
import Modal from 'modal-react-native-web';

export default function EditParty({navigation,route}){
    const params =route.params
    const {width,height} = Dimensions.get("screen")
    
    const [partieName,setPartieName] = useState(null);
    const [partiePlace,setPartiePlace]= useState(null);
    const [pCommission,setPCommssion] =useState(null)
    navigation.setOptions({title:"Enter the details to create commodity"})

    const dispatch = useDispatch();
    const loading = useSelector(state=>state.partie.creatingPartie);
    const error = useSelector(state=>state.partie.createPartieError);

    useEffect(() => {
        if(params.partieName!=null){
            setPartieName(params.partieName)
            setPartiePlace(params.place)
            setPCommssion(params.pCommission)
        }
        
    }, [params,navigation])

    useEffect(() => {
        if(error!=null){
            alert(error.type)
        }
        
    }, [error,navigation])

    function checkFields(){
        
        if(partieName !=null && partiePlace!=null && pCommission!=null ){
            return true
        }
        return false
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
                placeholder="Enter partie place "
                textContentType='nickname'
                value={pCommission}
                onChangeText={setPCommssion}
            />
            

           
            

                <TouchableOpacity style={{backgroundColor:"orange",alignSelf:"center",paddingVertical:5,paddingHorizontal:40,marginVertical:4,borderRadius:10,elevation:10}}
                    onPress={()=>{
                        if(checkFields()){
                            dispatch(createPartie({partieName:partieName,pCommission:pCommission,partiePlace:partiePlace}))

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
            visible={loading}
              >  
          <View style={{flex:1,backgroundColor:"#DCDCDC50",alignItems:"center"}}>
                <View style={{flex:0.1}}></View>
            <View style={{flex:0.8,width:width,flexDirection:"row"}}>
                <View style={{flex:0.2}}></View>
                {/*All the commodities */}
                <View style={{backgroundColor:"white",flex:0.6}}>

                <ActivityIndicator style={{alignSelf:'center' ,flex:0.6}} size={100} color='orange'/>

                <Text style={{fontSize:20,color:'#DCDCDC' ,fontWeight:'bold',alignSelf:'center'}}> {"Saving changes to partie.\n Please wait till it gets exceuted"}</Text>

                </View>
                <View style={{flex:0.2}}></View>
                
                
            </View>
            
            
          </View>
        </Modal>
    </View>);
}