import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./components/screen_home";
import LievelingsDua from "./components/screen_fav";
import LijstDua from "./components/screen_list";
import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import configData from "./config.json";

const client = new ApolloClient({
  uri: configData.qlendpoint,
  headers: {
    "x-hasura-admin-secret": configData.qlkey,
  },
  cache: new InMemoryCache(),
});

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              switch (route.name) {
                case "Home":
                  iconName = focused ? "home-sharp" : "home-outline";
                  break;
                case "Soorten Dua":
                  iconName = focused ? "book-sharp" : "book-outline";
                  break;
                case "Favoriete Dua":
                  iconName = focused ? "star-sharp" : "star-outline";
                  break;
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: "green",
            tabBarInactiveTintColor: "gray",
          })}
        >
          <Tab.Screen name="Home" component={HomeScreen} />
          <Tab.Screen name="Soorten Dua" component={LijstDua} />
          <Tab.Screen name="Favoriete Dua" component={LievelingsDua} />
        </Tab.Navigator>
      </NavigationContainer>
    </ApolloProvider>
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
