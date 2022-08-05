import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Platform, StyleSheet, View,Text } from "react-native";
import Reinput from "reinput";

import ActionButton from "../components/ActionButton";
import {colors}  from '../colors'

export default function JoinTeamScreen() {
	const [link, setLink] = useState("");
	const [PIN, setPIN] = useState("");
	const team_name = link.toString();
	async function handlePress() {
		alert(`Added to ${team_name} Successfully`);
	}
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Provide Team Details to Join</Text>
			<Reinput label="team link" value={link} onChangeText={setLink} />
			<Reinput label="Enter PIN" value={PIN} onChangeText={setPIN} />
			<ActionButton
				name={"Join"}
				iconColor={"white"}
				bg={(!link || !PIN) ? colors.buttonDisabled : colors.primaryColor}
				// icon={"pluscircle"}
				eventHandler={handlePress}
				disabled={!link || !PIN}

			/>
			{/* // disabled takes in a condition to make the button untouchable */}
			{/* // when there is no link and PIN. */}
			<View></View>

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
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
