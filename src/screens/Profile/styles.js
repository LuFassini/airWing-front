import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    width: '100%',
    height: '100%',
    flex: 1,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#C9D4FF",
    borderRadius: 5,
  },
  user: {
    backgroundColor: '#D9D9D9',
    padding: 20,
    borderRadius: 5,
    height: 200,
    marginBottom: 30,
    width: "75%",
    marginLeft: "13%"

  },
  text: {
    fontSize: 16,
  },
  borda:{
    backgroundColor:"rgba(231, 157, 252, 0.6)",
    borderBottomColor: '#130799',
    paddingBottom: 10,
    width:310,
    borderRadius: 20,
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    marginBottom: 25,
    marginLeft: "15%"
},
titulo: {
  fontSize: 20,
  fontWeight: 'bold',
  color: '#130799',
  opacity: 1,
  marginBottom: 10,
  marginTop:20,
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center"
},
});

export default styles;
