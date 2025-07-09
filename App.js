import GoalItem from './components/GoalItens';
import GoalInput from './components/GoalInputs';
import { StatusBar } from 'expo-status-bar';

import { StyleSheet, View, FlatList, Button, image } from 'react-native';

import { useEffect } from 'react';

import { useState } from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { endEvent } from 'react-native/Libraries/Performance/Systrace';


export default function App() {
  const [modalVisibility, setmodalVisibility] = useState(false)
  const [courseGoals, setcourseGoals] = useState([])


  useEffect(() => {
    async function loadGoals() {
      try {
        const storedGoals = await AsyncStorage.getItem('goals');
        if (storedGoals) {
          setcourseGoals(JSON.parse(storedGoals));
        }
      } catch (error) {
        console.error('Erro ao carregar objetivos:', error);
      }
    }
    loadGoals();
  }, []);



  function startAddGoalHandle() {
    setmodalVisibility(true)
  }

  function endAddGoalHandle() {
    setmodalVisibility(false)
  }

 
  async function addGoalHandle(goalText) {
    try {
      const newGoal = { text: goalText, id: Date.now().toString() };
      const updatedGoals = [...courseGoals, newGoal];
      setcourseGoals(updatedGoals);
      await AsyncStorage.setItem('goals', JSON.stringify(updatedGoals));
    } catch (error) {
      console.error('Erro ao salvar objetivo:', error);
    }
    endAddGoalHandle()
  }
  
  


  async function deleteGoalHandler(id) {
    try {
      const updatedGoals = courseGoals.filter((goal) => goal.id !== id);
      setcourseGoals(updatedGoals);
      await AsyncStorage.setItem('goals', JSON.stringify(updatedGoals));
    } catch (error) {
      console.error('Erro ao excluir objetivo:', error);
    }
  }
  


  return (
    <>
      <StatusBar style="auto" />
      <View style={styles.appContainer}>

        <View style={styles.button}>
          <Button title="Adicionar tópico de convrsa" color={"#a065ec"} onPress={startAddGoalHandle} />
        </View>
        <GoalInput visible={modalVisibility} onAddGoal={addGoalHandle} onCancel={endAddGoalHandle} />
        <View style={styles.goalsContainer}>
          <FlatList
            data={courseGoals}
            renderItem={itemData => {
              itemData.index
              return (
                <GoalItem
                  id={itemData.item.id}
                  text={itemData.item.text}
                  onDeleteItem={deleteGoalHandler}
                />
              )

            }}
            keyExtractor={(item, index) => {
              return item.id
            }}
            alwaysBounceHorizontal={false}
          />
        </View>
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16
  },
  goalsContainer: {
    flex: 5,

  },
  button: {
    marginTop: 20
  }
});
