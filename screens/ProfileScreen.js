import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
  Dimensions,
} from "react-native";

import { Feather as Icon } from "@expo/vector-icons";

import UserInfo from "../data/UserInfo";
function Photos({ photos }) {
  const imgWidth = Dimensions.get("screen").width * 0.33333;
  return (
    <View style={{}}>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        {photos.map((photo, index) => (
          <View>
            <Image
              style={{ width: imgWidth, height: imgWidth }}
              source={{
                uri: `https://picsum.photos/200/300?random=${index + 1}`,
              }}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

function Albums() {
  const [albums] = useState([
    {
      name: "Animals",
      images: [
        "https://i.picsum.photos/id/1074/367/267.jpg?hmac=2YamGD7W1FNtp9UvAVUDdYUm44xzyHCthHqFl6jVT0M",
        "https://i.picsum.photos/id/237/367/267.jpg?hmac=9Xp8JrOngpF2E_G3tRKnJMhZu5AX8FimulIG_sLj1xg",
        "https://i.picsum.photos/id/1084/367/267.jpg?hmac=VaCZRCvuoubMR-S6bXItyxmDVwAaumZU2x1ulWE0faU",
        "https://i.picsum.photos/id/219/367/267.jpg?hmac=S8RAgXxGj5AUho8KQ0hsjW8bhy1d-WunZNm77FCqC3w",
      ],
    },
    {
      name: "Food",
      images: [
        "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1460306855393-0410f61241c7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      ],
    },
  ]);
  const imgWidth = Dimensions.get("screen").width * 0.33333;
  return (
    <View style={{ flex: 1, backgroundColor: "#fff", paddingBottom: 20 }}>
      {albums.map((album) => (
        <TouchableOpacity style={{ flexDirection: "row", marginTop: 10 }}>
          {album.images.map((img) => (
            <Image
              style={{ width: imgWidth + 50, height: imgWidth + 50 }}
              source={{ uri: img }}
            />
          ))}
          <View
            style={{
              position: "absorelute",
              bottom: 10,
              left: 10,
              backgroundColor: "#111",
              paddingHorizontal: 10,
              paddingVertical: 4,
              borderRadius: 6,
            }}
          >
            <Text style={{ color: "#fff", fontFamily: "SSBold", fontSize: 20 }}>
              {album.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

function Tags({ photos }) {
  const imgWidth = Dimensions.get("screen").width * 0.33333;
  return (
    <View style={{}}>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          alignItems: "flex-start",
        }}
      >
        {photos.map((photo, index) => (
          <View>
            <Image
              style={{ width: imgWidth, height: imgWidth }}
              source={{
                uri: `https://picsum.photos/200/300?random=${index + 100}`,
              }}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

export default function ProfileScreen() {
  const [showContent, setShowContent] = useState("Photos");

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <>
          <View>
            <Image
              style={styles.coverImage}
              source={{ uri: "https://picsum.photos/500/500?random=211" }}
            />
          </View>
          <View style={styles.profileContainer}>
            {/* Profile Details */}
            <View>
              {/* Profile Image */}
              <View style={styles.profileImageView}>
                <Image
                  style={styles.profileImage}
                  source={{
                    // uri: 'https://randomuser.me/api/portraits/women/46.jpg',
                    uri: UserInfo.avatarImage,
                  }}
                />
              </View>
              {/* Profile Name and Bio */}
              <View style={styles.nameAndBioView}>
                <Text style={styles.userFullName}>{UserInfo.name}</Text>
                <Text style={styles.userBio}>{UserInfo.task}</Text>
              </View>
              {/* Posts/Followers/Following View */}
              <View style={styles.countsView}>
                <View style={styles.countView}>
                  <Text style={styles.countNum}>{UserInfo.teams}</Text>
                  <Text style={styles.countText}>Data Teams</Text>
                </View>
                <View style={styles.countView}>
                  <Text style={styles.countNum}>{UserInfo.tokens}</Text>
                  <Text style={styles.countText}>Tokens</Text>
                </View>
              </View>
              {/* Interact Buttons View */}
              <View style={styles.interactButtonsView}>
                {/* Button to edit user profile detsils */}
                <TouchableOpacity style={styles.interactButton}>
                  <Text style={styles.interactButtonText}>Edit</Text>
                </TouchableOpacity>
                {/* Button for viewing all team members from the current active team */}
                <TouchableOpacity
                  onPress={() => {
                    alert("No members found");
                  }}
                  style={{
                    ...styles.interactButton,
                    backgroundColor: "white",
                    borderWidth: 2,
                    borderColor: "#4b7bec",
                  }}
                >
                  <Text
                    style={{ ...styles.interactButtonText, color: "#4b7bec" }}
                  >
                    Team Members
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  coverImage: { height: 300, width: "100%" },
  profileContainer: {
    // height: 1000,
    backgroundColor: "#fff",
    marginTop: -100,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  profileImageView: { alignItems: "center", marginTop: -50 },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "#fff",
  },
  nameAndBioView: { alignItems: "center", marginTop: 10 },
  userFullName: { fontFamily: "SSBold", fontSize: 26 },
  userBio: {
    fontFamily: "SSRegular",
    fontSize: 18,
    color: "#333",
    marginTop: 4,
  },
  countsView: { flexDirection: "row", marginTop: 20 },
  countView: { flex: 1, alignItems: "center" },
  countNum: { fontFamily: "SSBold", fontSize: 20 },
  countText: { fontFamily: "SSRegular", fontSize: 18, color: "#333" },
  interactButtonsView: {
    flexDirection: "row",
    marginTop: 10,
    paddingHorizontal: 20,
  },
  interactButton: {
    flex: 1,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: "#4b7bec",
    margin: 5,
    borderRadius: 4,
  },
  interactButtonText: {
    fontFamily: "SSBold",
    color: "#fff",
    fontSize: 18,
    paddingVertical: 6,
  },
  profileContentButtonsView: {
    flexDirection: "row",
    borderTopWidth: 2,
    borderTopColor: "#f1f3f6",
  },
  showContentButton: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 10,
    borderBottomColor: "#000",
  },
  showContentButtonText: {
    fontFamily: "SSRegular",
    fontSize: 18,
  },
});
