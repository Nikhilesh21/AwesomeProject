
import React, { Component } from 'react';
import { StyleSheet, Text, View   } from 'react-native';
import NetInfo from '@react-native-community/netinfo'


export default class Net extends Component {

constructor() {
  super();
  this.state = {
    connection_Status: ""
  }
}

componentDidMount() {
  NetInfo.addEventListener('connectionChange', this.handleConnectivityChange);

  NetInfo.fetch().then((isConnected) => {
   
    this.setState({ connection_Status: 'Then, is ' + (isConnected ? 'online' : 'offline') })
 
  });
}

componentWillUnmount() {
  NetInfo.removeEventListener('connectionChange', this.handleConnectivityChange);
}

handleConnectivityChange = (isConnected) => {
  
    this.setState({ connection_Status: 'Then, is ' + (isConnected ? 'online' : 'offline') })
 
};

render() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}> Device Current Status :  </Text>
      <Text style={styles.text}> You are {this.state.connection_Status} </Text> 
    </View>
  );
}
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
},
text: {
  fontSize: 18,
  color: 'black',
},
});