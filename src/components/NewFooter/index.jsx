import { View, Text, Image } from "react-native";


import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Logo from "../Logo";

const NewFooter = () => {
    return (
        <View style={styles.footer}>
            <Logo left={27}/>
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