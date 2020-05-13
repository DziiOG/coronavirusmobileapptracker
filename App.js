import 'react-native-gesture-handler'
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyTab from './src/navigator/tabnavigator';
import { ProductProvider } from './src/context';

export default class App extends React.Component{



  render(){
    return(

  <View style={styles.container}>
      <ProductProvider>
          <MyTab></MyTab>
      </ProductProvider>
  </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
