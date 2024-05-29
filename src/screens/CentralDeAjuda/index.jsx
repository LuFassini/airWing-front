import React from 'react'
import { View, Text, ScrollView, TextInput } from 'react-native'
import EasyNavegation from '../../components/EasyNavegation'
import styles from "../CentralDeAjuda/style.js";
import NewFooter from '../../components/NewFooter/index.jsx';

export default function CentralDeAjuda() {

    return (
        <View style={styles.container}>
            <ScrollView >
                
                <EasyNavegation />
                <View>
                    <View style={styles.borda}>
                        <Text style={styles.titulo}>Como podemos ajudar?</Text>
                    </View>
                    
                    <Text style={styles.texto1}>Digite aqui sua pergunta ou palavra-chave.</Text>
                    
                      <View style={styles.perguntas}>
                    <TextInput
                        style={styles.input}
                        placeholder="Deixe sua dúvida aqui:"
                        onChangeText={text => onChangeText(text)}
                    />

                     <Text style={styles.subTitulo}>Perguntas frequentes...</Text>
                     <Text style={styles.linha1}>________________________________________________</Text>

                    <Text style={styles.texto2}>Quer cancelar sua compra? </Text>
                    <Text style={styles.linha2}>________________________________________________</Text>

                    <Text style={styles.texto3}>A companhia aérea cancelou meu voo, e agora?</Text>
                    <Text style={styles.linha3}>________________________________________________</Text>

                    <Text style={styles.texto4}>Como realizo o check-in do meu voo no embarque?</Text>
                    <Text style={styles.linha4}>________________________________________________</Text>
                    </View>
                </View>
                <NewFooter />
            </ScrollView>
        </View>
    )
}
