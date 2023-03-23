import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Toilet() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.imageContainer}>
          <Text style={styles.title}>Dua's</Text>

          <View style={styles.cont}>
            <Text style={styles.text}> Voor je naar toilet gaat </Text>
            <Text style={styles.text}>
              (بِسْمِ اللَّهِ). اللَّهُـمَّ إِنِّي أَعُـوذُ بِـكَ مِـنَ
              الْخُـبْثِ وَالْخَبَائِثِ.
            </Text>
            <Text style={styles.text}>
              {" "}
              (Bismil-lah) allahumma innee aAAoothu bika minal-khubthi
              wal-khaba-ith{" "}
            </Text>
            <Text style={styles.text}>
              (In de naam van Allah). O Allah, ik zoek toevlucht bij U tegen
              alle kwaad en boosdoeners.
            </Text>
          </View>

          <View style={styles.cont}>
            <Text style={styles.text}> Als je uit de toilet gaat </Text>
            <Text style={styles.text}>غُفْرَانَكَ.</Text>
            <Text style={styles.text}> Ghufranak </Text>
            <Text style={styles.text}>Ik vraag U (Allah) om vergiffenis.</Text>
          </View>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
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
    paddingTop: 30,
    alignItems: "center",
  },
  title: {
    fontSize: 30,
  },
  text: {
    fontSize: 20,
    paddingTop: 50,
    flexShrink: 1,
    textAlign: "center",
  },
  cont: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
    padding: 10,
    margin: 10,
    borderWidth: 2.5,
    borderRadius: 20,
  },
});
