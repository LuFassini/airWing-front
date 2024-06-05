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
    marginTop: 10,
    fontSize: 25
  },

  sexM:{
    fontSize: 25,
    textAlign: 'center',
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center', 
    marginBottom: 10,

  },

  sexF: {
    fontSize: 25,
    textAlign: 'center',
    marginLeft: 5,
    justifyContent: 'center',
    alignItems: 'center', 
    marginBottom: 10,
  },

  butt:{
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginLeft: 15

  },
  
  entt: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
  },

  titles: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    marginRight: 50,
    alignItems: 'center',

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
    backgroundColor: 'rgba(19, 7, 153, 1, 0,6)',
    borderRadius: 5,
  },
  inputsenha: {
    height: 40,
    borderColor: '#00B5F2',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 5, // Borda arredondada
    width: 730,
    fontSize: 25
  },

  popUp: {
  color: '#209F7C',
  },

  button2:{
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
    backgroundColor: "#C9D4FF",
    borderRadius: 5,
  },

  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    marginRight: 50,
    color: '#00B5F2'
  },

  radioButton:{
  flexDirection: "row"
  },

  button:{
    padding: 10,
    backgroundColor: "#C9D4FF",
    borderRadius: 5,
    marginLeft: 10,
    marginTop: -8,
  }

});

export default styles;
