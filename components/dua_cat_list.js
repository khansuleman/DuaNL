import { StyleSheet } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES } from "../gql/queries";
import Fetching from "./message_fetching";
import Error from "./message_error";
import Separator from "./seperator";
import CategoryItem from "./dua_category_item";

export default function LijstCat() {
  const { data, loading, error } = useQuery(GET_CATEGORIES);

  if (loading) return <Fetching />;
  if (error) return <Error error={error} />;

  return (
    <FlatList
      data={data.categories}
      renderItem={({ item }) => <CategoryItem category={item} />}
      keyExtractor={(index) => index}
      ItemSeparatorComponent={Separator}
    />
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
