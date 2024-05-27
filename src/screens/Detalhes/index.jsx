import { ScrollView } from "react-native-gesture-handler/lib/commonjs";
import styles from "./styles";
import { View, Image, Text } from "react-native";
import EasyNavegation from "../../components/EasyNavegation";

export default function Detalhes() {
  return (
    <View style={styles.container}>
        <ScrollView>
      <EasyNavegation />

      <View style={styles.quadro}>
        <Text style={styles.titulo}>Meu pedido</Text>
      </View>

      <View style={styles.voos}>
        <Text style={styles.voos}> Voos </Text>
      </View>

      <View style={styles.line}>
        <Text style={styles.line}> _____________________________________ </Text>
      </View>

      <View style={styles.dve}>
        <Image source={require('../../../assets/paris.png')} style={styles.image}/>
      </View>

      <View style={styles.quadro2}>
        <Text style={styles.titulo}>Turismo Matinal</Text>
      </View>


        <View style={styles.quadro3}>
          <Text style={styles.titulo}> Paris </Text>
          <Text style={styles.text}> 
          Ida: 01/06/2024
          Volta: 30/06/2024
          Preço:  R$ 25.000 </Text>
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

          </ScrollView>
       
    </View>
    
  );
}