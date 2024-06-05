import { ScrollView } from "react-native-gesture-handler/lib/commonjs";
import styles from "./styles";
import { View, Image, Text } from "react-native";
import EasyNavegation from "../../components/EasyNavegation";
import NewFooter from "../../components/NewFooter";

export default function pacotes() {
  return (
    <View style={styles.container}>
        <ScrollView>
      <EasyNavegation />

      <View style={styles.quadro}>
        <Text style={styles.Titulo}>Conheça nossos pacotes de turismo.</Text>
      </View>

      <View style={styles.quadro2}>
        <Text style={styles.titulo}>Turismo Matinal</Text>
      </View>

      <View style={styles.dve}>
        <Image source={require('../../../assets/matinal.png')} style={styles.image}/>
      </View>

        <View style={styles.quadro3}>
          <Text style={styles.titulo}>Turismo Integral</Text>
        </View>

        <View style={styles.dve}>
        <Image source={require('../../../assets/integral.png')} style={styles.image}/>
        </View>

        <View style={styles.quadro4}>

          <Text style={styles.titulo}>Turismo Noturno</Text>
          </View>

          <View style={styles.dve}>
          <Image source={require('../../../assets/noturno.png')} style={styles.image}/>
          </View>


          <NewFooter />
          </ScrollView>
       
    </View>
    
  );
}