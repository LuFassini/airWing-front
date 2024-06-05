import { Text, TextInput, View, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { useEffect, useState } from "react";
import { TextInputMask } from "react-native-masked-text";
import { Icon } from "@rneui/base";
import { RadioButton } from 'react-native-paper';
import EasyNavegation from "../../components/EasyNavegation";
import NewFooter from "../../components/NewFooter";
import { useNavigation } from "@react-navigation/native";

export default function Form({ route }) {
  const navigation = useNavigation();
  let { user, edit } = route.params;

  const [username, setName] = useState("");
  const [datanascimento, setBirthYear] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [telephone, setPhone] = useState("");
  const [sexo, setSex] = useState('');
  const [senha, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [checked, setChecked] = useState('M');
  const [popUp, setPopUp] = useState(false);
  const [popUpMessage, setPopUpMessage] = useState('');
  const [isUpdate, setIsUpdate] = useState(edit);




  const handleUserCreate = async () => {
  
      if (isUpdate) {
        const response = await fetch(`http://10.88.200.141:4000/users/${user.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, datanascimento, email, cpf, telephone, sexo, senha }),
        });
        if (response.ok) {
          console.log('Dados enviados com sucesso para o back-end');
          navigation.navigate("Perfil", edit = false);
        }
      }else{


    console.log(username, datanascimento, email, cpf, telephone, sexo, senha);
    try {
      const response = await fetch('http://10.88.200.141:4000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, datanascimento, email, cpf, telephone, sexo, senha }),
      });
      if (response.ok) {
        console.log('Dados enviados com sucesso para o back-end');
      }
    } catch (error) {
      console.error(error);
    }
  }
};
  useEffect(() => {
    if (edit) {
      setName(user.username);
      setBirthYear(user.datanascimento);
      setEmail(user.email);
      setCpf(user.cpf);
      setPhone(user.telephone);
      setSex(user.sexo);
      setPassword(user.senha);
      setIsUpdate(true);
      return;
    }
    async function fetchData() {
      try {
        const response = await fetch('http://10.88.200.141:4000/users');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        clearFields();
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, [user, edit]);


  function clearFields() {
    setName("");
    setBirthYear("");
    setEmail("");
    setCpf("");
    setPhone("");
    setSex("");
    setPassword("");
  }

  function showHidePassword() {
    setShowPassword(!showPassword);
  }
  const sexpassage = (value) => {
    setSex(value)
  }

  useEffect(() => {
    if (popUp) {
      setTimeout(() => {
        setPopUp(false);
      }, 3555);
    }
  }, [popUp]);

  return (
    <View style={styles.container}>

      <ScrollView >


        <EasyNavegation />

        <View style={styles.cad}>
          <Text style={styles.titles}> Cadastro </Text>
        </View>

        <View style={styles.user}>
          <TextInput style={styles.input} placeholder="Nome Completo" onChangeText={setName} value={username} />
          <TextInput style={styles.input} placeholder="Ano de Nascimento" onChangeText={setBirthYear} value={datanascimento} />
          <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} value={email} />
          <TextInput style={styles.input} placeholder="Cpf" onChangeText={setCpf} value={cpf} />
          <TextInput style={styles.input} placeholder="Telefone" onChangeText={setPhone} value={telephone} />
          <View style={styles.radioButton}>
            <View style={styles.radio2}>
              <RadioButton
                value="M"
                status={checked === 'M' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked('M');
                  sexpassage('M');
                }
                }
              />

              <Text style={styles.sexM}>Masculino</Text>
            </View>
            <View style={styles.radio2}>
              <RadioButton
                value="F"
                status={checked === 'F' ? 'checked' : 'unchecked'}
                onPress={() => {
                  setChecked('F');
                  sexpassage('F');
                }
                }
              />

              <Text style={styles.sexM}>Feminino</Text>
            </View>
          </View>

          <View style={styles.passwordarea}>
            <TextInput style={styles.inputsenha} placeholder="Senha" secureTextEntry={showPassword} onChangeText={setPassword} value={senha} />
            <TouchableOpacity onPress={showHidePassword} style={styles.button}>
              <Icon name={showPassword ? "lock" : "lock-open"} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleUserCreate}>
        <Text>{isUpdate ? "Salvar Alterações" : "Criar Usuário"}</Text>
      </TouchableOpacity>

      {isUpdate && (
        <TouchableOpacity style={styles.button} onPress={clearFields}>
          <Text>Cancelar Edição</Text>
        </TouchableOpacity>
      )}
      {
            popUp && <Text style={styles.popUp}>{popUpMessage}</Text>
          }
        </View>
        <NewFooter />
      </ScrollView>
    </View>
  )
};

