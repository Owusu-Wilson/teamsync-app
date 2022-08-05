import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
// Fonts
import { useFonts } from "expo-font";
const SettingsScreen = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>SettingsScreen</Text>
      <View style={styles.itemsContainer}>
        <ScrollView>
            

        </ScrollView>
      </View>
    </View>
  )
}

export default SettingsScreen

const styles = StyleSheet.create({
    container:{
        marginTop:20,
        paddingLeft: 20,
    },
    headerText:{
        fontFamily: "SSBold",
        fontSize: 30,
    }
})