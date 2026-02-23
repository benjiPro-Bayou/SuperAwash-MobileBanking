import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Play, Star } from 'lucide-react-native';
import { COLORS, SIZES } from '../../constants/theme';

const CinemaScreen = ({ navigation }) => {
  const movies = [
    { id: 1, title: "Avatar: Way of Water", rating: 8.5, img: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg" },
    { id: 2, title: "Black Panther", rating: 7.9, img: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg" },
    { id: 3, title: "Top Gun: Maverick", rating: 8.3, img: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg" },
    { id: 4, title: "The Batman", rating: 7.8, img: "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50x9TfdlnJR.jpg" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <ArrowLeft color={COLORS.text} size={24} />
        </TouchableOpacity>
        <Text style={styles.title}>Now Showing</Text>
      </View>

      <ScrollView contentContainerStyle={styles.grid}>
        {movies.map(movie => (
          <TouchableOpacity key={movie.id} style={styles.card}>
            <Image source={{ uri: movie.img }} style={styles.poster} />
            <View style={styles.ratingBox}>
              <Star size={12} color="#F59E0B" fill="#F59E0B" />
              <Text style={styles.ratingText}>{movie.rating}</Text>
            </View>
            <Text style={styles.movieTitle} numberOfLines={1}>{movie.title}</Text>
            <TouchableOpacity style={styles.bookBtn}>
              <Text style={styles.bookBtnText}>Book Ticket</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: { flexDirection: 'row', alignItems: 'center', padding: SIZES.padding, backgroundColor: COLORS.surface },
  backBtn: { marginRight: 15 },
  title: { fontSize: 20, fontWeight: 'bold', color: COLORS.text },
  grid: { padding: SIZES.padding, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: { width: '47%', marginBottom: 20, backgroundColor: COLORS.surface, borderRadius: 12, padding: 8, elevation: 2 },
  poster: { width: '100%', height: 220, borderRadius: 8, marginBottom: 10, resizeMode: 'cover', backgroundColor: '#E5E7EB' },
  ratingBox: { position: 'absolute', top: 16, right: 16, flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.7)', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 },
  ratingText: { color: '#F59E0B', fontSize: 10, marginLeft: 4, fontWeight: 'bold' },
  movieTitle: { fontWeight: 'bold', fontSize: 14, color: COLORS.text, marginBottom: 8, textAlign: 'center' },
  bookBtn: { backgroundColor: '#8B5CF6', paddingVertical: 8, borderRadius: 8, alignItems: 'center' },
  bookBtnText: { color: 'white', fontSize: 12, fontWeight: 'bold' },
});

export default CinemaScreen;
