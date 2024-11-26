/**
 * My To Do List App
 *
 * 
 */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/homescreen'
import AboutScreen from './screens/aboutscreen'


function App() {
  const Stack = createStackNavigator();

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="About" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>


  );
}
export default App;
{/* <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
<ToDoList tasks={todolist}/>
<ToDoForm addTaskFunction ={addTask}/>
</View> */}