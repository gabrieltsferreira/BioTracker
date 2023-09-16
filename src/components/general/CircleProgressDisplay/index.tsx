import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

type Props = {
  progress: number
}

export default function CircleProgressDisplay(props: Props) {
    return (
      <View style={styles.container}>  
        <AnimatedCircularProgress
          size={120}
          width={15}
          fill={props.progress}
          rotation={0}
          tintColor="#00e0ff"
          backgroundColor="#3d5875" 
        >
          {
            (fill) => (
              <Text>
                {fill}%
              </Text>
            )
          }
        </AnimatedCircularProgress>         
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
    },
  });