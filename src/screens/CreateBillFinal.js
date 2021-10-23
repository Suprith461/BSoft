import React,{useState,useEffect} from 'react'
import {Text,View,TouchableOpacity,TextInput,ScrollView,Dimensions,ActivityIndicator} from 'react-native'
import moment from 'moment';
import firebase from 'firebase/app';
import 'firebase/firestore';
import Modal from 'modal-react-native-web';
//import XLSX from 'xlsx'
import PdfBill from './PdfBill';



export default function CreateBillFinal({navigation,route}){
    const db= firebase.firestore()
    navigation.setOptions({title:"Summary of the bill",

    headerRight: () => (
        <TouchableOpacity style={{backgroundColor:"orange",margin:5}} onPress={()=>{confirmBillCreation()}}>
            <Text style={{color:'white',fontWeight:'500',fontSize:22,paddingVertical:5,paddingHorizontal:15}}>Download Bill</Text>
        </TouchableOpacity>
      ),
})
    const {width,height} = Dimensions.get("screen")
    //const {doc,partieName,commodity} = route.params
    //console.log("Passed params",route.params)
    const [gstPercent,setGstPercent] = useState(null);
    const [suttuli,setSuttuli] = useState(null);
    const [purchaseCommission,setPurchaseCommission] = useState(null)
    const [gunnyBags,setGunnyBags] = useState(null);
    const [loadingHamali,setLoadingHamali] = useState(null);
    const [hamali,setHamali] = useState(null);
    const [postage,setPostage] = useState(null);
    const [cartage,setCartage] = useState(null);

    


    const [fetchingDoc,setFetchingDoc]=useState(false)
    const [doc,setDoc]=useState(null)

    const [commodityDoc,setCommodityDoc] = useState(null);

    //All hooks related to dallal
    const [dallalCommission,setDallalCommission] = useState(0);
    const [sess,setSess] =useState(0);
    const [dHamali,setDHamali] = useState(0);
    const [weighMan,setWeighMan] = useState(0);
    const [dTotal,setDTotal] = useState(0);

    const [gstInInr,setGstInr] = useState(0)
    const [grandTotal,setGrandTotal]=useState(0);
    const [totalPurchase,setTotalPurchase] = useState(0);
    const [totalBags,setTotalBags] = useState(0);

    const [updatingData,setUpdatingData] = useState(false);
    const [partieName,setPartieName]=useState(null);
    const [partiePlace,setPartiePlace]=useState(null);
    const [pCommissionPercent,setPCommissionPercent]=useState(null);

  

    const updatedData={
        totalPurchase:totalPurchase,
        totalBags:totalBags,
        dallalCommission:dallalCommission,
        sess:sess,
        dHamali:dHamali,
        weighMan:weighMan,
        dTotal:dTotal,
        gstInr:gstInInr,
        grandTotal:grandTotal
    }

    
    
    //function to create a footer
    function createFooter(){
        //console.log("Create Footer");
        if(doc!=null){
            const foot=[]
            const temp = doc.totalPurchase
            foot.push(temp.tBags)
            foot.push(temp.tQuintals)
            foot.push(temp.tkg)
            foot.push("Total")
            foot.push(parseFloat(temp.totalAmount).toFixed(2))
            foot.push("Grand Total")
            foot.push(grandTotal)
            return foot
        }
    }

    //function to create a body
    function createBody(){
        //console.log("Create Body");
        const fColumn = ["","D.Commission","Sess","Hamali","Weighman","Total","GST","Gunny Bags","Hamali","Cartage","Suttuli","Loading Hamali","Purchase commission","Postage","TOTAL"]
        const gColumn = [totalPurchase,dallalCommission,sess,dHamali,weighMan,dTotal,parseFloat(gstInInr).toFixed(2),gunnyBags,hamali,cartage,suttuli,loadingHamali,purchaseCommission,postage,grandTotal]
        if(doc!=null){
            const body=[]
            const smallBills = doc.smallBills;

            if(smallBills.length>=14){
                var count = 0
                smallBills.forEach((bill)=>{
                   
                    
                    
                    if(count<=14){
                        var temp = []
                        temp.push(bill.bags+'')
                        temp.push(bill.quintal+'')
                        temp.push(bill.kg+'')
                        temp.push(bill.rate+'')
                        temp.push(bill.total+'')
                        console.log("Fcolumn starting")
                        temp.push(fColumn[count]+'')
                        temp.push(gColumn[count]+'')
                        body.push(temp)
                        count+=1
                    }else{
                        var temp4=[]
                        temp4.push(bill.bags+'')
                        temp4.push(bill.quintal+'')
                        temp4.push(bill.kg+'')
                        temp4.push(bill.rate+'')
                        temp4.push(bill.total+'')
                        body.push(temp4)
                        count+=1
                    }
                    
                })  
            }else if(smallBills.length<14){
               
                var count2=0
                while(count2!=smallBills.length){
                    smallBills.forEach((bill)=>{
                        var temp2=[]
                        temp2.push(bill.bags+'')
                        temp2.push(bill.quintal+'')
                        temp2.push(bill.kg+'')
                        temp2.push(bill.rate+'')
                        temp2.push(bill.total+'')
                        //console.log("Fcolumn starting")
                        temp2.push(fColumn[count2]+'')
                        temp2.push(gColumn[count2]+'')
                        body.push(temp2)
                        count2+=1;
                       
                    })
                }
                
                while(count2!=14){
                    var temp3=[]
                    temp3.push('')
                    temp3.push('')
                    temp3.push('')
                    temp3.push('')
                    temp3.push('')
                    //console.log("Fcolumn starting")
                    temp3.push(fColumn[count2]+'')
                    temp3.push(gColumn[count2]+'')
                    body.push(temp3)
                    count2+=1;
                       
                }

            }
           
            return body
        }

    }

    const dateToday = moment(Date()).format('DD-MM-YYYY')
    const {lorryNo} = route.params; 
    const docName= lorryNo+dateToday

    //setting up PurchaseCommission automatically
    useEffect(()=>{
        if(pCommissionPercent!=null && totalPurchase!=null){
            setPurchaseCommission(((parseFloat(pCommissionPercent)/100)*totalPurchase).toFixed(2))
        }
    },[navigation,pCommissionPercent])


    useEffect(()=>{

        //PdfBill()
        
        if(lorryNo!=null){
           
            setFetchingDoc(true)
            db.collection('bills').doc(docName).get().then((doc)=>{
                //setFetchingDoc(false)
                //console.log(doc.data())
                setDoc(doc.data());
                setPartieName(doc.data().partieName)

                //Fetch partie information first
                db.collection('parties').doc(doc.data().partieName).get().then((partie)=>{
                    
                    setPartiePlace(partie.data().partiePlace);
                    setPCommissionPercent(partie.data().pCommission)


                    //Fetching commodity data
                    db.collection('commodities').doc(doc.data().commodity).get().then((commodityData)=>{
                        setFetchingDoc(false);
                        setCommodityDoc(commodityData.data())
                        
                    }).catch((error)=>{
                        setFetchingDoc(false);
                        alert(error.message)
                    })
                   
                }).catch((error)=>{
                    setFetchingDoc(false)
                    alert(error.message)
                })

                }).catch((error)=>{
                    setFetchingDoc(false)
                    alert(error.message)
                })

                
                
        }
    },[navigation])

    function confirmBillCreation(){
        if(gstPercent!=null && suttuli!=null && gunnyBags!=null && loadingHamali!=null && hamali!=null && purchaseCommission!=null && postage!=null && cartage!=null){
            setUpdatingData(true)
            const body=createBody();
            const footer=createFooter()
            db.collection('bills').doc(docName).update({finalBill:updatedData}).then(()=>{
                setUpdatingData(false);
                
                PdfBill(body,footer,partieName,lorryNo,partiePlace)

            }).catch((error)=>{
                setUpdatingData(false)
                //console.log("alert during updating the bill",error)
                console.log(error)
                alert(error.message)
            })
        }else{

            alert('All fields are not filled! Please fill all the fields, if there is no data then fill the field with 0')
        }
    }


    useEffect(()=>{
        if(doc!=null && commodityDoc!=null){
            setTotalPurchase(parseFloat(doc.totalPurchase.totalAmount).toFixed(2));
            setTotalBags(parseFloat(doc.totalPurchase.tBags).toFixed(2))
            setDallalCommission((parseFloat(doc.totalPurchase.totalAmount)*(parseFloat(commodityDoc.dCommission)/100)).toFixed(2));
            setSess((parseFloat(doc.totalPurchase.totalAmount)*(parseFloat(commodityDoc.sess)/100)).toFixed(2))
            setDHamali(parseFloat(doc.totalPurchase.tBags)*parseFloat(commodityDoc.hamali))
            setWeighMan(parseFloat(doc.totalPurchase.tBags)*parseFloat(commodityDoc.weighmanFee))
            setDTotal((parseFloat(doc.totalPurchase.totalAmount)*(parseFloat(commodityDoc.dCommission)/100)+(parseFloat(doc.totalPurchase.totalAmount)*(parseFloat(commodityDoc.sess)))+parseFloat(doc.totalPurchase.tBags)*parseFloat(commodityDoc.hamali)+parseFloat(doc.totalPurchase.tBags)*parseFloat(commodityDoc.weighmanFee)+parseFloat(doc.totalPurchase.totalAmount)).toFixed(2))
        }
    },[doc,commodityDoc])

    useEffect(()=>{
        if(dTotal!=null){
            setGstInr(((parseFloat(gstPercent)/100)*dTotal).toFixed(2))
        }
    },[gstPercent])


    useEffect(()=>{
        //console.log("Hey",gstPercent,suttuli,gunnyBags,loadingHamali,hamali,purchaseCommission,postage,cartage)
        if(gstPercent!=null && suttuli!=null && gunnyBags!=null && loadingHamali!=null && hamali!=null && purchaseCommission!=null && postage!=null && cartage!=null){
            //console.log("Inside if loop",grandTotal)
            //setGrandTotal((dTotal+gstInInr+suttuli+gunnyBags+loadingHamali+hamali+purchaseCommission+postage+cartage).toFixed(2))
            const subTotal =parseFloat(gstInInr)+ parseFloat(dTotal)+parseFloat(suttuli)+parseFloat(gunnyBags)+parseFloat(loadingHamali)+parseFloat(hamali)+parseFloat(purchaseCommission)+parseFloat(postage)+parseFloat(cartage)+parseFloat(doc.totalPurchase.totalAmount)
            setGrandTotal(subTotal.toFixed(2))
        
        }

    },[gstPercent,suttuli,gunnyBags,loadingHamali,hamali,purchaseCommission,postage,cartage])

    //console.log((doc!=null && commodityDoc!=null)?parseFloat(doc.totalPurchase)*(parseFloat(commodityDoc.dCommission)/100):0)
    return(
    <View style={{flex:1}}>
        <ScrollView style={{flex:1}}>
            <View style={{height:200,margin:15,backgroundColor:'white'}}>
                <View style={{flex:0.33,flexDirection:'row'}}>
                    <TextInput
                        placeholder="Enter GST in %"
                        value={gstPercent}
                        onChangeText={setGstPercent}
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
                        style={{backgroundColor:'#f7f6f2',paddingHorizontal:20,margin:5,flex:0.5,fontSize:20}}/>

                    <TextInput
                        placeholder="Cartage"
                        value={cartage}
                        onChangeText={setCartage}
                        autoCompleteType="cc-exp"
                        style={{backgroundColor:'#f7f6f2',paddingHorizontal:20,margin:5,flex:0.5,fontSize:20}}/>

                
                </View>
                

            </View>

            <View style={{height:1000,margin:50,backgroundColor:'white'}}>
               
                <View style={{height:60,borderWidth:0.1,borderColor:'black',flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <View style={{flex:1,borderRightWidth:0.1,borderColor:'black'}}>
                            <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>Total Purchase</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>{totalPurchase}</Text>
                    </View>
                </View>
               
                <View style={{height:60,borderWidth:0.1,borderColor:'black',flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <View style={{flex:1,borderRightWidth:0.1,borderColor:'black'}}>
                            <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>Total Bags</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>{totalBags}</Text>
                    </View>
                </View>
               
               
                <View style={{height:60,borderWidth:0.1,borderColor:'black',flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <View style={{flex:1,borderRightWidth:0.1,borderColor:'black'}}>
                            <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>Dallal Commission</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>{parseFloat(dallalCommission).toFixed(2)}</Text>
                    </View>
                </View>

                <View style={{height:60,borderWidth:0.1,borderColor:'black',flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <View style={{flex:1,borderRightWidth:0.1,borderColor:'black'}}>
                            <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>Sess</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>{parseFloat(sess).toFixed(2)}</Text>
                    </View>
                </View>

                <View style={{height:60,borderWidth:0.1,borderColor:'black',flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <View style={{flex:1,borderRightWidth:0.1,borderColor:'black'}}>
                            <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>Hamali</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>{parseFloat(dHamali).toFixed(2)}</Text>
                    </View>
                </View>

                <View style={{height:60,borderWidth:0.1,borderColor:'black',flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <View style={{flex:1,borderRightWidth:0.1,borderColor:'black'}}>
                            <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>Weighman</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>{parseFloat(weighMan).toFixed(2)}</Text>
                    </View>
                </View>


                <View style={{height:60,borderWidth:0.1,borderColor:'black',flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <View style={{flex:1,borderRightWidth:0.1,borderColor:'black'}}>
                            <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>Total</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>{parseFloat(dTotal).toFixed(2)}</Text>
                    </View>
                </View>

                <View style={{height:60,borderWidth:0.1,borderColor:'black',flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <View style={{flex:1,borderRightWidth:0.1,borderColor:'black'}}>
                            <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>GST</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>{(gstInInr!=0)?parseFloat(gstInInr).toFixed(2):0}</Text>
                    </View>
                </View>


                <View style={{height:60,borderWidth:0.1,borderColor:'black',flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <View style={{flex:1,borderRightWidth:0.1,borderColor:'black'}}>
                            <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>Gunny Bags</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>{(gunnyBags!=null)?parseFloat(gunnyBags).toFixed(2):0}</Text>
                    </View>
                </View>


                <View style={{height:60,borderWidth:0.1,borderColor:'black',flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <View style={{flex:1,borderRightWidth:0.1,borderColor:'black'}}>
                            <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>Hamali</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>{(hamali!=null)?parseFloat(hamali).toFixed(2):0}</Text>
                    </View>
                </View>


                <View style={{height:60,borderWidth:0.1,borderColor:'black',flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <View style={{flex:1,borderRightWidth:0.1,borderColor:'black'}}>
                            <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>Cartage</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>{(cartage!=null)?parseFloat(cartage).toFixed(2):0}</Text>
                    </View>
                </View>


                <View style={{height:60,borderWidth:0.1,borderColor:'black',flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <View style={{flex:1,borderRightWidth:0.1,borderColor:'black'}}>
                            <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>Suttuli</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>{(suttuli!=null)?parseFloat(suttuli).toFixed(2):0}</Text>
                    </View>
                </View>

                <View style={{height:60,borderWidth:0.1,borderColor:'black',flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <View style={{flex:1,borderRightWidth:0.1,borderColor:'black'}}>
                            <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>Loading Hamali</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>{(loadingHamali!=null)?parseFloat(loadingHamali).toFixed(2):0}</Text>
                    </View>
                </View>

                <View style={{height:60,borderWidth:0.1,borderColor:'black',flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <View style={{flex:1,borderRightWidth:0.1,borderColor:'black'}}>
                            <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>Purchase commission</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>{(purchaseCommission!=null)?parseFloat(purchaseCommission).toFixed(2):0}</Text>
                    </View>
                </View>

                <View style={{height:60,borderWidth:0.1,borderColor:'black',flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <View style={{flex:1,borderRightWidth:0.1,borderColor:'black'}}>
                            <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>Postage</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>{(postage!= null)?parseFloat(postage).toFixed(2):0}</Text>
                    </View>
                </View>

                <View style={{height:60,borderWidth:0.1,borderColor:'black',flexDirection:'row'}}>
                    <View style={{flex:0.5}}>
                        <View style={{flex:1,borderRightWidth:0.1,borderColor:'black'}}>
                            <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>Total</Text>
                        </View>
                    </View>
                    <View style={{flex:0.5}}>
                        <Text style={{alignSelf:'center',fontWeight:'500',fontSize:20,paddingVertical:10}}>{(grandTotal!=0)?parseFloat(grandTotal).toFixed(2):0}</Text>
                    </View>
                </View>

                

            </View>

        </ScrollView>
        <Modal
            animationType="none"
            transparent={true}
            visible={fetchingDoc || updatingData}
              >  
          <View style={{flex:1,backgroundColor:"#DCDCDC50",alignItems:"center"}}>
                <View style={{flex:0.1}}></View>
            <View style={{flex:0.8,width:width,flexDirection:"row"}}>
                <View style={{flex:0.2}}></View>
                {/*All the commodities */}
                <View style={{backgroundColor:"white",flex:0.6}}>

                <ActivityIndicator style={{alignSelf:'center' ,flex:0.6}} size={100} color='orange'/>

                <Text style={{fontSize:20,color:'#DCDCDC' ,fontWeight:'bold',alignSelf:'center'}}> {"Fetching commodities...."}</Text>

                </View>
                <View style={{flex:0.2}}></View>
                
                
            </View>
            
            
          </View>
        </Modal>

    </View>);
}