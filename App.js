import { StatusBar } from 'expo-status-bar';
import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [inputText, setInputText] = useState('');
  const [notes, setNotes] = useState([]); // Use an array to store notes
  const inputRef = useRef(null);

  function submitText() {
    if (inputText.trim() !== '') { // Check if the inputText is not just empty spaces
      setNotes([...notes, inputText]); // Add the new note to the notes array
      setInputText('');
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }

  return (
    <ScrollView style={styles.scrollView}>
      <View style={styles.container}>
        <Text style={styles.header}>Welcome to Your Notebook</Text>
        <TextInput
          ref={inputRef}
          style={styles.textInput}
          placeholder="Write something..."
          placeholderTextColor="#999"
          value={inputText}
          onChangeText={text => setInputText(text)}
          onSubmitEditing={submitText}
          returnKeyType='send'
        />
        <Button title='Save Note' onPress={submitText} color="#5C6BC0"/>
        <StatusBar style="auto" />
        <View style={styles.notesContainer}>
          {notes.map((note, index) => (
            <Text key={index} style={styles.note}>{note}</Text>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: 'ivory',
  },
  container: {
    flex: 1,
    backgroundColor: 'ivory',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  textInput: {
    width: '100%',
    backgroundColor: '#fff',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: '#333',
    marginVertical: 10,
  },
  notesContainer: {
    width: '100%',
    marginTop: 20,
  },
  note: {
    backgroundColor: '#f0f0f0',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: '#333',
    marginBottom: 10,
  },
  header: {
    fontSize: 24,
    color: '#333',
    fontWeight: 'bold',
    marginVertical: 20,
  },
});
