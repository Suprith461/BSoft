import React,{useState} from 'react'
import {Text,View,TouchableOpacity,TextInput,ScrollView} from 'react-native'

export default function CreateBillFinal({navigation}){
    navigation.setOptions({title:"Summary of the bill"})
    const [gst,setGst] = useState(null);
    const [suttuli,setSuttuli] = useState(null);
    const [purchaseCommission,setPurchaseCommission] = useState(null)
    const [gunnyBags,setGunnyBags] = useState(null);
    const [loadingHamali,setLoadingHamali] = useState(null);
    const [hamali,setHamali] = useState(null);
    const [postage,setPostage] = useState(null)
    return(
    <View style={{flex:1}}>
        <ScrollView style={{flex:1}}>
            <View style={{height:200,margin:15,backgroundColor:'white'}}>
                <View style={{flex:0.33,flexDirection:'row'}}>
                    <TextInput
                        placeholder="Enter GST in Rs"
                        value={gst}
                        onChangeText={setGst}
                        autoCompleteType="cc-exp"
                        style={{backgroundColor:'#f7f6f2',flex:0.33,paddingHorizontal:20,margin:5,fontSize:20}}/>

                    <TextInput
                        placeholder="Enter Suttuli"
                        value={suttuli}
                        onChangeText={setSuttuli}
                        autoCompleteType="cc-exp"
                        style={{backgroundColor:'#f7f6f2',flex:0.33,paddingHorizontal:20,margin:5,fontSize:20}}/>

                    <TextInput
                        placeholder="Gunny Bag Fees"
                        value={gunnyBags}
                        onChangeText={setGunnyBags}
                        autoCompleteType="cc-exp"
                        style={{backgroundColor:'#f7f6f2',flex:0.33,paddingHorizontal:20,margin:5,fontSize:20}}/>
                </View>
                
                <View style={{flex:0.33,flexDirection:'row'}}>
                    <TextInput
                        placeholder="Loading Hamali"
                        value={loadingHamali}
                        onChangeText={setLoadingHamali}
                        autoCompleteType="cc-exp"
                        style={{backgroundColor:'#f7f6f2',flex:0.33,paddingHorizontal:20,margin:5,fontSize:20}}/>

                    <TextInput
                        placeholder="Hamali"
                        value={hamali}
                        onChangeText={setHamali}
                        autoCompleteType="cc-exp"
                        style={{backgroundColor:'#f7f6f2',flex:0.33,paddingHorizontal:20,margin:5,fontSize:20}}/>

                    <TextInput
                        placeholder="Purchase commission"
                        value={purchaseCommission}
                        onChangeText={setPurchaseCommission}
                        autoCompleteType="cc-exp"
                        style={{backgroundColor:'#f7f6f2',flex:0.33,paddingHorizontal:20,margin:5,fontSize:20}}/>
                </View>
                
                <View style={{flex:0.33,flexDirection:'row'}}>
                    <TextInput
                        placeholder="Postage"
                        value={postage}
                        onChangeText={setPostage}
                        autoCompleteType="cc-exp"
                        style={{backgroundColor:'#f7f6f2',paddingHorizontal:20,margin:5,flex:1,fontSize:20}}/>

                
                </View>
                

            </View>

            <View style={{height:800,margin:50,backgroundColor:'white'}}>
                <View style={{height:60,borderWidth:0.1,borderColor:'black',flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <View style={{flex:1,borderRightWidth:0.1,borderColor:'black'}}>
                            <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>Dallal Commission</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>550000000000</Text>
                    </View>
                </View>

                <View style={{height:60,borderWidth:0.1,borderColor:'black',flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <View style={{flex:1,borderRightWidth:0.1,borderColor:'black'}}>
                            <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>Sess</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>2000</Text>
                    </View>
                </View>

                <View style={{height:60,borderWidth:0.1,borderColor:'black',flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <View style={{flex:1,borderRightWidth:0.1,borderColor:'black'}}>
                            <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>Hamali</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>30000</Text>
                    </View>
                </View>

                <View style={{height:60,borderWidth:0.1,borderColor:'black',flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <View style={{flex:1,borderRightWidth:0.1,borderColor:'black'}}>
                            <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>Weighman</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>1500</Text>
                    </View>
                </View>


                <View style={{height:60,borderWidth:0.1,borderColor:'black',flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <View style={{flex:1,borderRightWidth:0.1,borderColor:'black'}}>
                            <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>Total</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>550000000000</Text>
                    </View>
                </View>

                <View style={{height:60,borderWidth:0.1,borderColor:'black',flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <View style={{flex:1,borderRightWidth:0.1,borderColor:'black'}}>
                            <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>GST</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>0</Text>
                    </View>
                </View>


                <View style={{height:60,borderWidth:0.1,borderColor:'black',flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <View style={{flex:1,borderRightWidth:0.1,borderColor:'black'}}>
                            <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>Gunny Bags</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>2800</Text>
                    </View>
                </View>


                <View style={{height:60,borderWidth:0.1,borderColor:'black',flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <View style={{flex:1,borderRightWidth:0.1,borderColor:'black'}}>
                            <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>Hamali</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>1800</Text>
                    </View>
                </View>


                <View style={{height:60,borderWidth:0.1,borderColor:'black',flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <View style={{flex:1,borderRightWidth:0.1,borderColor:'black'}}>
                            <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>Cartage</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>550</Text>
                    </View>
                </View>


                <View style={{height:60,borderWidth:0.1,borderColor:'black',flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <View style={{flex:1,borderRightWidth:0.1,borderColor:'black'}}>
                            <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>Suttuli</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>2700</Text>
                    </View>
                </View>

                <View style={{height:60,borderWidth:0.1,borderColor:'black',flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <View style={{flex:1,borderRightWidth:0.1,borderColor:'black'}}>
                            <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>Loading Hamali</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>7500</Text>
                    </View>
                </View>

                <View style={{height:60,borderWidth:0.1,borderColor:'black',flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <View style={{flex:1,borderRightWidth:0.1,borderColor:'black'}}>
                            <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>Purchase commission</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>2400</Text>
                    </View>
                </View>

                <View style={{height:60,borderWidth:0.1,borderColor:'black',flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <View style={{flex:1,borderRightWidth:0.1,borderColor:'black'}}>
                            <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>Postage</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>24.55</Text>
                    </View>
                </View>

                <View style={{height:60,borderWidth:0.1,borderColor:'black',flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <View style={{flex:1,borderRightWidth:0.1,borderColor:'black'}}>
                            <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>Total</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>550000000000</Text>
                    </View>
                </View>

                

            </View>

        </ScrollView>

    </View>);
}