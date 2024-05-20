import { View, Text } from "react-native";

import styles from "./styles";

const HandleHelperText = ({ title }) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default HandleHelperText;
