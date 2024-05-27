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
    },
    quadro1: {
       padding: 20,
        margin: 20,
        borderRadius: 5,
       backgroundColor: 'rgba(0, 181, 242, 0.3)'
    },
    quadro: {
        padding: 20,
         margin: 20,
         borderRadius: 5,
        backgroundColor: 'rgba(0, 181, 242, 0.3)'
     },
    titulo1: {
        color: '#000',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold', 
    },

    titulo: {
        color: '#000',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold', 
        backgroundColor: 'rgba (107,216,253, 0.3)'
    },
    
    texto: {
        color: '#000',
        fontSize: 20,
        textAlign: 'center',
    },
   
    image: {
        width: 300,
        height: 300,
        margin: 20,
        borderRadius: 10,
        marginLeft: 50,
    },
    
  
});

export default styles;

