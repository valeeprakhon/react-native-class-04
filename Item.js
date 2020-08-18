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

export default class Item extends Component {

  render(props) {
    return (
      <View style={styles.containerStyle}>
          <View style={{flexDirection:"row"}}>
            <View style={{width:50,height:50,backgroundColor:'red'}}/>
            <View style={{flexDirection:"column",paddingStart:8}}>
              <Text> ID : 0 </Text>
              <Text> Name : unnamed </Text>
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
