import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20
    },
    borda: {
        backgroundColor: "rgba(104, 221, 189, 0.6)",
        borderBottomColor: '#130799',
        paddingBottom: 10,
        width: 310,
        borderRadius: 10,
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        marginLeft: 28
    },
    titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#209F7C',
        opacity: 1,
        marginBottom: 10,
        marginTop: 11,
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center"
    },
    text1: {
        marginRight: 40,
    },
    linha: {
        fontSize: 16,
        color: '#209F7C',
        marginBottom: 10,
        marginTop: 10
    },
    subTitulo:{
        fontSize: 18,
        fontWeight: 'bold',
        color: '#209F7C',
        marginBottom: 10,
        marginTop: 10
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        borderColor:'#209F7C'
    },
    perguntas:{
        marginLeft: 28,
        alignItems:'center',
        justifyContent:'center',
        textAlign:'center'
        
    }
});
export default styles;