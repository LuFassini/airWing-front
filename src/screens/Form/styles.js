import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#d3d3d3",
    borderRadius: 5,
  },
  user: {
  flex:1,
  },
  text: {
    fontSize: 16,
  },
  input: {
    height: 40,
    borderColor: '#00B5F2',
    borderWidth: 1, 
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5, // Borda arredondada
  },
  textSubTitle: {
    marginBottom: 10, 
    fontSize: 15, 
    lineHeight: 32,
    fontWeight: 'bold', 
    color: '#A1B65E', 
    marginTop: -10, 
  },
  passwordarea: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: "#C9D4FF",
    borderRadius: 5,
  },
  button2: {
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#C9D4FF",
    borderRadius: 5,
  },
  inputsenha: {
    height: 40,
    borderColor: '#00B5F2',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5, // Borda arredondada
    width: '75%',
  },
  popUp: {
 color: '#209F7C',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    marginRight: 50,
    color: '#00B5F2'
  }
});

export default styles;
