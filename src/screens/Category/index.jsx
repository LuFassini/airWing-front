import { View } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import { user } from "../../data/Profile";
import EasyNavegation from "../../components/EasyNavegation";

export default function Category() {
  return (
    <View style={styles.container}>
                          <EasyNavegation />
      <Title title="Category" />

      <TouchButton route="Category" title="Go to Category" />

      <TouchButton route="Profile" title="Go to Profile" data={user} />
    </View>
  );
}
