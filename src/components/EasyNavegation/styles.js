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
    padding: 10,
    borderRadius: 5,
  },
  p: {
    color: "#130799",
    fontSize: 15,
  },
  centralize: {
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    flexDirection: "column",
  },
});

export default styles;
