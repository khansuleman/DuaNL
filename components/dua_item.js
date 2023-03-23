import { Text, Pressable, StyleSheet } from "react-native";

export default function DuaItem({ dua }) {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.name}>{dua.arabic}</Text>
      <Text style={styles.name}>{dua.transliteration}</Text>
      <Text style={styles.name}>{dua.dutch}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
  },
  small: {
    fontSize: 10,
    fontWeight: "normal",
  },
});
