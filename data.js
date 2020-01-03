import * as React from 'react';
import { StyleSheet, Text, View,TouchableHighlight,Image} from 'react-native';

const Data = (rowData) => {
    console.log('item',typeof rowData);
    return (
        <View style={{height:40, flexDirection:'column'}}>
            <Text style={{color:'black',height:40, width:null}}>{rowData.name}</Text>
        </View>
    );
}

export default Data;