import * as React from 'react';
import { StyleSheet, Text, View, TouchableHighlight, Image } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
//import Button from './Button';
import { TextInput } from 'react-native-gesture-handler';
export default class Login extends React.Component {
    
    render() {
        return (
            
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
        );
    }
}
