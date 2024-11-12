
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

 
<ScrollView>
  {
    tasks.map((task) => (
      <View style={styles.task} >
      <Text style={styles.taskText}>{task}</Text>
      </View>
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
      borderWidth: 2,
      borderColor: '#ccc',
      marginTop:10
    },
    completed: {
      backgroundColor: '#e0e0e0',
    },
    taskText: {
      fontSize: 24,
    },

  });