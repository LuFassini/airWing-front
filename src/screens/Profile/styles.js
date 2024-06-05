import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8ff', // Fundo branco
    padding: 20,
  },
  user: {
    backgroundColor: "#D3EAFB", // Novo fundo azul suave para cartões de usuário
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  label: {
    fontWeight: "bold",
    color: "#130799", // Azul escuro para contraste
    marginBottom: 5,
    fontSize: 16,
  },
  value: {
    color: "#555555",
    marginBottom: 15,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  button: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: "center",
    marginHorizontal: 10,
  },
  updateButton: {
    backgroundColor: "#00B5F2", // Azul para atualização
  },
  deleteButton: {
    backgroundColor: "#A000EB", // Roxo para exclusão
  },
  buttonText: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 16,
  },
  header: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#209F7C", // Verde para o título
    marginBottom: 20,
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 1.5,
  },
});

export default styles;
