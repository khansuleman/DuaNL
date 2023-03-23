import { StyleSheet, Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";
export default function LievelingsDua() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Text style={styles.text}>Coming soon!</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#f3f8ee",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 55,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 18,
  },
  text: {
    fontSize: 30,
  },
});
