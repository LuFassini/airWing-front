import { Text, View } from "react-native";

import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import EasyNavegation from "../../components/EasyNavegation";
import NewFooter from "../../components/NewFooter";

export default function Profile({ route }) {
  const { data } = route.params;

  return (
    <ScrollView>
    <View style={styles.container}>
                          <EasyNavegation />
                          <View style={styles.borda}>
                        <Text style={styles.titulo}>Perfil</Text>
                    </View>

      <View style={styles.user}>
        <Title title="User" />
        <Text style={styles.text}>{data.name}</Text>
        <Text style={styles.text}>{data.email}</Text>
        <Text style={styles.text}>{data.phone}</Text>
        <Text style={styles.text}>{data.address.city}</Text>
        <Text style={styles.text}>{data.address.state}</Text>

      </View>
      <NewFooter />
    </View>
    </ScrollView>
  );
}
