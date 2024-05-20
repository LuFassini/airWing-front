import { View, TouchableOpacity, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";
import { Icon } from "@rneui/themed";

const EasyNavegation = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.nav}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home", "Go to Home" )}
      >
        <Icon name={"hotel"} style={styles.p}/>
        <Text style={styles.p}>Hoteis</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Category", "Go to Category" )}
      >
        <Icon name={"plane-departure"}/>
        <Text style={styles.p}>Voos</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Profile", "Go to Profile")}
      >
        <Icon name={"luggage"}/>
        <Text style={styles.p}>Pacotes</Text>
      </TouchableOpacity>
    </View>
  );
};

export default EasyNavegation;
