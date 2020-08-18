import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';

let initialArr = [{ id: 1, color: "blue",name: "text1"},{id: 2,color: "red",name: "text2"}];

export default class Login extends Component {
  constructor(){
    super();
     this.state = {
        status: 0,
        txtStatus:"Login",
        items:[]
    };
  }
  



  render(props) {
 
    
    return (
      <View>
       

      </View>
    );
  }
}



const styles = StyleSheet.create({
  containerStyle: {
    borderWidth: 1,
    borderRadius: 2,
    borderColor: '#DDDDDD',
    margin: 6,
    padding: 10,
  },textLogin:{
    color:'red',
    fontWeight:"bold",
    fontSize:20,
    padding:8,
    alignSelf:"center"
  },textLogout:{
    fontWeight:"bold",
    fontSize:20,
    padding:8,
    alignSelf:"center"
  }
});
