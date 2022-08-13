import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  useColorScheme,
} from "react-native";

export default function InfoCard(props) {
  return (
    <TouchableOpacity
      onPress={props.eventHandler}
      style={styles.container}
    >
        <View  style ={styles.avatar} >
<AntDesign name="amazon" size={100} color="white"/>
        </View>
        <View  style ={styles.text} >
<Text style={styles.head}>At the Top</Text>
<Text style={styles.tag}>This is a subtitle tag</Text>
        </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1/4,
    flexDirection: "row",
    padding: 10,
    height: 10,
    width: '85%',
    borderRadius: 10,
    // backgroundColor: 'green'
  },
  avatar:{
    flex: 1/3,
    flexDirection: 'row',
    backgroundColor: '#3B3B3B', 
    alignItems: 'center', 
    justifyContent:'center'
  },
  text:{
    flex: 2/3,
    flexDirection: 'column',
    backgroundColor: 'white', 
    paddingLeft:5, 
    paddingTop: 50
  }, 
  head:{
    fontFamily:'SSBold',
    fontSize: 40,
  }, 
  tag:{
    fontFamily:'SSLight',
    fontSize: 20,
  }
});
