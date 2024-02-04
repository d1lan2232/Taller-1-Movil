import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { InicioScreen } from './src/Screens/InicioScreen';
import { CrearCuentaScreen } from './src/Screens/CrearCuentaScreen';
import { OlvidasteContra } from './src/Screens/OlvidasteContra';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/*<InicioScreen/>*/}
      {/*<CrearCuentaScreen/>*/}
      {/*<OlvidasteContra/>*/}
    </SafeAreaView>
  )
}

export default App;

const styles = StyleSheet.create({
  container:{
      flex: 1,
  },
})