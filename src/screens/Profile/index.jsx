import { Text, View, TouchableOpacity } from "react-native";
import { useEffect, useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import styles from "./styles";
import NewFooter from "../../components/NewFooter";
import EasyNavegation from "../../components/EasyNavegation";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const navigation = useNavigation();
  const [users, setUser] = useState([]);
  const apiUrl = 'http://10.88.194.120:4000/users';
  const fetchUser = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await response.json();
      setUser(data.users);
      console.log('teste', data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  console.log("Usuários", users);

  const deleteUser = async (id) => {
    const url = '/users/${id}';
    try {
      await axios.delete(url);
      setUser(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error(error);
    }
  }

  const updateUser = async (id) => {
    try{
      navigation.navigate('Form', {id});
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <EasyNavegation />
        {
          users.map((user) => (
            <View key={user.id} style={styles.user}>
              <Text>Nome : {user.username}</Text>
              <Text>Data de nascimento : {user.datanascimento}</Text>
              <Text>Idade : {user.idade}</Text>
              <Text>Email : {user.email}</Text>
              <Text>CPF : {user.cpf}</Text>
              <Text>Telefone : {user.telephone}</Text>
              <Text>Sexo : {user.sexo}</Text>
              <Text>Senha : {user.senha}</Text>
              <TouchableOpacity onPress={() => deleteUser(user.id)} style={styles.button}>
                <Text>Excluir</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => updateUser(user.id)} style={styles.button}>
                <Text>Atualizar</Text>
              </TouchableOpacity>
            </View>
          ))
        }
      </View>
      <NewFooter />
    </ScrollView>
  );
}
