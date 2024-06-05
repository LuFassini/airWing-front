import { ScrollView, TextInput } from "react-native-gesture-handler/lib/commonjs";
import styles from "./styles";
import { View, Text, TouchableOpacity, Image} from "react-native";
import EasyNavegation from "../../components/EasyNavegation";
import NewFooter from "../../components/NewFooter";

export default function Voos() {

    return (
        <View style={styles.container}>
            <ScrollView>
                <EasyNavegation />

                <View style={styles.quadro}>
                    <Text style={styles.titulo}>Ida e Volta | Somente ida</Text>
                </View>

                <View style={styles.quadro2}>
                    <Text style={styles.titulo}>Nacional | Internacional</Text>
                </View>

                <View style={styles.Inputs}>
                    <TextInput style={styles.input}
                        placeholder="Origem"
                        onChangeText={text => onChangeText(text)}
                    />

                    <TextInput style={styles.input2}
                        placeholder="Destino"
                        onChangeText={text => onChangeText(text)}
                    />
                </View>

                <View style={styles.InputsMenor}>
                    <TextInput style={styles.inputM}
                        placeholder="Data de ida"
                        onChangeText={text => onChangeText(text)}
                    />

                    <TextInput style={styles.inputM2}
                        placeholder="Data de volta"
                        onChangeText={text => onChangeText(text)}
                    />  
                </View>

                <View style={styles.Inputs}>
                    <TextInput style={styles.input3}
                        placeholder="Passageiros"
                        onChangeText={text => onChangeText(text)}
                    />
                </View>

                <View style={styles.buscar}>
                <TouchableOpacity style={styles.inputBuscar}>
                    <Text style={styles.textoBotao}>Buscar Hotéis!</Text>
                </TouchableOpacity>
                </View>

                <Text style={styles.subTitulo}>Voos</Text>
                <Text style={styles.linha}>________________________________________________</Text>

                <View style={styles.voos}>

                    <View style={styles.franca}>
                        <Image source={require('../../../assets/images/franca.png')} style={{ width: 20, height: 20, marginTop: 30, marginBottom: 35, width: 350, height: 210, borderRadius: 5, marginLeft: -8 }} />
                        <Text style={styles.nomeVoo}>França</Text>
                        <Text style={styles.preco}>A partir de: R$ 9.089,00</Text>
                    </View>

                    <View style={styles.espanha}>
                        <Image source={require('../../../assets/images/espanha.png')} style={{ width: 20, height: 20, marginTop: 30, marginBottom: 35, width: 350, height: 210, borderRadius: 5, marginLeft: -8 }} />
                        <Text style={styles.nomeVoo}>Espanha</Text>
                        <Text style={styles.preco}>A partir de: R$ 10.177,00</Text>
                    </View>

                    <View style={styles.eua}>
                        <Image source={require('../../../assets/images/eua.png')} style={{ width: 20, height: 20, marginTop: 30, marginBottom: 35, width: 350, height: 210, borderRadius: 5, marginLeft: -8 }} />
                        <Text style={styles.nomeVoo}>Estados Unidos</Text>
                        <Text style={styles.preco}>A partir de: R$ 7.417,00</Text>
                    </View>
                </View>




                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textoBotao}>Central de Ajuda!</Text>
                </TouchableOpacity>
                <NewFooter />

            </ScrollView>
        </View>
    )
}