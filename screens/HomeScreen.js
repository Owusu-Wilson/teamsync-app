import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import React from "react";
import { SectionGrid, FlatGrid } from "react-native-super-grid";
import { colors } from "../colors";
const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.header_image}
        source={require("../img/header_img.jpg")}
      />
      {/* <GridList/>  */}
      {/* <FlatGridList/> */}
      <SafeAreaView style={styles.gridContainer}>
        {
          <SectionGrid
            itemDimension={150}
            sections={[
              {
                // title: "Startup",
                data: [
                  "Join a Team",
                  "Create a team",
                  "View Profile",
                  "View Teams",
                ],
              },
            ]}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                
                }}
                style={styles.gridItem}
              >
                <Text style={styles.buttonText}>{item}</Text>
              </TouchableOpacity>
            )}
            renderSectionHeader={({ section }) => (
              <Text style={{ fontSize: 20 }}>{section.title}</Text>
            )}
          />
        }
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    marginTop: 30,
  },

  gridContainer: {
    marginTop: 30,
    alignContent: "center",
  },
  header_image: {
    height: "30%",
    width: "100%",
    padding: 50,
    // borderRadius: 50,
  },
  gridItem: {
    backgroundColor: colors.primaryColor,
    width: "80%",
    height: 120,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    // opacity: 0.6
  },
  buttonText: {
    color: colors.secondaryColor,
    fontSize: 25,
    fontWeight: "700",
  },
});
