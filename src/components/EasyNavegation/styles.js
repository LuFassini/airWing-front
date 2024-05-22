import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    padding: 10,
    borderRadius: 5,
  },
  nav:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
    padding: 10,
    borderRadius: 5,
  },
  p: {
    color: "#130799",
    fontSize: 15,
  },
  centralize: {
    display: "flex",
    flexDirection: "row",
  },
});

export default styles;
