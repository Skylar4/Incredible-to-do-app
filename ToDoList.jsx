
import React from 'react'; 
import {
    Pressable,
    View,
    Text,
    ScrollView, 
    StyleSheet  
} from 'react-native';
export default ToDoList =  ({tasks}) =>{

    return(

 
<ScrollView style={styles.task}>
  {
    tasks.map((task) => (
      <div >
      <Text style={styles.taskText}>{task}</Text>
      </div>
      ))
  }
{/* <Pressable>
  <View style={[styles.task, styles.completed]}>
    <Text style={styles.taskText}>Do laundry</Text>
  </View>
</Pressable>
<Pressable>
  <View style={[styles.task]}>
    <Text style={styles.taskText}>Go to gym</Text>
  </View>
</Pressable>
<Pressable>
  <View style={[styles.task, styles.completed]}>
    <Text style={styles.taskText}>Walk dog</Text>
  </View>
</Pressable> */}
</ScrollView>
    )
}


const styles = StyleSheet.create({
    task: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
    },
    completed: {
      backgroundColor: '#e0e0e0',
    },
    taskText: {
      fontSize: 24,
    },

  });