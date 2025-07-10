import { View, Button, TextInput, StyleSheet, Modal, Image } from 'react-native';
import { useState } from 'react';


function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  function goalInputHandle(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandle() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText('');
  }

  return (
    <Modal visible={props.visible} animationType="slide" >
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/sticky-note.png')} style={styles.image} />
        <TextInput
          placeholder="Seu Objetivo
          "
          style={styles.textInput}
          onChangeText={goalInputHandle}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancelar" onPress={props.onCancel} color="#f31282"/>
          </View>
          <View style={styles.button}>
            <Button onPress={addGoalHandle} title="Salvar" color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    padding:16,
    alignItems: 'center',
    backgroundColor: '#1e085a'
  },
  image: {
    width: 100,
    height: 100,
    margin: 100
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    color: "#120438",
    borderRadius: 6,
    width: '100%',
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row"
  },
  button: {
    width: "50%",
    marginHorizontal: 8  
  },
});
