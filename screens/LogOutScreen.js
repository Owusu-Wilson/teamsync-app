import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { auth, signOut } from "../firebase";


const LogOutScreen = () => {
  return (
    <View>
      <Text>Loging out</Text>
      <Button
      title='Log out'
      onPress={()=>{signOut(auth)}}
      />
    </View>
  )
}

export default LogOutScreen

const styles = StyleSheet.create({})