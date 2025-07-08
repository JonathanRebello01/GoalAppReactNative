// import { useState } from 'react';

// import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

// export default function App() {
//   const [enteredGoalText, setEnteredGoalText] = useState('')
//   const [courseGoals, setcourseGoals] = useState([])

//   function goalInputHandle(enteredText){
//       setEnteredGoalText(enteredText)
//   }

//   function addGoalHandle() {
//       setcourseGoals(currentCourseGoals => [...currentCourseGoals,
//         {text: enteredGoalText, id: Date.now().toString() },
//         ]);
//   }

//   return (
//     <View style={styles.appContainer}>
//   <View style={styles.inputContainer}>
//     <TextInput
//       placeholder="Seu Objetivo"
//       style={styles.textInput}
//       onChangeText={goalInputHandle}
//     />
//     <Button onPress={addGoalHandle} title="Novo Objetivo" />
//   </View>
//   <View style={styles.golContainer}>
//     <FlatList 
//     data={courseGoals}  
//     renderItem={itemData => {
//       itemData.index
//       return (
//       <View style={styles.goalItem}>
//         <Text style={styles.goalText}>{itemData.item.text}</Text>
//       </View>
//     )
//   }} 
//   keyExtractor={(item, index) => {
//     return item.id
//   }}
//     alwaysBounceHorizontal={false}
//     />
//   </View>
// </View>

//   );
// }

// const styles = StyleSheet.create({
//   appContainer: {
//     flex: 1,
//     padding: 50,
//     paddingHorizontal: 16,

    
//   },
//   inputContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginBottom: 24,
//     borderBottomWidth: 1,
//     borderBottomColor: "#CCCCCC"
    
//   },
//   textInput:{
//       borderWidth: 1,
//       borderColor: '#CCCCCC',
//       width: '65%',
//       marginRight: 8,
//       padding: 8
//   },
//   golContainer: {
//     flex: 5,
//   },
//   goalItem: {
//     margin: 8,
//     padding: 8,
//     borderRadius: 6,
//     backgroundColor: '#5e0acc',
//     color: 'white'

//   },
//   goalText: {
//     color: 'white'
//   }
// });

import { useState } from 'react';

import { GoalItem } from './components/GoalItens';

import { StyleSheet, View, Button, TextInput, FlatList } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('')
  const [courseGoals, setcourseGoals] = useState([])

  function goalInputHandle(enteredText){
      setEnteredGoalText(enteredText)
  }

  function addGoalHandle() {
      setcourseGoals(currentCourseGoals => [...currentCourseGoals,
        {text: enteredGoalText, id: Date.now().toString() },
        ]);
  }

  return (
    <View style={styles.appContainer}>
  <View style={styles.inputContainer}>
    <TextInput
      placeholder="Seu Objetivo"
      style={styles.textInput}
      onChangeText={goalInputHandle}
    />
    <Button onPress={addGoalHandle} title="Novo Objetivo" />
  </View>
  <View style={styles.golContainer}>
    <FlatList 
    data={courseGoals}  
    renderItem={itemData => {
      itemData.index
      return <GoalItem/>
      
  }} 
  keyExtractor={(item, index) => {
    return item.id
  }}
    alwaysBounceHorizontal={false}
    />
  </View>
</View>

  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 50,
    paddingHorizontal: 16,

    
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#CCCCCC"
    
  },
  textInput:{
      borderWidth: 1,
      borderColor: '#CCCCCC',
      width: '65%',
      marginRight: 8,
      padding: 8
  },
  golContainer: {
    flex: 5,
  }
});
