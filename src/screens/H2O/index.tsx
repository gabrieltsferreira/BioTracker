import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CircleProgressDisplay from '../../components/general/CircleProgressDisplay';

export default function H2O() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          Water Intake
        </Text>
        <CircleProgressDisplay progress={30}/>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 30,
      padding: 20
    }
  });