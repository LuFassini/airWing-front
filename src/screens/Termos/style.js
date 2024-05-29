import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#130799',
        opacity: 1,
        marginBottom: 10,
        marginTop:20,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    },
    subTitulo:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#0019FA',
        marginBottom: 10,
        marginTop: 25
    },
    borda:{
        backgroundColor:"rgba(231, 157, 252, 0.6)",
        borderBottomColor: '#130799',
        paddingBottom: 10,
        width:310,
        borderRadius: 20,
        marginTop: 30,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginLeft:28
    },
    borda2:{
        backgroundColor: 'rgba(78, 205, 248, 0.5)',
        paddingBottom: 10,
        width:310,
        borderRadius: 10,
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginTop:20,
        marginLeft:28
    },
    titulo2: {
        fontSize: 17,
        fontWeight: 'bold',
        color: '#126E8D',
        opacity: 1,
        marginBottom: 10,
        marginTop:11,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center", 
        width: -70
    },
    info: {
        fontSize: 16,
        color: '#000',
        marginBottom: 10,
        marginTop: 10
    },
    linha: {
        fontSize: 16,
        color: '#209F7C',
        marginBottom: 10,
        marginTop: 10
    }
});
export default styles;