import { View, Image, Text, TextInput, TouchableOpacity } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import { user } from "../../data/Profile";
import TouchButton from "../../components/TouchButton";
import { ScrollView } from "react-native-gesture-handler";
import EasyNavegation from "../../components/EasyNavegation";
import NewFooter from "../../components/NewFooter";

export default function Home() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <EasyNavegation />

                <View style={styles.Inputs}>
                    <TextInput style={styles.input}
                        placeholder="Para onde você vai?"
                        onChangeText={text => onChangeText(text)}
                    />
                    </View>
                     <View style={styles.InputsMenor}>
                    <TextInput style={styles.inputM}
                        placeholder="Data de entrada"
                        onChangeText={text => onChangeText(text)}
                    />

                    <TextInput style={styles.inputM2}
                        placeholder="Data de saída"
                        onChangeText={text => onChangeText(text)}
                    />  
                      </View>
                      <TextInput style={styles.input}
                        placeholder="Quartos e Hóspedes"
                        onChangeText={text => onChangeText(text)}
                    />
                <TouchableOpacity style={styles.inputBuscar}>
                    <Text style={styles.textoBotao}>Buscar Hotéis!</Text>
                </TouchableOpacity>

                <Text style={styles.subTitulo}>Hotéis</Text>
                <Text style={styles.linha}>________________________________________________</Text>


        <NewFooter />
      </View>
    </ScrollView>

  );
}
