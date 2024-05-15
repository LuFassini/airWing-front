import { View, Text, Image } from "react-native";


import styles from "./styles";

const NewFooter = () => {
    return (
        <View style={styles.footer}>
            <View style={styles.icons}>
                <Image source={require('./../../../assets/instagram-white-icon.png')} style={styles.icon} />
                <Image source={require('./../../../assets/phone-xxl.png')} style={styles.icon} />
                <Image source={require('./../../../assets/github.png')} style={styles.icon} />
                </View>
                <Text style={{color: "white"}}>© Todos os Direitos Reservados</Text>
        </View>
    );
};

export default NewFooter;