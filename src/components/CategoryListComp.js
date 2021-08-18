import React,{useState} from 'react';
import {Text,View,TouchableOpacity,FlatList,Dimensions} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Modal from 'modal-react-native-web';


/*Function which will return a list element containing a main category and a sub category */
export default function CategoryListComp({data,subCat1,selectedItem,setItem,callback}){
    const {width,height} = Dimensions.get("screen")
    const [clicked,setClicked]=useState(false);
    var subFlatHeight;
   
    if(data!=undefined){
        subFlatHeight=data.length*59;
       
    }else{
        subFlatHeight=59;
    }
    

    
    

    if(selectedItem===null){
        setItem(subCat1);
    }
    
    

    /*Handles the click event of a categorical item */
    function handleClick(){
       
                if(callback!=undefined && (data!=null || data!=undefined)){
                    callback();
                }
                if(clicked===true){
                    setClicked(false);
                }
                else if(clicked===false){
                    setClicked(true);
                }
                
                   
        
    }

   
     /*Function which will return a sub category element  takes in sub category name*/   
    function SubCatElement({subCat,showAs}){
           
            return(
            
            <TouchableOpacity  style={{height:40,borderBottomWidth:0.4,borderColor:'#DCDCDC',paddingVertical:10,backgroundColor:"white"}} onPress={()=>{setItem(subCat);handleClick()}}>
                <Text style={{marginLeft:30,color:'black'}}>{showAs}</Text>
            </TouchableOpacity>);
        }

    
    
    return(
        <View>
            
            {/*Main category showing element which will handle click and displays subcategories based on the click */}
            <TouchableOpacity onPress={handleClick}>
            <View style={{flexDirection:'row',borderRadius:5,paddingVertical:4,backgroundColor:'#f7f6f2',marginHorizontal:25,marginVertical:4}}>
                <Text style={{fontSize:18,marginLeft:18,flex:0.9}}>{selectedItem}</Text>
                
                {/*View which will show upa and down arrow accordingly */}
                {clicked?<MaterialCommunityIcons name="arrow-up-drop-circle-outline" size={30} color="orange"  style={{marginLeft:50}}/>
                :<MaterialCommunityIcons name="arrow-down-drop-circle-outline" size={30} color="orange"  style={{marginLeft:50}}/>}
                
            </View>
            </TouchableOpacity>

            

            {/*clicked?<View style={{height:300,borderWidth:0.1,borderColor:"#DCDCDC",marginBottom:10}}>

                <FlatList
                    data={data}
                    showsVerticalScrollIndicator 
                    renderItem={({item})=>{        
                        return(<SubCatElement subCat={item.subCategory} showAs={item.showAs}/>);}}
                    keyExtractor={(item) => item.id}
            
            />

            </View>:null*/}
            
            <Modal
                animationType="none"
                transparent={true}
                visible={clicked}
              >  
          <View style={{flex:1,backgroundColor:"#DCDCDC50",alignItems:"center"}}>
            <TouchableOpacity style={{flex:0.1,width:width}} onPress={()=>{setClicked(false)}}></TouchableOpacity>
            <View style={{flex:0.8,width:width,flexDirection:"row"}}>
                <TouchableOpacity style={{flex:0.2}} onPress={()=>{setClicked(false)}} ></TouchableOpacity>
                {/*All the commodities */}
                <View style={{backgroundColor:"white",flex:0.6}}>

                <FlatList
                    data={data}
                    showsVerticalScrollIndicator 
                    renderItem={({item})=>{        
                        return(<SubCatElement subCat={item.subCategory} showAs={item.showAs}/>);}}
                    keyExtractor={(item) => item.id}
            
                />


                </View>
                
                <TouchableOpacity style={{flex:0.2}} onPress={()=>{setClicked(false)}}></TouchableOpacity>
            </View>
            <TouchableOpacity style={{flex:0.1,width:width}}  onPress={()=>{setClicked(false)}}></TouchableOpacity>
            
          </View>
        </Modal>
           

    </View>

    );
}