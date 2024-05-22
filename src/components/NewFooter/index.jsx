import { View, Text, Image } from "react-native";


import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const NewFooter = () => {
    return (
        <View style={styles.footer}>
            <View style={styles.icons}>
            <FontAwesomeIcon icon={faFacebook} style={styles.icon}/>
            <FontAwesomeIcon icon={faInstagram} style={styles.icon}/>
            <FontAwesomeIcon icon={faLinkedin} style={styles.icon}/>
                </View>
                <Text style={{color: "white"}}>© Todos os Direitos Reservados</Text>
        </View>
    );
};

export default NewFooter;