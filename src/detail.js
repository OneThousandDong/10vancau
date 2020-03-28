import React, { Component } from 'react';
import { View, Text, Button, TouchableOpacity, Image, SafeAreaView , ScrollView  } from 'react-native';


class Detail extends Component {

  render() {
    return (
      <SafeAreaView>
      <ScrollView>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Trai Dat")}>
                <Image
                  source={{
                    uri:
                      'https://1.bp.blogspot.com/-7kizDZo7Q0I/V-vkKgEA1cI/AAAAAAAACdI/WDcWz1jVtpk9dyWgiqks6IMaFMB8j2v9ACLcB/s1600/vuelta.jpg',
                  }}
                  style={{
                    width: '97%', height: 100, marginTop: 5, marginBottom: 5,
                    marginLeft: 5, 

                  }}
                />
              </TouchableOpacity> 
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Trai Dat")}>
                <Image
                  source={{
                    uri:
                      'https://thumbs.dreamstime.com/b/alien-mothership-spaceship-deep-space-ufo-spacecraft-flying-universe-planet-stars-rear-view-d-rendering-render-127064275.jpg',
                  }}
                  style={{
                    width: '97%', height: 100, marginTop: 5, marginBottom: 5,
                    marginLeft: 5, 

                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Trai Dat")}>
                <Image
                  source={{
                    uri:
                      'https://cbei.blog/wp-content/uploads/2018/12/windmill.jpg',
                  }}
                  style={{
                    width: '97%', height: 100, marginTop: 5, marginBottom: 5,
                    marginLeft: 5, 

                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Trai Dat")}>
                <Image
                  source={{
                    uri:
                      'https://cbei.blog/wp-content/uploads/2018/12/windmill.jpg',
                  }}
                  style={{
                    width: '97%', height: 100, marginTop: 5, marginBottom: 5,
                    marginLeft: 5, 

                  }}
                />
              </TouchableOpacity> 
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Trai Dat")}>
                <Image
                  source={{
                    uri:
                      'https://cbei.blog/wp-content/uploads/2018/12/windmill.jpg',
                  }}
                  style={{
                    width: '97%', height: 100, marginTop: 5, marginBottom: 5,
                    marginLeft: 5, 

                  }}
                />
              </TouchableOpacity> 
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Trai Dat")}>
                <Image
                  source={{
                    uri:
                      'https://cbei.blog/wp-content/uploads/2018/12/windmill.jpg',
                  }}
                  style={{
                    width: '97%', height: 100, marginTop: 5, marginBottom: 5,
                    marginLeft: 5, 

                  }}
                />
              </TouchableOpacity> 
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Trai Dat")}>
                <Image
                  source={{
                    uri:
                      'https://cbei.blog/wp-content/uploads/2018/12/windmill.jpg',
                  }}
                  style={{
                    width: '97%', height: 100, marginTop: 5, marginBottom: 5,
                    marginLeft: 5, 

                  }}
                />
              </TouchableOpacity> 
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate("Trai Dat")}>
                <Image
                  source={{
                    uri:
                      'https://cbei.blog/wp-content/uploads/2018/12/windmill.jpg',
                  }}
                  style={{
                    width: '97%', height: 100, marginTop: 5, marginBottom: 5,
                    marginLeft: 5, 

                  }}
                />
              </TouchableOpacity>  

               <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Screen 3', { name: "param 3" })}>
                <Text>Screen</Text>
              </TouchableOpacity> 
      </ScrollView>
      </SafeAreaView >
    );
  }
}

export default Detail;