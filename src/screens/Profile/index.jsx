import { Text, View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import EasyNavegation from "../../components/EasyNavegation";
import NewFooter from "../../components/NewFooter";

export default function Profile({ route }) {
  const { data } = route.params;

  return (
    <View style={styles.container}>
                          <EasyNavegation />
      <Title title="Profile" />

      <TouchButton route="Home" title="Go to Home" />

      <TouchButton route="Category" title="Go to Category" />

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
  );
}
