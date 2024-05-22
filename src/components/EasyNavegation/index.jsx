import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faHotel, faLuggageCart, faPlane,  } from "@fortawesome/free-solid-svg-icons";

const EasyNavegation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.nav}>
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home", "Go to Home" )}
      >
        <View style={styles.centralize}>
                <FontAwesomeIcon icon={faHotel} style={styles.p}/>
        <Text style={styles.p}>Hoteis</Text>
        </View>
      </TouchableOpacity>

      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Category", "Go to Category" )}
      >
        <View style={styles.centralize}>
        <FontAwesomeIcon icon={faPlane} style={styles.p}/>
        <Text style={styles.p}>Voos</Text>
        </View>
      </TouchableOpacity>
     
      
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Profile", "Go to Profile")}
      >
        <View style={styles.centralize}>
                <FontAwesomeIcon icon={faLuggageCart} style={styles.p}/>
        <Text style={styles.p}>Pacotes</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default EasyNavegation;
