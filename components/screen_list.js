import { StyleSheet, Text, View, Image,Pressable  } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { ListItem } from "@react-native-material/core";
import { NavigationContainer } from '@react-navigation/native';
import  DuaPage from './screen_dua'




export default function LijstDua({ navigation }) {
   
 
  
    return (
    <>
        <ListItem title="Dua wanneer je wakker wordt & gaat slapen" onPress={() => navigation.navigate('Wakker Worden & Slapen')}/>
        <ListItem title="Gebruik van toilet"  onPress={() => navigation.navigate('Dua Page')}/>
        <ListItem title="Eten & Drinken" onPress={() => navigation.navigate('Dua Page')} />
    </>
      
    );
  }

  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 8,
      },
      name: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      small: {
        fontSize: 10,
        fontWeight: 'normal',
      },
  });
  