import { StyleSheet } from 'react-native';
import { DefaultTheme } from 'react-native-paper';

const { black } = DefaultTheme.colors;

const styles = StyleSheet.create({
    logo: {
        width: 100,
        height: 100     
    },
    container: {
        backgroundColor: '#fff',
        width: '100%',
        height: '100%',
        flex: 1,
        backgroundColor: '#f8f8ff',
    },
    quadro: {
        backgroundColor: 'rgba(104,221,189, 0.6)',
        padding: 20,
        margin: 20,
        marginBottom: 10,
        borderRadius: 5,
        fontWeight: 'bold', 
    },
    tituloh: {
        color: '#000',
        fontSize: 35,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    titulO: {
        color: '#209F7C',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold', 

    },
    titulo: {
        color: '#000',
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold', 
    },
   
    text1: {
        color: '#000',
        fontSize: 25,
        textAlign: 'center',
    },
    quadro2: {
        marginTop: 50,
        backgroundColor: 'rgba(231, 157, 252, 0.6)',
        padding: 20,
        borderRadius: 5,
    },
    hoteis: {
        color: '#130799',
        fontSize: 40,
        textAlign: 'center',
        fontWeight: 'bold', 
        marginTop: 10
    },

    image: {
        width: 418,
        height: 300,
        margin: 20,
        borderRadius: 10,
        marginLeft: 40,
    },
    quadro3: {
        marginTop: -17,
        backgroundColor: '#D9D9D9',
        padding: 20,
        borderRadius: 5,
        height: 200,
        marginBottom: 30

    },
    quadro4: {
        marginTop: 50,
        backgroundColor: 'rgba(231, 157, 252, 0.6)',
        padding: 20,
        borderRadius: 5,
    },
    voos: {
        color: '#130799',
        fontSize: 25,
        textAlign: 'center',
        fontWeight: 'bold', 
        marginTop: 10
    },
    line: {
        color: '#209F7C',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold', 
        marginTop: 3
    },
    dve: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        width: 400
        
    }
});

export default styles;

