import { StyleSheet, Text, View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen({ navigation }) {
  const logo = require("../assets/dua.png");

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={logo} style={styles.image} />
        <Text style={styles.title}>Dua Nederlands</Text>
        <Text style={styles.rest}>
          Deze app bevat verschillende soorten dua in zowel het Arabisch als het
          Nederlands. (In een volgende update) Kan je bij een dua een haartje
          plaatsen om het toe te voegen bij je 'Favoriete Dua' pagina toe te
          voegen.{" "}
        </Text>
        <View style={{ flexDirection: "row" }}>
          {/* <Knop
            title="Soorten Dua"
            onPress={() => navigation.navigate("Soorten Dua")}
          ></Knop>
          <Knop
            title="Lievelings Dua"
            onPress={() => navigation.navigate("Lievelings Dua")}
          ></Knop> */}
        </View>
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
    alignItems: "center",
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 18,
  },
  title: {
    fontSize: 30,
  },
  rest: {
    fontSize: 20,
    paddingTop: 50,
    justifyContent: "center",
    flexShrink: 1,
    marginLeft: 10,
    marginRight: 10,
    textAlign: "center",
  },
});
