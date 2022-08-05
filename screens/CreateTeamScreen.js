import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Alert, Platform, StyleSheet, View, Text } from "react-native";
import Reinput from "reinput";
import ActionButton from "../components/ActionButton";
import { colors } from "../colors";
import { Picker } from "@react-native-picker/picker";

export default function CreateTeamScreen({ navigation }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  async function handlePress() {
    Alert.alert("Confirmation", `Team \"${name}\" was created successfully`, [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);
    navigation.navigate("AdminTools");
  }
  async function changeCatagory(itemValue, itemIndex) {
    setCategory(itemValue);
  }

  async function addTeamToDB(teamID, session) {
    try {
      if (
        session &&
        session.get("authenticated") &&
        session.get("user") &&
        session.get("user").uid.length > 0
      ) {
        // let snapShot = await
      }
    } catch (error) {}
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Decide What Your Team Should Be.</Text>
      {/* <TextInput  */}
      <Reinput label="name" value={name} onChangeText={setName} />
      <View style={styles.categoryContainer}>
        {/* <Reinput
          label="select category"
          value={category}
          onChangeText={setCategory}
          style={styles.categoryInput}
          editable={false}
          defaultValue=""
        /> */}
        {/* ======================================== */}
        <Picker 
          
          style={styles.dropdown}
          selectedValue={category}
          onValueChange={(itemValue, itemIndex) =>
            setCategory(itemValue)
          }
        >
          <Picker.Item  label="Health" value="h" />
          <Picker.Item label="Research" value="rs" />
          <Picker.Item label="Statistics" value="s" />
          <Picker.Item label="Religion" value="r" />
          <Picker.Item label="Others" value="a" />
        </Picker>
      </View>
      {/* ======================================== */}

      <ActionButton
        name={"Done"}
        iconColor={"white"}
        bg={
          !name  ? colors.buttonDisabled : colors.actionButtonColor
        }
        // icon={"check"}
        eventHandler={handlePress}
        disabled={!name}
      />

      <View></View>
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}

      {/* Use a light status bar on iOS to account for the black space above the modal */}
      <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  label: {
    fontSize: 15,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  dropdown: {
    height: 50,
    width: 150,
  },

  categoryInput: {
    width: 150,
    paddingRight: 30,
  },
  categoryContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    // alignItems: 'flex-start',
  },
});
