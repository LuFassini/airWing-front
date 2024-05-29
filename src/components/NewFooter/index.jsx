import { View, Text} from "react-native";


import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Logo from "../Logo";

const NewFooter = () => {
    return (
        <View style={styles.footer}>
            <Logo style={styles.logo} />
            <View style={styles.icons}>
            <FontAwesomeIcon icon={faFacebook} style={styles.icon}/>
            <FontAwesomeIcon icon={faInstagram} style={styles.icon}/>
            <FontAwesomeIcon icon={faLinkedin} style={styles.icon}/>
                </View>
                <Text style={styles.direitos}>Todos os Direitos Reservados © 2024</Text>
        </View>
    );
};

export default NewFooter;