/**
 * My To Do List App
 *
 * 
 */
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import React from 'react';
import{ View,  } from 'react-native'
function App() {
  return (
    <View>
      <ToDoList/>
      <ToDoForm/>
    </View>
  );
}
export default App;
