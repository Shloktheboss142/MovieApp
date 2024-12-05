import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const MovieCard = ({ movie, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {movie.image && movie.image.original ? (
        <Image source={{ uri: movie.image.original }} style={styles.image} />
      ) : (
        <View style={styles.placeholder}>
          <Text style={styles.placeholderText}>No Image</Text>
        </View>
      )}
      <Text style={styles.title}>{movie.name || 'Untitled'}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { margin: 10, backgroundColor: '#222', borderRadius: 8, overflow: 'hidden' },
  image: { height: 200, width: '100%' },
  placeholder: { height: 200, width: '100%', justifyContent: 'center', alignItems: 'center', backgroundColor: '#444' },
  placeholderText: { color: '#aaa' },
  title: { color: '#fff', padding: 10, fontSize: 16 },
});

export default MovieCard;
