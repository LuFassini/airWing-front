import { ScrollView } from "react-native-gesture-handler/lib/commonjs";
import styles from "./styles";
import { View, Image, Text } from "react-native";
import EasyNavegation from "../../components/EasyNavegation";
import NewFooter from "../../components/NewFooter";

export default function Equipe() {
  return (
    <View style={styles.container}>
        <ScrollView>
      <EasyNavegation />

      <View style={styles.quadro1}>
        <Text style={styles.titulo1}>Nosso time transforma sonhos em destinos inesquecíveis.</Text>
       
      </View>

      <View style={styles.quadro2}>
        <Text style={styles.texto}></Text>
      </View>

      <View style={styles.dve}>

      <Image source={require('../../../assets/luana.png')} style={styles.image}/>
        <View style={styles.quadro}>
        <Text style={styles.titulo}>Luana Fassini</Text>
        </View>

        
        <Image source={require('../../../assets/isabelle.png')} style={styles.image}/>
        <View style={styles.quadro}>
        <Text style={styles.titulo}>Isabelle Barquilia</Text>
        </View>

          
        <Image source={require('../../../assets/godoy.png')} style={styles.image}/>
          <View style={styles.quadro}>
          <Text style={styles.titulo}>Guilherme Sachinelli</Text>
          </View>

          <Image source={require('../../../assets/richard.png')} style={styles.image}/>
          <View style={styles.quadro}>
          <Text style={styles.titulo}>Richard Macedo</Text>
          </View>

          <Image source={require('../../../assets/lima.png')} style={styles.image}/>
          <View style={styles.quadro}>
          <Text style={styles.titulo}>Guilherme Lima</Text>
          </View>

      </View>
      <NewFooter />
      </ScrollView>
    </View>
  );
}