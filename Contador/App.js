import { Text, SafeAreaView, StyleSheet, Button } from 'react-native';
import React from 'react'

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {

let [contador,setContador] = React.useState(0)

let handleClick = ()=>{
  setContador(contador + 1)
}



  return (
    <SafeAreaView style={styles.container}>
          <Button title={contador} onPress={handleClick}/> 
          
          <Button title='Zerar' onPress={() => {setContador(0)}}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
    gap: 20,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
