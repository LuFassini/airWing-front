import { ScrollView } from "react-native-gesture-handler/lib/commonjs";
import styles from "./styles";
import { View, Image, Text } from "react-native";
import EasyNavegation from "../../components/EasyNavegation";

export default function pacotes() {
  return (
    <View style={styles.container}>
        <ScrollView>
      <EasyNavegation />
      <View style={styles.quadro}>
        <Text style={styles.titulo}>Conheça nossos pacotes de turismo.</Text>
      </View>
      <View style={styles.quadro2}>
        <Text style={styles.texto}>Turismo Matinal</Text>
      </View>
      <View style={styles.dve}>
        <Image source={require('../../../assets/image.png')} style={styles.image}/>
      </View>
        <View style={styles.quadro}>
          <Text style={styles.titulo}>Turismo Integral</Text>
        </View>
        <Image source={require('../../../assets/voe.png')} style={styles.image}/>
        <View style={styles.quadro}>
          <Text style={styles.titulo}>Turismo Noturno</Text>
          </View>
       </ScrollView>
    </View>
  );
}