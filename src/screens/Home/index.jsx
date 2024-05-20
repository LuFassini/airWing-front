import { View, Image, Text } from "react-native";

import styles from "./styles";
import Title from "../../components/Title";
import { user } from "../../data/Profile";
import TouchButton from "../../components/TouchButton";
import { ScrollView } from "react-native-gesture-handler";

export default function Home() {
  return (
    <ScrollView>
    <View style={styles.container}>
       <Image source={require('../../../assets/images/logo.png')} 
        style={{ 
          marginTop: 30,
           width: 100, 
           height: 115,
           
           }} />
    </View>
    </ScrollView>
  );
}
