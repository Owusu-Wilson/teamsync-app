import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ImageBackground,
  Button
} from "react-native";
import React, { Component, PropTypes } from 'react';
import moment from "moment";
import { colors } from "../colors";
import LargeButton from "../components/Card";
function setPeriodOfDay() {
  if (moment().hour() >= 0 && moment().hour() < 11) {
    return "Morning";
  } else if (moment().hour() >= 12 && moment().hour() < 15) {
    return "Afternoon";
  } else if (moment().hour() > 15) {
    return "Evening";
  }
}
const periodOfDay = setPeriodOfDay();
const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Good {periodOfDay}</Text>
      <View style={styles.cardsContainer}>
      {/* Create forms Button */}
      <LargeButton type='m' iconName='account-multiple-plus' primaryText='Join a Team' secondaryText='Join an ongoing data team  ' eventHandler={() => { navigation.navigate("JoinTeam") }} />
      <LargeButton type='m' iconName='account-group' primaryText='Create a Team' secondaryText='Create your own data team  ' eventHandler={() => { navigation.navigate("CreateTeam") }} />
      <LargeButton type='m' iconName='code-braces-box' primaryText='Admin Tools' secondaryText='Tools to manage your teams' eventHandler={() => { console.warn("here") }} />
    </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    marginTop: 30,
  },
  cardsContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center'
  },

  butomContainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: "red",
  },
  imageSection: {
    height: "40%",
    // flex:1,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 20,
  },

  image: {
    flex: 2,
    height: "55%",
    // width: "50%",
    padding: 40,
    // borderRadius: 50,
  },
  headerText: {
    fontFamily: "SSBold",
    fontSize: 30,
    padding: 20,
  },
  gridItem: {
    backgroundColor: colors.primaryColor,
    // width: "80%",
    height: 120,
    padding: 15,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: colors.secondaryColor,
    fontSize: 25,
    fontWeight: "700",
  },
});
