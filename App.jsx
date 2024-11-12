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
  const addTask = (task) =>{
    const oldlist = todolist
    settodolist([...oldlist, task])

  }

  return (
    <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
      <ToDoList tasks={todolist}/>
      <ToDoForm addTaskFunction ={addTask}/>
    </View>
  );
}
export default App;
