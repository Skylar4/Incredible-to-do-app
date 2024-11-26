import React, { useState } from 'react';
import { Button } from 'react-native';
import ToDoForm from '../componants/ToDoForm';
import { View } from 'react-native-web';
import ToDoList from '../componants/ToDoList';
import MainLayout from '../layouts/mainLayout';

const HomeScreen = ({ navigation }) => {
  let toDolistarray = ['Do laundry', 'Go to gym', 'Walk dog'];

  const [todolist, setTodolist] = useState(toDolistarray);

  const addTask = (task) => {
    const oldlist = todolist;
    setTodolist([...oldlist, task]);
  };

  return (
    <MainLayout>
      <View>
    <ToDoList tasks = {todolist}/>
      <ToDoForm addTaskFunction={addTask} />
      <Button title="Go to About" onPress={() => navigation.navigate('About')} />
      </View>
      </MainLayout>
      
  );
};

export default HomeScreen;