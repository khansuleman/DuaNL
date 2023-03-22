import { StyleSheet, Text, View, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function WakeAndSleep() {
   

  
    return (
        <View style={styles.container}>
        <View style={styles.imageContainer}>
    
      <Text style={styles.text} >Dua Nederlands</Text>
      </View>
      <StatusBar style="auto" />
    </View>
    );
  }  

  
  const styles = StyleSheet.create({
      container: {
          flex:1,
        backgroundColor: '#f3f8ee',
        alignItems: 'center',
        justifyContent: 'center',
      },
      imageContainer: {
        flex: 1,
        paddingTop: 55,
        alignItems: 'center',
      },
      image: {
        width: 300,
        height: 300,
        borderRadius: 18,
      },
      title:{
          fontSize: 30,
      },
      rest:{ 
          fontSize: 20,
          paddingTop: 50,
          justifyContent: 'center',
          flexShrink: 1,
          marginLeft:10,
          marginRight:10,
          textAlign: 'center',
      }
    });