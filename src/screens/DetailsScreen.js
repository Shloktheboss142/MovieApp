import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';

const DetailsScreen = ({ route }) => {
  const { movie } = route.params;

  const openLink = (url) => {
    if (url) Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.container}>
      {/* Show Image */}
      <Image source={{ uri: movie.image?.original }} style={styles.image} />

      {/* Show Title */}
      <Text style={styles.title}>{movie.name}</Text>

      {/* Genres */}
      <Text style={styles.info}>
        <Text style={styles.label}>Genres: </Text>
        {movie.genres.join(', ')}
      </Text>

      {/* Status and Schedule */}
      <Text style={styles.info}>
        <Text style={styles.label}>Status: </Text>
        {movie.status}
      </Text>
      <Text style={styles.info}>
        <Text style={styles.label}>Premiered: </Text>
        {movie.premiered}
      </Text>
      {movie.schedule?.days?.length > 0 && (
        <Text style={styles.info}>
          <Text style={styles.label}>Schedule: </Text>
          {movie.schedule.days.join(', ')} at {movie.schedule.time}
        </Text>
      )}

      {/* Rating */}
      <Text style={styles.info}>
        <Text style={styles.label}>Rating: </Text>
        {movie.rating?.average || 'N/A'}
      </Text>

      {/* Network */}
      {movie.network && (
        <Text style={styles.info}>
          <Text style={styles.label}>Network: </Text>
          {movie.network.name} ({movie.network.country.name})
        </Text>
      )}

      {/* Summary */}
      <Text style={styles.sectionHeader}>Summary</Text>
      <Text style={styles.summary}>{movie.summary.replace(/<[^>]+>/g, '')}</Text>

      {/* External Links */}
      <Text style={styles.sectionHeader}>Links</Text>
      {movie.officialSite && (
        <TouchableOpacity onPress={() => openLink(movie.officialSite)}>
          <Text style={styles.link}>Official Website</Text>
        </TouchableOpacity>
      )}
      {movie.externals?.imdb && (
        <TouchableOpacity onPress={() => openLink(`https://www.imdb.com/title/${movie.externals.imdb}`)}>
          <Text style={styles.link}>IMDb Page</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000', padding: 10 },
  image: { width: '100%', height: 200, resizeMode: 'contain', borderRadius: 10 },
  title: { color: '#fff', fontSize: 28, fontWeight: 'bold', marginVertical: 10 },
  info: { color: '#ccc', fontSize: 16, marginVertical: 2 },
  label: { color: '#fff', fontWeight: 'bold' },
  sectionHeader: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginVertical: 10 },
  summary: { color: '#ccc', fontSize: 16, lineHeight: 22, marginBottom: 10 },
  link: { color: '#1e90ff', fontSize: 16, marginVertical: 5, textDecorationLine: 'underline' },
});

export default DetailsScreen;
