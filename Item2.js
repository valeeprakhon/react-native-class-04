//Order.js
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';

export default class Item2 extends Component {
  constructor(){
    super();
      this.state={
        color:"red",
        text:"No Check",
        isCheck:true
      }
  }

  render(props) {
    return (
      <View style={styles.containerStyle}>
          <View style={{flexDirection:"row"}}>
            <View style={{width:50,height:50,backgroundColor:this.state.color}}/>
            <View style={{flexDirection:"column",paddingStart:8,justifyContent:"center"}}>
              <Text> Message : nuMessage </Text>
            </View>
          </View>
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
  }
});
