import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, Image } from 'react-native';


class Detail extends Component {

  render() {
    return (
      <View>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Trai Dat")}>
                <Image
                  source={{
                    uri:
                      'https://1.bp.blogspot.com/-7kizDZo7Q0I/V-vkKgEA1cI/AAAAAAAACdI/WDcWz1jVtpk9dyWgiqks6IMaFMB8j2v9ACLcB/s1600/vuelta.jpg',
                  }}
                  style={{width: '100%', height: 100, marginTop: 5, marginBottom: 5}}
                />
              </TouchableOpacity> 

               <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Screen 3', { name: "param 3" })}>
                <Text style={{color: 'red'}}>Screen</Text>
              </TouchableOpacity> 
      </View >
    );
  }
}

export default Detail;