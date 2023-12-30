import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View, ActivityIndicator, Pressable } from 'react-native';
import { FIREBASE_AUTH, FIREBASE_DB } from '../../../FIrebaseConfig';
import { doc, updateDoc } from 'firebase/firestore';
import { signInWithEmailAndPassword } from 'firebase/auth';


export default function Details() {
 

  const updateDtl = async ()  =>{

  }

  return (
    <View style={styles.container}>
      
    </View>
  )
}

const styles = StyleSheet.create({
  container: {

    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignContent: 'center',

  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    marginTop: 15,
    width: "80%",
    backgroundColor: '#fff',
    marginLeft: "10%",
  },
  button: {
    marginTop: 20,
    borderRadius: 30,
    borderWidth: 1,
    paddingLeft: 130,
    paddingTop: 15,
    height: 50,
    width: "80%",
    marginLeft: "10%",
  }
});



