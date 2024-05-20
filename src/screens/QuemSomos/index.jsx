import { ScrollView } from "react-native-gesture-handler/lib/commonjs";
import styles from "./styles";
import { View, Image, Text } from "react-native";

export default function QuemSomos() {
  return (
    <View style={styles.container}>
        <ScrollView>
      <Image source={require('../../../assets/images/logo.png')} style={styles.logo}/>
      
      <View style={styles.quadro}>
        <Text style={styles.texto}>Descubra quem somos, através das viagens que compartilhamos.</Text>
      </View>
      <View style={styles.quadro2}>
        <Text style={styles.texto}>A AirWing é uma empresa de turismo líder, oferecendo experiências excepcionais e serviços de alta qualidade globalmente. Com diversos destinos e pacotes, garante atendimento personalizado e conveniente através de inovação tecnológica, priorizando conforto, confiança e excelência.</Text>
      </View>
      </ScrollView>
    </View>
  );
}