
import * as React from 'react';
import { StyleSheet, Text, View,TouchableHighlight,Image,Linking} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import Button from './Button';
import { TextInput } from 'react-native-gesture-handler';
//import Login from './Login';
//import Login from './Login';
//import Register from './Register';

export default class DetailsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      
    };
  }
  
  ShowHideComponent = () => {
    if (this.state.show == true) {
      this.setState({ show: false });
    } else {
      this.setState({ show: true });
    }
  };
  render() {
    return (
      <View style={{flex:1,backgroundColor:"lightgrey"}}>
        <View>
       <Image source={require("./images/logo1.jpg")} style={{
          width: 90, height: 80, alignSelf: "center", marginTop: 10,
          borderRadius: 12,
        }} />
      <View style={{flex:1,flexDirection:'row'}}>

        <TouchableHighlight onPress={this.ShowHideComponent} style={{marginTop:20, marginLeft: 0, width:200, height: 50,borderRadius:10 }}>
                <View 
                style={{ flex:1,flexDirection:'row', backgroundColor:'transparent',
                borderColor:'#33ccff',borderBottomWidth:5,borderTopWidth:0, width: 200, height: 40,borderRightWidth:1,borderLeftWidth:1,
                borderRadius:0,alignContent:'center' }}>
                  <Text 
                  style={{fontFamily:'sans-serif',fontSize:16,marginTop:8,color: '#33ccff',
                  marginLeft:35}}>Login </Text></View>
                
              </TouchableHighlight>
              <TouchableHighlight onPress={this.ShowHideComponent} style={{marginTop:20, marginLeft: 0, width:200, height: 50,borderRadius:10 }}>
                <View 
                style={{ flex:1,flexDirection:'row', backgroundColor:'transparent',
                borderColor:'#33ccff',borderBottomWidth:5,borderTopWidth:0, width: 200, height: 40,borderRightWidth:1,borderLeftWidth:1,
                borderRadius:0,alignContent:'center' }}>
                  <Text 
                  style={{fontFamily:'sans-serif',fontSize:16,marginTop:8,color: '#33ccff',
                  marginLeft:35}}>Registration</Text></View>
                
              </TouchableHighlight>
              </View>
              </View>
              <View style={{padding: 10,marginTop:80}}> 
              
       
              {this.state.show ? (
      <View style={{ marginLeft: 0,marginTop:0,alignItems:'center' }}>
      <TextInput
     style={{ height: 35, textAlign: "left", width: 300, backgroundColor: 'white', marginTop: 50, fontSize:12, borderRadius: 40 / 4 }}
     placeholder="Name"
     onChangeText={(text) => this.setState({ text })}
 />
 <TextInput
     style={{ height: 35, textAlign: "left", width: 300, backgroundColor: 'white', marginTop: 20, fontSize: 12, borderRadius: 40 / 4 }}
     placeholder="Email" 
     onChangeText={(text) => this.setState({ text })}
 />
 <TextInput
     style={{ height: 35, textAlign: "left", width: 300, backgroundColor: 'white', marginTop: 20, fontSize: 12, borderRadius: 40 / 4 }}
     placeholder="Passsword" secureTextEntry={true}
     onChangeText={(text) => this.setState({ text })}
 />
 <TextInput
     style={{ height: 35, textAlign: "left", width: 300, backgroundColor: 'white', marginTop: 20, fontSize: 12, borderRadius: 40 / 4 }}
     placeholder="ConfirmPasssword" secureTextEntry={true}
     onChangeText={(text) => this.setState({ text })}
 />
 <TextInput
     style={{ height: 35, textAlign: "left", width: 300, backgroundColor: 'white', marginTop: 20, fontSize: 12, borderRadius: 40 / 4 }}
     placeholder="Phone" keyboardType={'phone-pad'}
     onChangeText={(text) => this.setState({ text })}
 />
 
 

 <TouchableHighlight onPress={() => this.props.navigation.navigate('third')} style={{ marginTop: 20, marginLeft: 10, width: 260, height: 50, alignSelf: "center", borderRadius: 10 }}>
     <View
         style={{
             flex: 1, flexDirection: 'row', backgroundColor: 'transparent',
             borderColor: '#33ccff', borderWidth: 1, width: 250, height: 40, alignSelf: "center",
             borderRadius: 10, alignContent: 'center'
         }}>
         <Text
             style={{
                 fontFamily: 'sans-serif', fontSize: 20, marginTop: 8, color: '#33ccff',
                 marginLeft: 60,textAlign:'center',marginLeft:100
             }}>Sign In </Text></View>

 </TouchableHighlight>
 
 </View>
        ) : 
               
   <View style={{ marginLeft: 0,marginTop:0,alignItems:'center' }}>
   <Image source={require("./images/prof.jpg")} style={{ width: 70, height: 70, borderRadius: 150 / 2, marginLeft: 20, marginTop: 0 }} />
      
               <Text style={{ fontSize: 25, marginLeft: 30, fontFamily: "fantasy" }}>Hello again,</Text>
              
         
           
   
   
       <TextInput
           style={{ height: 40, textAlign: "left", width: 300, backgroundColor: 'white', marginTop: 50, fontSize: 20, borderRadius: 40 / 4 }}
           placeholder="Email"
           onChangeText={(text) => this.setState({ text })}
       />
       <TextInput
           style={{ height: 40, textAlign: "left", width: 300, backgroundColor: 'white', marginTop: 20, fontSize: 20, borderRadius: 40 / 4 }}
           placeholder="Passsword" secureTextEntry={true}
           onChangeText={(text) => this.setState({ text })}
       />
   
       <TouchableHighlight onPress={() => this.props.navigation.navigate('third')} style={{ marginTop: 20, marginLeft: 10, width: 260, height: 50, alignSelf: "center", borderRadius: 10 }}>
           <View
               style={{
                   flex: 1, flexDirection: 'row', backgroundColor: 'transparent',
                   borderColor: '#33ccff', borderWidth: 1, width: 250, height: 40, alignSelf: "center",
                   borderRadius: 10, alignContent: 'center'
               }}>
               <Text
                   style={{
                       fontFamily: 'sans-serif', fontSize: 20, marginTop: 8, color: '#33ccff',
                       marginLeft: 60,textAlign:'center',marginLeft:100
                   }}>Login </Text></View>
   
       </TouchableHighlight>
       <View style={{ marginTop: 20, backgroundColor: "lightgrey", bottom: 0, width: 390, height: 100 }}>
   
   <View style={{ flex: 1, flexDirection: "row" }}>
       <TouchableHighlight onPress={() => { Linking.openURL('https://facebook.com') }} style={{ width: 30, height: 30, borderRadius: 150 / 2, marginLeft: 90, marginTop: 20 }}>
           <Image style={{ width: 40, height: 40, borderRadius: 20 / 2 }}
   
               source={require('./images/fb.png')}
           />
       </TouchableHighlight>
       <TouchableHighlight onPress={() => { Linking.openURL('https://google.com') }} style={{ width: 30, height: 30, marginLeft: 30, marginTop: 20, borderRadius: 150 / 2 }}>
           <Image source={require("./images/google.png")} style={{ width: 40, height: 40, borderRadius: 100 / 2 }} />
   
       </TouchableHighlight>
   
       <TouchableHighlight style={{ width: 30, height: 30, marginLeft: 30, marginTop: 20, borderRadius: 150 / 2 }} onPress={() => { Linking.openURL('https://twitter.com') }}>
           <Image source={require("./images/twit.png")} style={{ width: 40, height: 40, borderRadius: 20 / 2 }} />
       </TouchableHighlight>
   
   
   </View>
   </View>
       </View>
        }
        
        </View> 
        </View>
    );
  }
}
