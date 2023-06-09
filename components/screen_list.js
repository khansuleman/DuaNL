import { StyleSheet, SectionList } from "react-native";
import { useQuery } from "@apollo/client";
import { GET_CATEGORIES_DUA } from "../gql/queries";
import Fetching from "./message_fetching";
import Error from "./message_error";
import Separator from "./seperator";

import DuaItem from "./dua_item";
import CategoryItem from "./dua_category_item";

export default function LijstDua() {
  const { data, loading, error } = useQuery(GET_CATEGORIES_DUA);

  if (loading) return <Fetching />;
  if (error) return <Error error={error} />;

  return (
    <SectionList
      sections={data.categories}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <DuaItem dua={item} />}
      ItemSeparatorComponent={Separator}
      renderSectionHeader={({ section }) => <CategoryItem category={section} />}
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
