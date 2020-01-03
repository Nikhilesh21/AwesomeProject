import * as React from 'react';
import { StyleSheet, Text, View,TouchableHighlight,Image,ScrollView} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import {createBottomTabNavigator } from 'react-navigation';
import { TextInput, FlatList } from 'react-native-gesture-handler';
import Slideshow from 'react-native-image-slider-show';
import flatListData from './flatlistview';
const data = new Array(30).fill(0);

export default class Ts extends React.Component {
  constructor(props) {
    super(props);
 
    this.state = {
      position: 1,
      interval: null,
      dataSource: [
        {
          title: 'Ambiance',
          caption: 'Living Room',
          url: 'https://files2.hungryforever.com/wp-content/uploads/2015/09/11100113/restaurants-in-bangalore.jpg',
        }, {
          title: 'restaurants',
          caption: 'Pub and Brewery',
          url: 'https://img.traveltriangle.com/blog/wp-content/uploads/2018/02/133.jpg',
        }, {
          title: 'Room',
          caption: 'Best BedRoom',
          url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/bedroom-design-ideas-lead-1565726251.jpg?crop=1.00xw:0.647xh;0.00160xw,0.258xh&resize=480:*',
        },
      ],
    };
  }
 
  componentWillMount() {
    this.setState({
      interval: setInterval(() => {
        this.setState({
          position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
        });
      }, 2000)
    });
  }
 
  componentWillUnmount() {
    clearInterval(this.state.interval);
  }
  render() {
    
   
    return (
      <View style={{flex:1,backgroundColor:"lightgrey"}}>
        <Slideshow 
        dataSource={this.state.dataSource}
        position={this.state.position}
        onPositionChanged={position => this.setState({ position })} />
              <View>
              <Text style={{fontFamily: "fantasy",fontSize: 28}}>List of Hotels</Text>
              </View>
              <ScrollView>
              <FlatList
          data={data}
          renderItem={({index}) => (<View style={{flex:1,flexDirection:'row',backgroundColor:'white',marginTop:10}}>
            <Image source={require('./images/hotel.jpg')} style={{width:220,height:180,marginTop:10}}
        />
        <Text style={{fontSize:28,marginTop:30}}> Hotel 1</Text>
        </View>
          )}
          contentContainerStyle={{ padding: 10 }}
        />
       
        </ScrollView>
               </View>
               );
             }
           }
           