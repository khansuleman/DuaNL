import { Text, Pressable, StyleSheet } from "react-native";

export default function CategoryItem({ category }) {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.name}>{category.type}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
  name: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    color: "green",
  },
});
