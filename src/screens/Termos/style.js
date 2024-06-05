import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f8f8ff',
        width: '100%',
        height: '100%',
        flex: 1,
    },

    titulo2: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#130799',
        opacity: 1,
        marginBottom: 10,
        marginTop:20,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
    },

    subTitulo:{
        fontSize: 23,
        fontWeight: 'bold',
        color: '#0019FA',
        marginBottom: 10,
        marginTop: 25,
        marginLeft: 10
    },

    borda:{
        backgroundColor:"rgba(231, 157, 252, 0.6)",
        borderBottomColor: '#130799',
        paddingBottom: 10,
        width:330,
        borderRadius: 20,
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginLeft: 45
        
    },

    borda2:{
        backgroundColor: 'rgba(78, 205, 248, 0.5)',
        paddingBottom: 10,
        width:330,
        borderRadius: 10,
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginLeft: 45,
        marginTop: 10
    },

    titulo3:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#130799',
        opacity: 1,
        marginBottom: 10,
        marginTop:20,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginLeft: 15,
    },
    
    info: {
        fontSize: 19,
        color: '#000',
        marginBottom: 10,
        marginTop: 10,
        marginLeft: 10,
        marginRight: 10
    },
    linha: {
        fontSize: 16,
        color: '#209F7C',
        marginBottom: 10,
        marginTop: 10
    }
});
export default styles;