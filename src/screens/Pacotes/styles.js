import { StyleSheet } from 'react-native';

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
    },
    quadro: {
        backgroundColor: 'rgba(104,221,189, 0.6)',
        padding: 20,
        margin: 20,
        marginBottom: 10,
        borderRadius: 5,
        fontWeight: 'bold', 
    },
    Titulo: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold', 
        color: '#209F7C',
    },
    titulo: {
        color: '#000',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold', 
    },
    texto: {
        color: '#000',
        fontSize: 20,
        textAlign: 'center',
    },
    quadro2: {
        marginTop: 50,
        backgroundColor: 'rgba(231, 157, 252, 0.6)',
        padding: 20,
        borderRadius: 5,
        
    },

    image: {
        width: 418,
        height: 300,
        margin: 20,
        borderRadius: 10,
        marginLeft: 40,
    },
    quadro3: {
        marginTop: 50,
        backgroundColor: 'rgba(231, 157, 252, 0.6)',
        padding: 20,
        borderRadius: 5,
    },
    quadro4: {
        marginTop: 50,
        backgroundColor: 'rgba(231, 157, 252, 0.6)',
        padding: 20,
        borderRadius: 5,
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

