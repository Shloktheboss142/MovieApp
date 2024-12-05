// src/screens/SearchScreen.js
import React, { useState } from 'react';
import { View, TextInput, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

const SearchScreen = ({ navigation }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchMovies = (text) => {
    setQuery(text);
    axios.get(`https://api.tvmaze.com/search/shows?q=${text}`)
      .then(response => setResults(response.data))
      .catch(err => console.error(err));
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchBar}
        placeholder="Search Movies..."
        value={query}
        onChangeText={searchMovies}
      />
      <FlatList
        data={results}
        keyExtractor={(item) => item.show.id.toString()}
        renderItem={({ item }) => (
          <MovieCard movie={item.show} onPress={() => navigation.navigate('Details', { movie: item.show })} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  searchBar: {
    backgroundColor: '#333',
    color: '#fff',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
});

export default SearchScreen;
