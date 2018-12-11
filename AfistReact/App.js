/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class AkifeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Akife</Text>
      </View>
    );
  }
}

class FurkanScreen extends React.Component {
  render() {
    return (
      <View style={stylesFurkan.container}>
          <View style={stylesFurkan.header}></View>
          <Image style={stylesFurkan.avatar} source={{uri: 'https://avatars0.githubusercontent.com/u/9076939?s=460&v=4'}}/>
          <View style={stylesFurkan.body}>
            <View style={stylesFurkan.bodyContent}>
              <Text style={stylesFurkan.name2}>Furkan Özoğlu</Text>
              <Text style={stylesFurkan.info}>UX Designer / iOS Mobile developer</Text>
              <Text style={stylesFurkan.description}>Merhaba arkadaşlar, ilk react sayfamı hazırladım. Umarım Beğenirsiniz.</Text>
              <TouchableOpacity style={stylesFurkan.buttonContainer}>
                <Text style={stylesFurkan.buttonText}>CV</Text>  
              </TouchableOpacity>              
              <TouchableOpacity style={stylesFurkan.buttonContainer}>
                <Text style={stylesFurkan.buttonText}>About</Text> 
              </TouchableOpacity>
            </View>
        </View>
      </View>
    );
  }
}

class IkbalScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>İkbal</Text>
      </View>
    );
  }
}

class SalihScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Salih</Text>
      </View>
    );
  }
}

class TeomanScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Teoman</Text>
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  Akife: AkifeScreen,
  Furkan: FurkanScreen,
  Ikbal: IkbalScreen,
  Salih: SalihScreen,
  Teoman: TeomanScreen

},
{
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, horizontal, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Akife') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      } else if (routeName === 'Furkan') {
        if(focused) {
          iconName = `ios-battery-full`;

        }
        else {
          iconName = `ios-battery-dead`;
        }
      }
      else if (routeName === 'Ikbal') {
        if(focused) {
          iconName = `ios-information-circle`;

        }
        else {
          iconName = `md-notifications-outline`;
        }
        
      }
      else if (routeName === 'Salih') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      }
      else if (routeName === 'Teoman') {
        iconName = `ios-information-circle${focused ? '' : '-outline'}`;
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Ionicons name={iconName} size={horizontal ? 20 : 25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#00BFFF',
    inactiveTintColor: 'gray',
  },
}
);

export default createAppContainer(TabNavigator);

const stylesFurkan = StyleSheet.create({
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600'
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    alignItems: 'center',
    padding:40,
  },
  name2:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center',
    marginBottom: 40
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "#00BFFF",
  },
  buttonText:{
    fontSize:18,
    color: "white",
    fontWeight: "600"
  },
});
