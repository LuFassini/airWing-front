import React from 'react'
import { View, Text, Image, ScrollView, TextInput } from 'react-native'

import styles from './style'
import EasyNavegation from '../../components/EasyNavegation'

export default function CentralDeAjuda() {

    return (
        <View style={styles.container}>
            <ScrollView >
                <Image source={require('../../../assets/images/logo.png')}
                    style={{
                        marginTop: 30,
                        width: 100,
                        height: 115,

                    }} />
                <EasyNavegation />
                <View>
                    <View style={styles.borda}>

                        <Text style={styles.titulo}>Como podemos ajudar?</Text>
                    </View>
                    <Text>Digite aqui sua pergunta ou palavra-chave.</Text>
                    <Text style={styles.linha}>     ______________________________________________</Text>

                      <View style={styles.perguntas}>
                    <TextInput
                        style={styles.input}
                        placeholder="Deixe sua dúvida:"
                        onChangeText={text => onChangeText(text)}
                    />
                     <Text style={styles.subTitulo}>Perguntas frequentes:</Text>
                     <Text style={styles.linha}>     ______________________________________________</Text>

                    <Text>Quer cancelar sua compra? </Text>
                    <Text style={styles.linha}>     ________________________________________________</Text>

                    <Text>A companhia aérea cancelou meu voo.E agora? </Text>
                    <Text style={styles.linha}>   ________________________________________________</Text>

                    <Text>Como realizo o check-in do meu voo no embarque? </Text>
                    <Text style={styles.linha}> ___________________________________________________</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}
