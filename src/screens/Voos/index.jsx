import { ScrollView, TextInput } from "react-native-gesture-handler/lib/commonjs";
import styles from "./styles";
import { View, Text, TouchableOpacity } from "react-native";
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
                    <TextInput style={styles.inputBuscar} 
                        placeholder="Buscar Voos"
                        onChangeText={text => onChangeText(text)}
                        />
                </View>

                <Text style={styles.subTitulo}>Voos</Text>
                <Text style={styles.linha}>________________________________________________</Text>

                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textoBotao}>Central de Ajuda!</Text>
                </TouchableOpacity>
                <NewFooter />

            </ScrollView>
        </View>
    )
}