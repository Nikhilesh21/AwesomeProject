import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View style={{
        flex: 1,
        backgroundColor: 'white',marginTop:590,width:360,height:30,alignContent:'center'
      }}>
        <Button  title="Get Started"  onPress={()=>this.props.navigation.navigate('Details')}/>
      </View>
    );
  }}