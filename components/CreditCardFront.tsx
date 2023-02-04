import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import {SharedValue} from 'react-native-reanimated'
interface IProps{
  rotate: SharedValue<number>
}
const CreditCardFront = ({rotate}:IProps)=>{
    return (
      <Pressable onPress={()=>{
        rotate.value = rotate.value ? 0 : 1;
      }} style={styles.container}>
        <Text style={styles.cardNumber}>1234 5678 9012 3456</Text>
        <View style={styles.infoContainer}>
          <Text style={styles.cardHolder}>John Doe</Text>
          <View style={styles.expiryContainer}>
            <Text style={styles.validThru}>VALID THRU</Text>
            <Text style={styles.expiryDate}>12/24</Text>
          </View>
        </View>
      </Pressable>
    );
  }
export default CreditCardFront;
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#8ecae6',
    width: 300,
    height: 200,
    borderRadius: 10,
    padding: 20
  },
  
  cardNumber: {
    fontSize: 18,
    color: '#023047',
    alignSelf: 'center',
    marginTop: 20
  },
  infoContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: 20
  },
  cardHolder: {
    fontSize: 16,
    color: '#023047',
    marginRight: 50
  },
  expiryContainer: {
    alignItems: 'center'
  },
  validThru: {
    fontSize: 10,
    color: '#023047',
    marginBottom: 5
  },
  expiryDate: {
    fontSize: 16,
    color: '#023047'
  }
});
