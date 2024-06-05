import axios from "axios";
import { Text, TextInput, View, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";
import { useEffect, useState } from "react";
import { TextInputMask } from "react-native-masked-text";
import { Icon } from "@rneui/base";
import { RadioButton } from 'react-native-paper';
import EasyNavegation from "../../components/EasyNavegation";
import NewFooter from "../../components/NewFooter";
export default function Form() {
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
  const [dados, setDados] = useState([]);


  const handleUserCreate = async (e) => {
    e.preventDefault();
    try {
      if (!username || !datanascimento || !email || !cpf || !telephone || !sexo || !senha) {
        setPopUpMessage("Preencha todos os campos!");
        setPopUp(true);
         return;
       }
   
       if ( isNaN(datanascimento)) {
         setPopUpMessage("Idade e Ano de Nascimento devem ser números!");
        setPopUp(true);
   
         return;
       }
   
       if (!email.includes("@") || !email.includes(".")) {
         setPopUpMessage("Email inválido!");
        setPopUp(true);
   
         return;
       }
      const response = await axios.post('/users',{ username , datanascimento , email, cpf , telephone , sexo, senha}  )
      if (Array.isArray(response.data.users)) {
        setDados(... dados, response.data.users);
        console.log(dados);
      }
      setName('');
      setBirthYear('');
      setEmail('');
      setCpf('');
      setPhone('');
      setSex('');
      setPassword('');
      setPopUpMessage("Usuário cadastrado com sucesso!");
      setPopUp(true);
      clearFields();
    } catch (error) {
      console.error(error);
    }
  }
useEffect(() => {
  async function fetchData() {
    try {
      const response = await axios.get('/users');
      setDados(response.data.users);
    } catch (error) {
      console.error(error);
    }
  }
  fetchData();
}, [dados]);


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
      <Text style={styles.titles}> Cadastro </Text>

      <View style={styles.user}>
        <TextInput style={styles.input} placeholder="Nome Completo" onChangeText={setName} value={username} />
        <TextInput style={styles.input} placeholder="Ano de Nascimento" onChangeText={setBirthYear} value={datanascimento} />
        <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} value={email} />
        <TextInputMask
          style={styles.input}
          placeholder={"CPF"}
          type={"cpf"}
          value={cpf}
          onChangeText={setCpf}
        />
        <TextInputMask
          style={styles.input}
          placeholder="Telefone"
          type={"cel-phone"}
          options={{
            maskType: 'BRL',
            withDDD: true,
            dddMask: '(99) ',
          }}
          value={telephone}
          onChangeText={setPhone}
        />
        <View style={styles.radioButton}>
        <RadioButton
        value="M"
        status={ checked === 'M' ? 'checked' : 'unchecked' }
        onPress={() => {
          setChecked('M');
          sexpassage('M');
        }
        }
      />
      <Text>Masculino</Text>
      <RadioButton
        value="F"
        status={ checked === 'F' ? 'checked' : 'unchecked' }
        onPress={() => {
          setChecked('F');
          sexpassage('F');
        }
        }
      />
      <Text>Feminino</Text>
      </View>

        <View style={styles.passwordarea}>
          <TextInput style={styles.inputsenha} placeholder="Senha" secureTextEntry={showPassword} onChangeText={setPassword} value={senha} />
          <TouchableOpacity onPress={showHidePassword} style={styles.button}>
            <Icon name={showPassword ? "lock" : "lock-open"} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleUserCreate} style={styles.button2} >
          <Icon name={"lock"} />
        </TouchableOpacity>
        {
          popUp && <Text style={styles.popUp}>{popUpMessage}</Text>
        }
      </View>
      <NewFooter />
    </ScrollView>
    </View>
  );
}

