import React from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Linking,
  Platform,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import { TouchableOpacity } from "react-native-gesture-handler";
// Fonts
import { useFonts } from "expo-font";
import SSLight from "../assets/fonts/SourceSansPro/SourceSansProLight.ttf";
import SSRegular from "../assets/fonts/SourceSansPro/SourceSansProRegular.ttf";
import SSBold from "../assets/fonts/SourceSansPro/SourceSansProBold.ttf";
const AboutScreen = () => {
  const [loaded] = useFonts({
    SSLight,
    SSRegular,
    SSBold,
  });

  return (
    <View style={styles.container}>
      {/* <Text style={styles.headerText}>AboutScreen</Text> */}
      <View style={styles.itemsContainer}>
        <View style={styles.container}>
          <Text style={styles.title}>About The Developer</Text>
          <Text style={styles.body}>
            CEO of Sparrow Labs Inc (@slabs_gh), is the develooper of this cross
            platform mobile app. He specifies as a Data Scientist, a Pentester
            and a Cyber Security Engineer. He also sings and plays music as a
            hobby.
          </Text>
          <View style={styles.social_icons}>
            {/* Gmail icon */}
            <TouchableOpacity
              onPress={() =>
                Linking.openURL(
                  "mailto:slabs@gmail.com?subject=TeamSync Support&body=Your message goes here"
                )
              }
            >
              <MaterialCommunityIcons name="gmail" size={30} color="black" />
            </TouchableOpacity>
            {/* facebook icon */}
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("http://www.facebook.com/sparrowlabsLTD/")
              }
            >
              <MaterialCommunityIcons
                name="facebook-messenger"
                size={30}
                color="black"
              />
            </TouchableOpacity>
            {/* instagram icon */}
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("http://www.instagram.com/slabs_gh")
              }
            >
              <MaterialCommunityIcons
                name="instagram"
                size={30}
                color="black"
              />
            </TouchableOpacity>
            {/* website icon */}
            <TouchableOpacity
              onPress={() =>
                Linking.openURL("http://www.mysparrowworks.wordpress.com/")
              }
            >
              <MaterialCommunityIcons name="web" size={30} color="black" />
            </TouchableOpacity>
            {/* // ============================================================================== */}
          </View>
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />
          {/* ===================================================================== */}
          <Text style={styles.title}>Appreciations</Text>
          <Text style={styles.body}>
            All Thanks to God Almighty for the ability to solve a problem
          </Text>
          <Text style={styles.body}>
            Special Thanks to all my friends who helped and motivated me in
            building this app.
          </Text>
          <View
            style={styles.separator}
            lightColor="#eee"
            darkColor="rgba(255,255,255,0.1)"
          />

          {/* Use a light status bar on iOS to account for the black space above the modal */}
          <StatusBar style={Platform.OS === "ios" ? "light" : "auto"} />
        </View>
      </View>
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: 50,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  body: {
    fontSize: 15,
    padding: 20,
  },
  separator: {
    marginVertical: 20,
    height: 1,
    width: "80%",
  },
  social_icons: {
    width: "90%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  headerText: {
    fontFamily: "SSBold",
    fontSize: 30,
  },
});
