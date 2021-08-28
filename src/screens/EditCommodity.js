import React,{useState,useEffect} from 'react'
import {Text,View,TextInput,TouchableOpacity,ActivityIndicator,Dimensions} from 'react-native'
import {useDispatch,useSelector}  from 'react-redux';
import {createCommodity} from './../redux/commodity/commodityActions';
import Modal from 'modal-react-native-web';




export default function EditCommodity({navigation,route}){
    const {width,height} = Dimensions.get("screen")
    const [commission,setCommission] = useState(null);
    const [commodityName,setCommodityName] = useState(null);
    const [weighmanFee,setWeighManFee] = useState(null);
    const [hamali,setHamali]=useState(null);
    const params = route.params;
    const dispatch = useDispatch();
    const loading = useSelector(state=>state.commodity.creatingCommodity);
    const error = useSelector(state=>state.commodity.createCommodityError);

    useEffect(() => {
        
        if(params.commodityName!=null){
            setCommodityName(params.commodityName);
            setCommission(params.dCommission);
            setWeighManFee(params.weighManFee)
            setHamali(params.hamali)
        }
    }, [params,navigation])

    useEffect(() => {
        if(error!=null){
            alert(error.type)
        }
        
    }, [error,navigation])

    function checkFields(){
        console.log("Indside check fields",commission)
        if(commission !=null && commodityName!=null && weighmanFee!=null && hamali!=null){
            return true
        }
        return false
    }
    

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
                placeholder="Enter Hamali fees "
                textContentType='newPassword'
                value={hamali}
                onChangeText={setHamali}
            />


           

                <TouchableOpacity style={{backgroundColor:"orange",alignSelf:"center",paddingVertical:5,paddingHorizontal:40,marginVertical:4,borderRadius:10,elevation:10}}
                    onPress={()=>{
                        if(checkFields()){
                            dispatch(createCommodity({commodityName:commodityName,dCommission:commission,weighmanFee:weighmanFee,hamali:hamali}))

                        }else{
                            alert("No fields can be empty!","Please fill all the fields")
                        }
                    
                    }}
                >
                    <Text style={{fontWeight:"bold",fontSize:24,color:"white",alignSelf:"center"}}>
                        Save Changes to Commodity
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

                <Text style={{fontSize:20,color:'#DCDCDC' ,fontWeight:'bold',alignSelf:'center'}}> {"Saving changes to commodity.\n Please wait till it gets exceuted"}</Text>

                </View>
                <View style={{flex:0.2}}></View>
                
                
            </View>
            
            
          </View>
        </Modal>

    </View>);
}