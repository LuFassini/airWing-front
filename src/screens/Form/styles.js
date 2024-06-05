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
    backgroundColor: "#00B5F273",
    borderRadius: 5,
  },

  user: {
  flex:1,
  },


  text: {
    fontSize: 16,
  },

  sexF:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    fontSize: 30
  },
  
  sexM: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    fontSize: 30
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

  titles: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    marginRight: 50,
    color: '#1B0EB8',
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

  butt:{
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
    fontSize: 25
  },

  button2: {
    marginTop: 20,
    marginBottom: 20,
    padding: 10,
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
    backgroundColor: "#00B5F273",
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
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
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  
  },
radio2:{
  flexDirection: "column",
  alignItems: "center",
  marginRight: 10,
},
  button:{
    padding: 10,
    backgroundColor: "#00B5F273",
    borderRadius: 5,
    marginLeft: 10,
    marginTop: -8,
  },
  sexM:{
    fontSize: 26,
  }, 

  cad: {
    justifyContent: 'center',
    alignContent: 'center',
  },
  intext: {
    fontSize: 25,
  },

});

export default styles;
