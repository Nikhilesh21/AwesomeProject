import * as React from 'react';
import { StyleSheet, Text, View,TouchableHighlight,Image,Button} from 'react-native';

import ImagePicker from 'react-native-image-picker';

export default class Ts extends React.Component {
  state = {
    photo: null,
  };

  handleChoosePhoto = async() => {
    
    ImagePicker.showImagePicker({noData:true,mediaType:'photo'}, (response) => {
      console.log('Response=',response);

      if (response.didCancel) {
        console.log('User Cancelled image picker');
      }
      else if(response.error){
        console.log(' image picker',response.error);
        
      }
      else if(response.customButton)
      {
        console.log('User tapped custom button',response.customButton);
      
      }
      else{
        this.setState({ photo: response
         });
      }
    });
  };

  render() {
    const { photo } = this.state;
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        {photo && (
          <Image  source={{ uri: photo.uri }}
            style={{ width: 300, height: 300 ,resizeMode:'contain'}}
          />
        )}
        <Button title="Choose Photo" onPress={this.handleChoosePhoto} />
      </View>
    );
  }
}