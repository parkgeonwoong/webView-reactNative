import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

const YOUTUBE = "https://www.youtube.com/";
const GOOGLE = "https://www.google.com/";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ width: "80%", height: "80%" }}>
        <WebView source={{ uri: YOUTUBE }} onLoad={console.log("Loaded!")} />
      </View>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
