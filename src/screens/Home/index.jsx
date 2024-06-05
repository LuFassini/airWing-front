import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";

import styles from "./styles";
import { ScrollView } from "react-native-gesture-handler";
import EasyNavegation from "../../components/EasyNavegation";
import NewFooter from "../../components/NewFooter";

export default function Home() {
    return (

        <View style={styles.container}>
            <ScrollView>
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


                <View style={styles.hoteis}>

                    <View style={styles.negresco}>
                        <Image source={require('../../../assets/images/hotel-negresco.png')} style={{ width: 20, height: 20, marginTop: 30, marginBottom: 35, width: 350, height: 210, borderRadius: 5, marginLeft: 7, }} />
                        <Text style={styles.nomeHotel}>Hotel Negresco</Text>
                        <Text style={styles.localizacao}>Localização: França</Text>
                        <Text style={styles.preco}>Preço: R$ 9.089,00</Text>
                    </View>

                    <View style={styles.madrid}>
                        <Image source={require('../../../assets/images/eurostar.png')} style={{ width: 20, height: 20, marginTop: 30, marginBottom: 35, width: 350, height: 210, borderRadius: 5, marginLeft: 7, }} />
                        <Text style={styles.nomeHotel}>Hotel Eurostar Madrid Tower</Text>
                        <Text style={styles.localizacao}>Localização: Espanha </Text>
                        <Text style={styles.preco}>Preço: R$ 55.177,00</Text>
                    </View>

                    <View style={styles.anantara}>
                        <Image source={require('../../../assets/images/anantara_palazzo.png')} style={{ width: 20, height: 20, marginTop: 30, marginBottom: 35, width: 350, height: 210, borderRadius: 5, marginLeft: 7, }} />
                        <Text style={styles.nomeHotel}>Hotel Anantara Palazzo</Text>
                        <Text style={styles.localizacao}>Localização: Itália</Text>
                        <Text style={styles.preco}>Preço: R$ 4.417,00</Text>
                    </View>
                </View>

                <TouchableOpacity style={styles.botao}>
                    <Text style={styles.textoBotao}>Central de Ajuda!</Text>
                </TouchableOpacity>
                <NewFooter />
            </ScrollView>
        </View>


    );
}
