import React from 'react'
import {StyleSheet,View,Text,TextInput,Image} from 'react-native'
export default  class InputTextField extends React.Component {
    render()
    {
        return  (
            
            <View style={{height:130,marginTop:20,marginLeft:20,borderWidth:0.5,borderColor:'#dddddd'}}>
            <View style={{flex:2}} >
                <Image source={this.props.imageuri} style={{flex:1,width:null,height:null,resizeMode:'cover'}}
                />
                </View>
                <View style={{flex:1,paddingTop:10,paddingLeft:10}} >
                <Text >{this.props.name}

            </Text>
                </View>
                </View>
        )
    }
}
