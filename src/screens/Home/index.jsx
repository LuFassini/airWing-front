import { View, Image, Text } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import { user } from "../../data/Profile";
import TouchButton from "../../components/TouchButton";
import { ScrollView } from "react-native-gesture-handler";
import EasyNavegation from "../../components/EasyNavegation";

export default function Home() {
  return (
    <ScrollView>
    <View style={styles.container}>
    <EasyNavegation />
       
    </View>
    </ScrollView>
  );
}
