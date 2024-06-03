import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    footer: {
        width: "100%",
        height: 200,
        backgroundColor: 'rgba(104, 221, 189, 0.48)',
        justifyContent: "center",
        alignItems: "center",
        bottom: 0,


    },
    icons: {
        flexDirection: "row",
        justifyContent: "space-around",
        height: "10%",
        width: "30%",
    },
    icon: {
        width: 20,
        height: 20,
    },
    direitos: {
        fontSize: 15,
        color: "#130799",
        marginTop: 10,
    },
});

export default styles;