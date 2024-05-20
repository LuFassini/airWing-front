import React from 'react'
import { View, Text, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'
import styles from './style'

export default function Termos() {
    return (
        <View style={styles.container}>
            <ScrollView >
                <Image source={require('../../../assets/images/logo.png')}
                    style={{
                        marginTop: 30,
                        width: 100,
                        height: 115,

                    }} />
                <View>
                    <View style={styles.borda}>
                        <Text style={styles.titulo}>Termos e condições</Text>
                    </View>
                    <Text style={styles.subTitulo}>1- Reservas e pagamentos:</Text>
                    <Text style={styles.info} >• Todas as reservas estão sujeitas à disponibilidade e confirmação.</Text>
                    <Text style={styles.info}>• O pagamento integral ou um depósito específico é necessário no momento da reserva, conforme especificado para cada serviço. </Text>
                    <Text style={styles.info}>• Os preços estão sujeitos a alterações sem aviso prévio até que a reserva seja confirmada.</Text>
                    <Text style={styles.linha}>     ______________________________________________</Text>

                    <Text style={styles.subTitulo}>2- Cancelamentos e reembolsos:</Text>
                    <Text style={styles.info}>• Cancelamentos devem ser notificados por escrito e estão sujeitos a uma política de cancelamento específica para cada serviço reservado.</Text>
                    <Text style={styles.info}>• Reembolsos estão sujeitos aos termos e condições dos fornecedores de serviços, bem como às políticas de cancelamento da Air Wing Agência de Viagens.</Text>
                    <Text style={styles.linha}>     ______________________________________________</Text>

                    <Text style={styles.subTitulo}>3- Documentos de Viagem:</Text>
                    <Text style={styles.info}>• É responsabilidade do cliente garantir que todos os documentos de viagem, incluindo passaportes, vistos e seguro de viagem, estejam em ordem antes da partida.</Text>
                    <Text style={styles.info}>• A Air Wing Agência de Viagens não se responsabiliza por problemas decorrentes da falta de documentos de viagem adequados por parte do cliente.</Text>
                    <Text style={styles.linha}>     ______________________________________________</Text>
                
                    <Text style={styles.subTitulo}>4- Alterações de Viagem:</Text>
                    <Text style={styles.info}>• As alterações nas reservas estão sujeitas à disponibilidade e podem estar sujeitas a taxas adicionais.</Text>
                    <Text style={styles.info}>• A Air Wing Agência de Viagens fará o possível para acomodar solicitações de alterações, mas não pode garantir sua disponibilidade.</Text>
                    <Text style={styles.linha}>     ______________________________________________</Text>
                
                    <Text style={styles.subTitulo}>5- Responsabilidade:</Text>
                    <Text style={styles.info}>• A Air Wing Agência de Viagens atua apenas como intermediária entre o cliente e os fornecedores de serviços (companhias aéreas, hotéis, operadores turísticos, etc.).</Text>
                    <Text style={styles.info}>• A responsabilidade da Air Wing Agência de Viagens é limitada à prestação de serviços de reserva e organização de viagens conforme solicitado pelo cliente.</Text>
                    <Text style={styles.linha}>     ______________________________________________</Text>
               
                    <Text style={styles.subTitulo}>6- Seguro de Viagem:</Text>
                    <Text style={styles.info}>• Recomendamos fortemente que todos os clientes adquiram um seguro de viagem abrangente para cobrir imprevistos como cancelamentos, atrasos, bagagem perdida e despesas médicas.</Text>
                    <Text style={styles.linha}>     ______________________________________________</Text>

                    <Text style={styles.subTitulo}>7- Condições Específicas:</Text>
                    <Text style={styles.info}>• Alguns serviços, como pacotes turísticos ou passagens aéreas com tarifas restritas, podem estar sujeitos a condições específicas adicionais que serão comunicadas no momento da reserva.</Text>
                    <Text style={styles.linha}>     ______________________________________________</Text>

                    <Text style={styles.subTitulo}>8- Alterações nos Termos e Condições:</Text>
                    <Text style={styles.info}>• A Air Wing Agência de Viagens reserva-se o direito de alterar estes termos e condições a qualquer momento, sem aviso prévio. As alterações entrarão em vigor imediatamente após a publicação em nosso site ou notificação aos clientes.</Text>
                    
                    <View style={styles.borda2}>
                        <Text style={styles.titulo2}>Ao utilizar os serviços da Air Wing Agência de Viagens, você concorda em cumprir estes termos e condições. Se você tiver alguma dúvida, entre em contato conosco para obter esclarecimentos adicionais.</Text>
                    </View>

                </View>
            </ScrollView>
        </View>
    )
}
