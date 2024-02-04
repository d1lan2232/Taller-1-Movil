import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'

export const InicioScreen = () => {


  return (
    <View style={styles.container}>
        <Text style={styles.textoHola}>Hola</Text>
        <Text style={styles.textoIngresa}>Ingresa a tu cuenta:</Text>
        <TextInput
        style={styles.cuadroEmail}
        placeholder="user@email.com"
        keyboardType="email-address"
        />
        <TextInput
        style={styles.cuadroPass}
        placeholder="Contraseña"
        secureTextEntry={true}
        />
        <Text style={styles.textoOlvidaste}>Olvidaste tu contraseña?</Text>
        <TouchableOpacity style={styles.boton}>
        <Text style={styles.textoBtn}>Ingresar</Text>
        </TouchableOpacity>
        <Text style={styles.textoCrear}>Crear tu cuenta...</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#e3f2fd',
        alignContent: 'center',
        //alignItems: 'center',
    },
    textoHola:{
        fontSize: 48,
        color: 'black',
        padding: 5,
        marginTop: '50%',
        left: 20,
        fontWeight: 'bold',
        bottom: 15,
    },
    textoIngresa:{
        fontSize: 18,
        color: 'gray',
        left: 38,
        bottom: 10,
    },
    cuadroEmail:{
        width: '80%',
        borderWidth: 1,
        padding: 15,
        alignSelf: 'center',
        top: 20,
        borderRadius: 30,
        backgroundColor: 'white',
        elevation: 16, 
    },
    cuadroPass:{
        width: '80%',
        borderWidth: 1,
        padding: 15,
        alignSelf: 'center',
        top: 37,
        borderRadius: 30,
        backgroundColor: 'white',
        elevation: 16, 
    },
    textoOlvidaste:{
        fontSize: 15,
        color: 'blue',
        alignSelf: 'center',
        top: 60,         
    },
    boton:{
        width: 100,
        borderRadius: 25,
        borderWidth: 2,
        borderColor: 'black', 
        fontWeight: 'bold',
        alignItems: 'center',
        backgroundColor: '#1d2e68',
        padding: 10,
        top: 95,
        left: '38%',
    },
    textoBtn:{
        color: 'white',
        fontWeight: 'bold',
    },
    textoCrear:{
        color: 'black',
        alignSelf: 'center',
        top: 150,
    }
})