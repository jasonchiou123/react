import React  from 'react';
import { StyleSheet, Text,View, AppRegistry,render } from 'react-native';

export default function App () {
    return (
 <View style={styles.container}>
    <Text>HELLO</Text>
 </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },  
});

//render(<App/>, document.getElementById('root'));
// register the app
/* 
AppRegistry.registerComponent("App", () => App);
AppRegistry.runApplication("App", {
  initialProps: {},
  rootTag: document.getElementById("root")
});
*/

