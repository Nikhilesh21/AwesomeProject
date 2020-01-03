import * as React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image,Picker } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
//import Button from './Button';
import { TextInput } from 'react-native-gesture-handler';
export default class Register extends React.Component {
  
  render() {
    return (
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
     
    )
  }
}