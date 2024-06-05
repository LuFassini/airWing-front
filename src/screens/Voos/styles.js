import { color } from "@rneui/base";
import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        flex: 1,
    },
    franca: {
        backgroundColor: 'rgba(203, 115, 228, 0.45)',
        padding: 20,
        margin: 20,
        borderRadius: 5,
    },
    espanha: {
        backgroundColor: 'rgba(203, 115, 228, 0.45)',
        padding: 20,
        margin: 20,
        borderRadius: 5,
    },
    eua: {
        backgroundColor: 'rgba(203, 115, 228, 0.45)',
        padding: 20,
        margin: 20,
        borderRadius: 5,
    },
    nomeVoo: {
        color: '#A000EB',
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold',
        marginBottom: 15

    },
    preco: {
        color: '#130799',
        fontSize: 23,
        textAlign: 'center',
    },
    quadro: {
        backgroundColor: 'rgba(203, 115, 228, 0.45)',
        padding: 20,
        margin: 20,
        borderRadius: 5,
    },
    quadro2: {
        backgroundColor: 'rgba(203, 115, 228, 0.45)',
        padding: 20,
        margin: 20,
        borderRadius: 5,
        marginTop : -10
    },
    titulo: {
        color: '#A000EB',
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
        width: 370,
        marginLeft: 22,
        height: 50, 
        marginTop: 20,
        borderRadius: 2,
        borderColor: '#00B5F2',
        backgroundColor: 'rgba(0, 181, 242, 0.45)',
        borderWidth: 2,
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
        backgroundColor: '#68DDBD',
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
    }
});

export default styles;