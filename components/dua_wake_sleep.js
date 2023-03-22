import { StyleSheet, Text, View, Image, SafeAreaView,
    ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';


export default function DuaPage() {
   

  
    return (
        <SafeAreaView style={styles.container}>
        <ScrollView >
       
        <View style={styles.imageContainer}>
        <Text style={styles.title} >Dua's</Text>

    <View style={styles.cont}>
      <Text style={styles.text} >اَلْحَمْدُ لِلَّهِ الَّذِي عَافَانِي فِي جَسَدِي، وَرَدَّ عَلَيَّ رُوحِي، وَأَذِنَ لِي بِذِكْرِهِ</Text>
      <Text style={styles.text} > Alhamdu lillahil-lathee AAafanee fee jasadee waradda AAalayya roohee wa-athina lee bithikrih. </Text>
      <Text style={styles.text} >Alle lof is voor Allah die mij mijn gezondheid herstelde en mijn ziel teruggaf en mij toestond Hem te gedenken.</Text>
    </View>    

    <View style={styles.cont}>
      <Text style={styles.text} >لَا إِلَهَ إِلَّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ ، سُبْحَانَ اللهِ وَالْحَمْدُ لِلهِ ، وَلَا إِلَهَ إِلَّا اللهُ وَاللهُ أَكْـبَرُ ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللهِ الْعَلِيِّ الْعَظِيمِ رَبِّ اغْفِرْ لِي</Text>
      <Text style={styles.text} > La ilaha illal-lahu wahdahu la shareeka lah, lahul-mulku walahul-hamd, wahuwa AAala kulli shay-in qadeer, subhanal-lah, walhamdu lillah, wala ilaha illal-lah wallahu akbar, wala hawla wala quwwata illa billahil-AAaliyyil AAatheem. Rabbigh-fir lee </Text>
      <Text style={styles.text} >De profeet zei: "Wie 's nachts wakker wordt en dan zegt: 'Niemand heeft het recht aanbeden te worden behalve Allah, alleen zonder medestander, aan Hem behoort de soevereiniteit en de lof en Hij is over alles volkomen bekwaam. Hoe volmaakt Allah is, en alle lof is voor Allah, en niemand heeft het recht aanbeden te worden behalve Allah, Allah is de grootste en er is geen macht noch kracht behalve bij Allah, de Allerhoogste, de Allerhoogste en dan smeekt hij: 'O mijn Heer vergeef mij.' ...zal vergeven worden" "of hij zei: "en vraagt dan, hij zal verhoord worden.Als hij dan ablutie verricht en bidt, zal zijn gebed aanvaard worden".</Text>
    </View>   
    <View style={styles.cont}>
      <Text style={styles.text} >اَلْحَمْدُ لِلَّهِ الَّذي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ</Text>
      <Text style={styles.text} > Alhamdu lillahil-lathee ahyana baAAda ma amatana wa-ilayhin-nushoor. </Text>
      <Text style={styles.text} >Alle lof is voor Allah die ons het leven schonk nadat Hij het van ons had weggenomen en tot Hem is de opstanding.</Text>
    </View>   
 

      </View>
      <StatusBar style="auto" />

    </ScrollView>
    </SafeAreaView>
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
        paddingTop: 30,
        alignItems: 'center',
      },
      title:{
          fontSize: 30,
      },
      text:{ 
          fontSize: 20,
          paddingTop: 50,
          flexShrink: 1,
          textAlign: 'center',
      },
      cont:{ 
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        borderWidth: 2.5,
        borderRadius: 20,
    },
    });