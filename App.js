import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

export default function App() {
  const [entry, setEntry] = useState('');
  const [entries, setEntries] = useState([]);

  const addEntry = () => {
    if (entry.trim()) {
      setEntries([{ key: Date.now().toString(), text: entry }, ...entries]);
      setEntry('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Diary</Text>
      <TextInput
        style={styles.input}
        placeholder="Write something..."
        value={entry}
        onChangeText={setEntry}
      />
      <Button title="Add Entry" onPress={addEntry} />
      <FlatList
        data={entries}
        renderItem={({ item }) => <Text style={styles.entry}>{item.text}</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  entry: {
    fontSize: 16,
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
});