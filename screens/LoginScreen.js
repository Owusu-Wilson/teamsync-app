import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { colors } from "../colors";
import { auth, signIn, signUp } from "../firebase";

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [accountExist, setAccountState ]= useState(false)

  async function go(){
    navigation.navigate('Main')

  }
  async function handleSignUp() {
    signUp(email, password)
      .then((userCreds) => {
        const user = userCreds.user;
        navigation.navigate('Main')

        console.log("Account created for : ", user.email);
      })
      .catch((error) => alert(error.message));
  }
  const handleSignIn = () => {
    signIn(email, password)
      .then((userCreds) => {
        const user = userCreds.user;
        console.log("Logged in as : ", user.email);
        navigation.navigate('Main')
        setAccountState(true)
      })
      .catch((error) => alert(error.message));
  };
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <Text style={styles.head}>Sign Up</Text>
      <View style={styles.inputContainer}>
        {/*component and styles for Email field */}
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        />
        {/*component and styles for Password field */}
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
          style={styles.input}
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={go} style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        {/* ============================================== */}
        <TouchableOpacity
         onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
        {(accountExist) ? <Text style={styles.warningText}>
          Account does not exist
        </Text> : <Text></Text>}
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  head: {
    color: colors.primaryColor,
    fontFamily: "SSBold",
    fontWeight: "700",
    fontSize: 45,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
  input: {
    backgroundColor: "white",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: "60%",
    justifyContent: "center",
    alignContent: "center",
    marginTop: 40,
  },
  button: {
    backgroundColor: colors.primaryColor,
    width: "100%",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonOutline: {
    backgroundColor: colors.secondaryColor,
    marginTop: 5,
    borderColor: colors.primaryColor,
    borderWidth: 2,
  },
  buttonText: {
    color: "white",
    fontWeight: "700",
    fontSize: 16,
  },
  buttonOutlineText: {
    color: colors.primaryColor,
    fontWeight: "700",
    fontSize: 16,
  },
});
