import { color } from "@rneui/base";
import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f8ff',
        width: '100%',
        height: '100%',
        flex: 1,
    },
    franca: {
        backgroundColor: '#F0CDFF',
        padding: 20,
        margin: 20,
        borderRadius: 5,
    },
    espanha: {
        backgroundColor: '#F0CDFF',
        padding: 20,
        margin: 20,
        borderRadius: 5,
    },
    eua: {
        backgroundColor: '#F0CDFF',
        padding: 20,
        margin: 20,
        borderRadius: 5,
    },
    nomeVoo: {
        color: '#64008C',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 15

    },
    preco: {
        color: '#C539FD',
        fontSize: 23,
        textAlign: 'center',
    },
    quadro: {
        backgroundColor: '#dfe9f5',
        padding: 20,
        margin: 20,
        borderRadius: 5,
    },
    quadro2: {
        backgroundColor: '#dfe9f5',
        padding: 20,
        margin: 20,
        borderRadius: 5,
        marginTop : -10
    },
    titulo: {
        color: '#009DCF',
        fontSize: 22,
        textAlign: 'center',
        fontWeight: 'bold',
    },


    input: {
        width: 370,
        marginLeft: 22,
        height: 50, 
        marginTop: 40,
        borderRadius: 2,
        borderColor: '#00B5F2',
        borderWidth: 2,
        fontSize: 20,
        color: 'gray'
    },
    input2: {
        width: 370,
        marginLeft: 22,
        height: 50, 
        marginTop: 8,
        borderRadius: 2,
        borderColor: '#00B5F2',
        borderWidth: 2,
        fontSize: 20,
        color: 'gray'
    },
    InputsMenor: {
        display: 'flex',
        flexDirection: 'row',
        color: 'gray'
    },
    inputM: {
        width: 180,
        marginLeft: 23,
        height: 50, 
        marginTop: 8,
        borderRadius: 2,
        borderColor: '#00B5F2',
        borderWidth: 2,
        fontSize: 20,
        color: 'gray'
    },
    inputM2: {
        width: 180,
        marginLeft: 10,
        height: 50, 
        marginTop: 8,
        borderRadius: 2,
        borderColor: '#00B5F2',
        borderWidth: 2,
        fontSize: 20,
        color: 'gray'
    },
    input3: {
        width: 370,
        marginLeft: 22,
        height: 50, 
        marginTop: 20,
        borderRadius: 2,
        borderColor: '#00B5F2',
        borderWidth: 2,
        fontSize: 20,
        color: 'gray'
    },

    inputBuscar: {
        backgroundColor: '#009DCF',
        width: 370,
        height: 60,
        borderRadius: 3,
        marginLeft: 22,
        marginTop: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 12,
       
    },

    subTitulo: {
        color: '#130799',
        fontSize: 30,
        textAlign: 'center',
        marginTop: 50,
        fontWeight: 'bold',
        color: '#1B0EB8',
    },

    linha: {
        fontSize: 16,
        color: '#209F7C',
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 50,
    },
    
    botao: {
        backgroundColor: '#9DD6AD',
        width: 370,
        height: 50,
        borderRadius: 5,
        marginLeft: 22,
        marginTop: 20,
        marginBottom: 20,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoBotao: {
        color: '#1A6069',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 5
    },

    textoBotao1: {
        color: '#f9f9f9',
        fontSize: 25,
        fontWeight: 'bold',
        // textAlign: 'center',
        // justifyContent: 'center',
        // alignItems: 'center',
        marginTop: 10,
        marginBottom: 5,
        marginLeft: -7
    },
    
});

export default styles;