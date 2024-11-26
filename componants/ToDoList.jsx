
import React from 'react'; 
import {
    Pressable,
    View,
    Text,
    ScrollView, 
    StyleSheet  
} from 'react-native';
export default ToDoList =  ({tasks}) => {
  console.log("Received todolist:", tasks);
    return(

 
      <ScrollView>
      {tasks && tasks.length > 0 ? (
        tasks.map((task, index) => (
          <View key={index} style={styles.task}>
            <Text style={styles.taskText}>{task}</Text>
          </View>
        ))
      ) : (
        <Text style={styles.emptyMessage}>No tasks available</Text>
      )}
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