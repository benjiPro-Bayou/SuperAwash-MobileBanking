import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, MapPin } from 'lucide-react-native';
import { COLORS, SIZES } from '../../constants/theme';

const RideScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Map Placeholder */}
      <View style={styles.map}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800' }} 
          style={styles.mapImg} 
        />
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <ArrowLeft color={COLORS.text} size={24} />
        </TouchableOpacity>
      </View>

      {/* Ride Controls */}
      <View style={styles.controls}>
        <Text style={styles.greeting}>Where to?</Text>
        
        <View style={styles.inputBox}>
          <View style={styles.dot} />
          <Text style={styles.inputText}>Current Location</Text>
        </View>
        
        <View style={[styles.inputBox, { marginTop: 10 }]}>
          <View style={[styles.dot, { backgroundColor: COLORS.secondary }]} />
          <Text style={[styles.inputText, { color: COLORS.textSecondary }]}>Enter destination</Text>
        </View>

        <Text style={styles.recentTitle}>Recent Places</Text>
        <TouchableOpacity style={styles.recentItem}>
          <View style={styles.iconBox}><MapPin size={20} color={COLORS.text} /></View>
          <View>
            <Text style={styles.placeName}>Bole International Airport</Text>
            <Text style={styles.placeAddress}>Addis Ababa</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.recentItem}>
          <View style={styles.iconBox}><MapPin size={20} color={COLORS.text} /></View>
          <View>
            <Text style={styles.placeName}>Friendship Park</Text>
            <Text style={styles.placeAddress}>4 Kilo, Addis Ababa</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.bookBtn}>
          <Text style={styles.bookBtnText}>Find Driver</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  map: { height: '50%', width: '100%', position: 'relative' },
  mapImg: { width: '100%', height: '100%', resizeMode: 'cover' },
  backBtn: { position: 'absolute', top: 20, left: 20, backgroundColor: 'white', padding: 10, borderRadius: 20, elevation: 5 },
  controls: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: -20,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: SIZES.padding,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 10,
  },
  greeting: { fontSize: 22, fontWeight: 'bold', color: COLORS.text, marginBottom: 20 },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
    padding: 15,
    borderRadius: 12,
  },
  dot: { width: 10, height: 10, borderRadius: 5, backgroundColor: COLORS.primary, marginRight: 15 },
  inputText: { fontSize: 16, color: COLORS.text, fontWeight: '500' },
  recentTitle: { marginTop: 20, marginBottom: 10, fontWeight: 'bold', color: COLORS.textSecondary },
  recentItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 10, borderBottomWidth: 1, borderBottomColor: '#F3F4F6' },
  iconBox: { width: 36, height: 36, borderRadius: 18, backgroundColor: '#E5E7EB', justifyContent: 'center', alignItems: 'center', marginRight: 15 },
  placeName: { fontWeight: '600', color: COLORS.text },
  placeAddress: { fontSize: 12, color: COLORS.textSecondary },
  bookBtn: { backgroundColor: COLORS.secondary, padding: 18, borderRadius: 16, alignItems: 'center', marginTop: 20 },
  bookBtnText: { color: 'white', fontWeight: 'bold', fontSize: 18 },
});

export default RideScreen;
