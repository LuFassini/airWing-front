import { Button, Text, TextInput, View, TouchableOpacity, Image } from "react-native";
import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import { useEffect, useState } from "react";
import { TextInputMask } from "react-native-masked-text";
import { Icon } from "@rneui/base";
import { RadioButton } from 'react-native-paper';
import EasyNavegation from "../../components/EasyNavegation";
export default function Form() {
  const [name, setName] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [sex, setSex] = useState('');
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const [checked, setChecked] = useState('M');
  const [popUp, setPopUp] = useState(false);
  function handleUser() {
    if (!name || !birthYear || !email || !cpf || !phone || !sex || !password) {
      alert("Preencha todos os campos!");
      return;
    }

    if ( isNaN(birthYear)) {
      alert("Idade e Ano de Nascimento devem ser números!");
      return;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("Email inválido!");
      return;
    }

    console.log({
      name,
      birthYear,
      email,
      cpf,
      phone,
      sex,
      password,
    });
    setPopUp(true);
    clearFields();
  }

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
                     <Image source={require('../../../assets/images/logo.png')}
                    style={{
                        marginTop: 30,
                        width: 100,
                        height: 115,

                    }} />
                    <EasyNavegation />
      <Title title="Form" />

      <View style={styles.user}>
        <Text style={styles.textSubTitle}>Voe para varios lugares!</Text>
        <TextInput style={styles.input} placeholder="Nome Completo" onChangeText={setName} value={name} />
        <TextInput style={styles.input} placeholder="Ano de Nascimento" onChangeText={setBirthYear} value={birthYear} />
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
          value={phone}
          onChangeText={setPhone}
        />
        <RadioButton
        value="M"
        status={ checked === 'M' ? 'checked' : 'unchecked' }
        onPress={() => {
          setChecked('M');
          sexpassage('M');
        }
        }
      />
      <Text>Macho</Text>
      <RadioButton
        value="F"
        status={ checked === 'F' ? 'checked' : 'unchecked' }
        onPress={() => {
          setChecked('F');
          sexpassage('F');
        }
        }
      />
      <Text>FEMEA</Text>
        <View style={styles.passwordarea}>
          <TextInput style={styles.inputsenha} placeholder="Senha" secureTextEntry={showPassword} onChangeText={setPassword} value={password} />
          <TouchableOpacity onPress={showHidePassword} style={styles.button}>
            <Icon name={showPassword ? "lock" : "lock-open"} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleUser} style={styles.button} >
          <Icon name={"lock"} />
        </TouchableOpacity>
        {
          popUp && <Text style={styles.popUp}>Usuário cadastrado com sucesso!</Text>
        }
      </View>
      </ScrollView>
    </View>
  );
}
