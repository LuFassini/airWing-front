import { ScrollView } from "react-native-gesture-handler/lib/commonjs";
import styles from "./styles";
import { View, Image, Text } from "react-native";
import EasyNavegation from "../../components/EasyNavegation";
import NewFooter from "../../components/NewFooter";

export default function Detalhes() {
  return (
    <View style={styles.container}>
        <ScrollView>
      <EasyNavegation />

      <View style={styles.quadro}>
        <Text style={styles.titulO}>Meu pedido</Text>
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

        <View style={styles.quadro3}>
          <Text style={styles.titulo}> França </Text>
          <Text style={styles.text1}> Ida: 01/06/2024 </Text>
          <Text style={styles.text1}> Volta: 30/06/2024 </Text>
          <Text style={styles.text1}> Preço:  R$ 25.000 </Text>
        </View>

        <View style={styles.dve}>
           <Image source={require('../../../assets/majestoso.png')} style={styles.image}/>
        </View>

        <View style={styles.hoteis}>
        <Text style={styles.hoteis}> Hotéis </Text>
      </View>

      <View style={styles.line}>
        <Text style={styles.line}> _____________________________________ </Text>
      </View>

        <View style={styles.quadro3}>
          <Text style={styles.titulo}> Barrière Le Majestic </Text>
          <Text style={styles.text1}> Entrada: 01/06/2024</Text>
          <Text style={styles.text1}> Saida: 30/06/2024 </Text>
          <Text style={styles.text1}> Preço:  R$ 13.967 </Text>
        </View>
        

          

          <NewFooter />
          </ScrollView>
       
    </View>
    
  );
}