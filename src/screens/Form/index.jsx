import { Button, Text, TextInput, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import Title from "../../components/Title";
import TouchButton from "../../components/TouchButton";
import { useEffect, useState } from "react";
import { TextInputMask } from "react-native-masked-text";
import { Icon } from "@rneui/base";

export default function Form() {
  const [name, setName] = useState("");
  const [birthYear, setBirthYear] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [phone, setPhone] = useState("");
  const [sex, setSex] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);

  function handleUser() {
    console.log({
      name,
      birthYear,
      age,
      email,
      cpf,
      phone,
      sex,
      password,
    });
    clearFields();
  }

  function clearFields() {
    setName("");
    setBirthYear("");
    setAge("");
    setEmail("");
    setCpf("");
    setPhone("");
    setSex("");
    setPassword("");
  }

  function showHidePassword() {
    setShowPassword(!showPassword);
  }
  return (
    <View style={styles.container}>
      <Title title="Form" />

      <TouchButton route="Home" title="Go to Home" />

      <TouchButton route="Category" title="Go to Category" />

      <View style={styles.user}>
        <Text style={styles.textSubTitle}>Voe para varios lugares!</Text>
        <TextInput style={styles.input} placeholder="Nome Completo" onChangeText={setName} value={name} />
        <TextInput style={styles.input} placeholder="Ano de Nascimento" onChangeText={setBirthYear} value={birthYear} />
        <TextInput style={styles.input} placeholder="Idade" onChangeText={setAge} value={age} />
        <TextInput style={styles.input} placeholder="Email" onChangeText={setEmail} value={email} />
        <TextInputMask
          style={styles.input}
          placeholder="CPF"
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
        <TextInput style={styles.input} placeholder="Sexo" onChangeText={setSex} value={sex} />
        <View style={styles.passwordarea}>
          <TextInput style={styles.inputsenha} placeholder="Senha" secureTextEntry={showPassword} onChangeText={setPassword} value={password} />
          <TouchableOpacity onPress={showHidePassword} style={styles.button}>
            <Icon name={showPassword ? "lock" : "lock-open"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
