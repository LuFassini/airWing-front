import { ScrollView } from "react-native-gesture-handler/lib/commonjs";
import styles from "./styles";
import { View, Image, Text } from "react-native";
import EasyNavegation from "../../components/EasyNavegation";

export default function QuemSomos() {
  return (
    <View style={styles.container}>
        <ScrollView>
      <EasyNavegation />
      <View style={styles.quadro}>
        <Text style={styles.titulo}>Descubra quem somos, através das viagens que compartilhamos.</Text>
      </View>
      <View style={styles.quadro2}>
        <Text style={styles.texto}>A AirWing é uma empresa de turismo líder, oferecendo experiências excepcionais e serviços de alta qualidade globalmente. Com diversos destinos e pacotes, garante atendimento personalizado e conveniente através de inovação tecnológica, priorizando conforto, confiança e excelência.</Text>
      </View>
      <View style={styles.dve}>
        <Image source={require('../../../assets/desenho.png')} style={styles.image}/>
        <View style={styles.quadro}>
          <Text style={styles.titulo}>Descubra</Text>
        </View>
        <Image source={require('../../../assets/voe.png')} style={styles.image}/>
        <View style={styles.quadro}>
          <Text style={styles.titulo}>Voe</Text>
          </View>
          <Image source={require('../../../assets/encante-se.png')} style={styles.image}/>
          <View style={styles.quadro}>
            <Text style={styles.titulo}>Encante-se</Text>
            </View>
      </View>
      <View style={styles.quadro3}>
        <Text style={styles.texto}>A AirWing busca liderar o mercado global de viagens personalizadas, oferecendo experiências memoráveis e inovadoras. Seu propósito é facilitar a exploração do mundo de forma acessível e sustentável, enriquecendo vidas e promovendo o desenvolvimento das comunidades locais.</Text>
      </View>
      <View style={styles.quadro4}></View>
      
      </ScrollView>
    </View>
  );
}