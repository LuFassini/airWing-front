import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { StyleSheet } from "react-native-web";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        flex: 1,
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
        fontSize: 20,
        textAlign: 'center',
        
    },
    input: {
        width: 370,
        marginLeft: 22,
        height: 50, 
        marginTop: 40,
        borderRadius: 2,
        borderColor: '#00B5F2',
        borderWidth: 2,
    },
    input2: {
        width: 370,
        marginLeft: 22,
        height: 50, 
        marginTop: 8,
        borderRadius: 2,
        borderColor: '#00B5F2',
        borderWidth: 2,
    },
    InputsMenor: {
        display: 'flex',
        flexDirection: 'row',
    },
    inputM: {
        width: 180,
        marginLeft: 22,
        height: 50, 
        marginTop: 8,
        borderRadius: 2,
        borderColor: '#00B5F2',
        borderWidth: 2,
    },
    inputM2: {
        width: 180,
        marginLeft: 10,
        height: 50, 
        marginTop: 8,
        borderRadius: 2,
        borderColor: '#00B5F2',
        borderWidth: 2,
    },
    input3: {
        width: 370,
        marginLeft: 22,
        height: 50, 
        marginTop: 20,
        borderRadius: 2,
        borderColor: '#00B5F2',
        borderWidth: 2,
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
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textoBotao: {
        color: '#1A6069',
        fontSize: 20,
    }
});

export default styles;