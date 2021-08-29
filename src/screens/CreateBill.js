import React,{useState,useEffect,useRef} from 'react';
import {View,TextInput,TouchableOpacity,Text,ScrollView,Dimensions, FlatList,Button} from 'react-native';
import CategoryListComp from '../components/CategoryListComp'
import {useSelector,useDispatch} from 'react-redux';
import { fetchParties } from '../redux/partie/partieActions';
import { fetchCommodities } from '../redux/commodity/commodityActions';
import {addSmallBill} from './../redux/finalBill/finalBillActions';

export default function CreateBill({navigation}){
    
    const [partieName,setPartieName] = useState(null);
    const [commodity,setCommodity] =useState(null)
    const [lorryNo,setLorryNo] = useState(null);
    const [bags,setBags] = useState(null);
    const [quintal,setQuintal]=useState(null);
    const [kg,setKg] = useState(null);
    const [rate,setRate]=useState(null);
    const [tAmount,setTamount]=useState(null);

    const [subBillId,setSubBillId] = useState(0);

    const bags_in = useRef()
    const quint_in = useRef()
    const kg_in =useRef()
    const rate_in = useRef()

    const addButton = useRef()
    
    const dispatch = useDispatch();

    const fetchedPartiePayload = useSelector(state=>state.partie.fetchedPartiesPayload);
    const fetchedCommodityPayload = useSelector(state=>state.commodity.fetchedCommoditiesPayload);

    useEffect(() => {
        if(fetchedPartiePayload==null){
            dispatch(fetchParties())
        }
        if(fetchedCommodityPayload==null){
            dispatch(fetchCommodities())
        }
        
    }, [navigation])

    function checkSubBillFieldsForInteger(){
        if(typeof(parseFloat(bags))=='number' &&  typeof(parseFloat(quintal))=='number' && typeof(parseFloat(rate))=='number'){
            return true
        }else{
            return false
        }
    }

    function checkSubBillFields(){
        if(bags !=null && quintal!=null && kg!=null && rate!=null ){
            if(checkSubBillFieldsForInteger()){
                return true
            }else{
                alert("The entries should be numbers!\n Please enter correct data")
                return false
            }
        }
        return false
    }
    
    function findSubBillTotal(qui,kg,rate){
        return ((parseFloat(qui)+parseFloat(kg)/100)*rate)

    }
    const partieList= [
        {id:0,subCategory:"Shakti Traders , Jalagaon" , showAs:"Shakti Traders , Jalagaon"},
        {id:1,subCategory:"Manohar Parikar , Maharastra",showAs:"Manohar Parikar , Maharastra"},
        {id:2,subCategory:"Venkaiyya Naydu Industries Private Ltd , Hyderabad",showAs:"Venkaiyya Naydu Industries Private Ltd , Hyderabad"},
        {id:3,subCategory:"Bangarappa Industries Prvt ltd , mysore",showAs:"Bangarappa Industries Prvt ltd , mysore"},
        {id:4,subCategory:"Manohar Parikar , Maharastra",showAs:"Manohar Parikar , Maharastra"},
        {id:5,subCategory:"GreenGram",showAs:"GreenGram"},
        {id:6,subCategory:"Bangarappa Industries Prvt ltd , mysore",showAs:"Bangarappa Industries Prvt ltd , mysore"},
        {id:7,subCategory:"Manohar Parikar , Maharastra",showAs:"Manohar Parikar , Maharastra"},
        {id:8,subCategory:"Shakti Traders , Jalagaon",showAs:"Shakti Traders , Jalagaon"},
        {id:9,subCategory:"Venkaiyya Naydu Industries Private Ltd , Hyderabad",showAs:"Venkaiyya Naydu Industries Private Ltd , Hyderabad"},
        {id:10,subCategory:"Shakti Traders , Jalagaon",showAs:"Shakti Traders , Jalagaon"}
    ]

    const subBills = [
        {id:0,bags:10,quintal:25,kg:2,rate:2500,total:62550},
        {id:0,bags:10,quintal:25,kg:2,rate:2500,total:62550},
        {id:0,bags:10,quintal:25,kg:2,rate:2500,total:62550},
        {id:0,bags:10,quintal:25,kg:2,rate:2500,total:62550},
        {id:0,bags:10,quintal:25,kg:2,rate:2500,total:62550},
        {id:0,bags:10,quintal:25,kg:2,rate:2500,total:62550},
        {id:0,bags:10,quintal:25,kg:2,rate:2500,total:62550},
        {id:0,bags:10,quintal:25,kg:2,rate:2500,total:62550},
        {id:0,bags:10,quintal:25,kg:2,rate:2500,total:62550},
        {id:0,bags:10,quintal:25,kg:2,rate:2500,total:62550}
    ]

    function showTotal(){
        if(quintal!=null && kg!=null && rate!=null){
            
            return((parseFloat(quintal)+parseFloat(kg)/100)*parseFloat(rate))
        }
        return 0
    }

    function SubBillComp({bags,quintal,kg,rate,total,style}){
        return(
            <View style={{height:50,borderColor:'#DCDCDC',borderWidth:0.2,flexDirection:'row',backgroundColor:"white",...style}}>

                        <view style={{flex:0.1}}>
                            <View style={{flex:1,borderRightWidth:0.1,borderColor:'#DCDCDC',height:'100%'}}>
                                <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:5}}>{bags}</Text>
                            </View>
                            
                        </view>
                        <view style={{flex:0.1}}>
                            <View style={{flex:1,borderRightWidth:0.1,borderColor:'#DCDCDC',height:'100%'}}>
                                <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:5}}>{quintal}</Text>
                            </View>
                            
                        </view>
                        
                        <view style={{flex:0.1}}>
                            <View style={{flex:1,borderRightWidth:0.1,borderColor:'#DCDCDC',height:'100%'}}>
                                <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:5}}>{kg}</Text>
                            </View>
                            
                        </view>
                        
                        <view style={{flex:0.3}}>
                            <View style={{flex:1,borderRightWidth:0.1,borderColor:'#DCDCDC',height:'100%'}}>
                                <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:5}}>{rate}</Text>
                            </View>
                        </view>
                        
                        <view style={{flex:0.4,flexDirection:'row'}}>
                            <View style={{flex:1,borderRightWidth:0.1,borderColor:'#DCDCDC',height:'100%'}}>
                                <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:5}}>{total}</Text>
                            </View>
                        </view>
                    </View>

        );
    }


    function FlatListHeader(){
        return(
            <View style={{height:50,borderColor:'black',borderWidth:0.1,flexDirection:'row',backgroundColor:"white"}}>

                        <view style={{flex:0.1}}>
                            <View style={{flex:1,borderRightWidth:0.1,borderColor:'black',height:'100%'}}>
                                <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:5}}>BAGS</Text>
                            </View>
                            
                        </view>
                        <view style={{flex:0.1}}>
                            <View style={{flex:1,borderRightWidth:0.1,borderColor:'black',height:'100%'}}>
                                <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:5}}>QUINTAL</Text>
                            </View>
                            
                        </view>
                        
                        <view style={{flex:0.1}}>
                            <View style={{flex:1,borderRightWidth:0.1,borderColor:'black',height:'100%'}}>
                                <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:5}}>KG</Text>
                            </View>
                            
                        </view>
                        
                        <view style={{flex:0.3}}>
                            <View style={{flex:1,borderRightWidth:0.1,borderColor:'black',height:'100%'}}>
                                <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:5}}>RATE</Text>
                            </View>
                        </view>
                        
                        <view style={{flex:0.4,flexDirection:'row'}}>
                            <View style={{flex:1,borderRightWidth:0.1,borderColor:'black',height:'100%'}}>
                                <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:5}}>AMOUNT</Text>
                            </View>
                        </view>
                    </View>

        );
    }


    navigation.setOptions({title:"Add your purchases",

    headerRight: () => (
        <TouchableOpacity style={{backgroundColor:"orange",margin:5}} onPress={()=>navigation.navigate("createBillFinal")}>
            <Text style={{color:'white',fontWeight:'500',fontSize:22,paddingVertical:5,paddingHorizontal:15}}>Create Bill</Text>
        </TouchableOpacity>
      ),
})
        return(
            <View style={{flex:1}}>
                <ScrollView style={{flex:0.84,marginHorizontal:20}}>
                    <View style={{height:120 ,marginVertical:10,backgroundColor:"white"}}>
                        
                        <View style={{flex:0.5,marginTop:10}}>
                            <CategoryListComp selectedItem={partieName} setItem={setPartieName} data={fetchedPartiePayload} callback={()=>{}} subCat1="Select the Partie Name"/>
                        </View>
                        
                        <View style={{flex:0.5,flexDirection:"row"}}>
                        
                            <View style={{flex:0.5}}>
                                <CategoryListComp selectedItem={commodity} setItem={setCommodity} data={fetchedCommodityPayload} callback={()=>{}} subCat1="Select the commodity "/>
                            </View>
                        
                            <View style={{flex:0.5}}>
                                <TextInput
                                    placeholder="Enter Lorry No"
                                    value={lorryNo}
                                    onChangeText={setLorryNo}
                                    autoCompleteType="cc-exp"
                                    style={{backgroundColor:'#f7f6f2',flex:1,marginHorizontal:25,marginVertical:5,marginBottom:15,paddingHorizontal:20}}
                                />
                            </View>

                        </View>

                    </View>
                    
                    {/*Sub Bill components */}
                    <FlatList
                        data={subBills}
                        ListHeaderComponent={()=>{return(<FlatListHeader />)}}
                        showsVerticalScrollIndicator 
                        renderItem={({item})=>{        
                            return(<SubBillComp bags={item.bags} quintal={item.quintal} kg={item.kg} rate={item.rate} total={item.total}/>);}}
                        keyExtractor={(item) => item.id}
                    />
                    

                </ScrollView>
                
                <View style={{flex:0.18,borderWidth:0.2,borderColor:'#DCDCDC',backgroundColor:'white',marginVertical:15,marginHorizontal:20}}>
                
                    <View style={{flex:0.5}}>
                        <SubBillComp bags={100+' bags'} quintal={50+' quintal'} kg={20+' kg'} rate={'TOTAL'} total={15847555585.888 +' Rs'} style={{backgroundColor:"orange",borderWidth:0,marginHorizontal:0}}/>
                    </View>
                
                    <View style={{flex:0.5,flexDirection:'row'}}>
                
                        <view style={{flex:0.1,marginHorizontal:5,alignSelf:'center'}}>
                
                            <View style={{flex:1,height:'100%'}}>
                
                                <TextInput
                                    style={{paddingHorizontal:5,fontWeight:'500',fontSize:20,paddingVertical:5,borderWidth:0.1,borderColor:'#DCDCDC',backgroundColor:'#f7f6f2'}}
                                    placeholder={"Enter nor of Bags"}
                                    value={bags}
                                    onChangeText={setBags}
                    
                                    autoFocus={true}
                                    returnKeyType={'next'}
                                    onSubmitEditing={()=>quint_in.current.focus()}

                                 />
                            </View>
                            
                        </view>
                        <view style={{flex:0.1,marginHorizontal:5,alignSelf:'center'}}>
                            <View style={{flex:1,height:'100%'}}>
                                <TextInput
                                    style={{paddingHorizontal:5,fontWeight:'500',fontSize:20,paddingVertical:5,borderWidth:0.1,borderColor:'#DCDCDC',backgroundColor:'#f7f6f2'}}
                                    placeholder={"Enter Quintals"}
                                    value={quintal}
                                    onChangeText={setQuintal}

                                    ref={quint_in}
                                    returnKeyType={'next'}
                                    onSubmitEditing={()=>{kg_in.current.focus()}}

                                 />
                            </View>
                            
                        </view>
                        
                        <view style={{flex:0.1,marginHorizontal:5,alignSelf:'center'}}>
                            <View style={{flex:1,height:'100%'}}>
                                <TextInput
                                    style={{paddingHorizontal:5,fontWeight:'500',fontSize:20,paddingVertical:5,borderWidth:0.1,borderColor:'#DCDCDC',backgroundColor:'#f7f6f2'}}
                                    placeholder={"Enter Kg"}
                                    value={kg}
                                    onChangeText={setKg}

                                    returnKeyType={'next'}
                                    ref={kg_in}
                                    onSubmitEditing={()=>rate_in.current.focus()}

                                 />
                            </View>
                            
                        </view>
                        
                        <view style={{flex:0.3,marginHorizontal:5,alignSelf:'center'}}>
                            <View style={{flex:1,height:'100%'}}>
                                <TextInput
                                    style={{paddingHorizontal:5,fontWeight:'500',fontSize:20,paddingVertical:5,borderWidth:0.1,borderColor:'#DCDCDC',backgroundColor:'#f7f6f2'}}
                                    placeholder={"Enter Rate"}
                                    value={rate}
                                    onChangeText={setRate}

                                    ref={rate_in}
                                    returnKeyType={'next'}
                                    onSubmitEditing={()=>addButton.current.focus()}

                                 />
                            </View>
                        </view>
                        
                        <view style={{flex:0.3,marginHorizontal:10,alignSelf:'center'}}>
                            <View style={{flex:1,height:'100%'}}>
                                <Text style={{paddingHorizontal:5,fontWeight:'500',fontSize:20,paddingVertical:5,backgroundColor:'#f7f6f2',borderWidth:0.1,borderColor:'#DCDCDC'}}>{showTotal()}</Text>
                            </View>
                        </view>
                        <TouchableOpacity ref={addButton} style={{flex:0.1,backgroundColor:'orange',alignSelf:'center',margin:5}}
                            onPress={()=>{
                                if(checkSubBillFields()){
                                    if(lorryNo!=null){

                                    
                                    dispatch(addSmallBill({smallBill:{bags:parseInt(bags),quintal:parseFloat(quintal),kg:parseFloat(kg),rate:parseFloat(rate),total:findSubBillTotal(quintal,kg,rate)},lorryNo:lorryNo}));
                                   
                                    }else{
                                        alert("Enter lorry number and try again!")
                                    }

                                }else{
                                    alert("All fields must be filled!\n Fill all the fields and try again.");
                                    
                                }
                                                            }}
                        >
                            <Text style={{fontSize:20,fontWeight:'500',paddingHorizontal:5,paddingVertical:5,color:'white',alignSelf:'center',paddingVertical:5}}>Add</Text>
                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        );
}