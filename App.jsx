/**
 * My To Do List App
 *
 * 
 */
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
import React from 'react';
import{ View,  } from 'react-native'
import { useState } from 'react';
function App() {
  let todolistarray = [  
    'Do laundry',
    'Go to gym',
    'Walk dog']

  const [todolist, settodolist] = useState(todolistarray);


  return (
    <View>
      <ToDoList tasks={todolist}/>
      <ToDoForm/>
    </View>
  );
}
export default App;
