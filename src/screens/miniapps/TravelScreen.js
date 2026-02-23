import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Search, Calendar, MapPin } from 'lucide-react-native';
import { COLORS, SIZES } from '../../constants/theme';
import { LinearGradient } from 'expo-linear-gradient';

const TravelScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header Banner */}
      <View style={styles.banner}>
        <Image 
          source={{ uri: 'https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?w=800' }} 
          style={styles.bannerImg} 
        />
        <LinearGradient
          colors={['transparent', 'rgba(0,0,0,0.7)']}
          style={styles.gradient}
        >
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <ArrowLeft color="white" size={24} />
          </TouchableOpacity>
          <Text style={styles.bannerTitle}>Discover Ethiopia</Text>
          <Text style={styles.bannerSubtitle}>Book flights & hotels easily</Text>
        </LinearGradient>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Search Form */}
        <View style={styles.formCard}>
          <View style={styles.tabs}>
            <TouchableOpacity style={[styles.tab, styles.activeTab]}>
              <Text style={styles.activeTabText}>Flights</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
              <Text style={styles.tabText}>Hotels</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>From</Text>
            <View style={styles.input}>
              <MapPin size={18} color={COLORS.textSecondary} />
              <Text style={styles.inputText}>ADD - Addis Ababa</Text>
            </View>
          </View>
          
          <View style={styles.inputGroup}>
            <Text style={styles.label}>To</Text>
            <View style={styles.input}>
              <MapPin size={18} color={COLORS.textSecondary} />
              <Text style={styles.inputText}>LAL - Lalibela</Text>
            </View>
          </View>
          
          <View style={styles.row}>
            <View style={[styles.inputGroup, { flex: 1, marginRight: 10 }]}>
              <Text style={styles.label}>Date</Text>
              <View style={styles.input}>
                <Calendar size={18} color={COLORS.textSecondary} />
                <Text style={styles.inputText}>Dec 24</Text>
              </View>
            </View>
            <View style={[styles.inputGroup, { flex: 1 }]}>
              <Text style={styles.label}>Passengers</Text>
              <View style={styles.input}>
                <Text style={styles.inputText}>1 Adult</Text>
              </View>
            </View>
          </View>

          <TouchableOpacity style={styles.searchBtn}>
            <Text style={styles.searchBtnText}>Search Flights</Text>
          </TouchableOpacity>
        </View>

        {/* Popular Destinations */}
        <Text style={styles.sectionTitle}>Popular Destinations</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.destList}>
          {['Lalibela', 'Gondar', 'Axum', 'Bahir Dar'].map((dest, i) => (
            <TouchableOpacity key={i} style={styles.destCard}>
              <Image 
                source={{ uri: `https://source.unsplash.com/random/200x200?ethiopia,${dest}` }} 
                style={styles.destImg} 
              />
              <Text style={styles.destName}>{dest}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  banner: { height: 250, position: 'relative' },
  bannerImg: { width: '100%', height: '100%', resizeMode: 'cover' },
  gradient: { position: 'absolute', bottom: 0, left: 0, right: 0, height: '100%', justifyContent: 'flex-end', padding: 20 },
  backBtn: { position: 'absolute', top: 50, left: 20, backgroundColor: 'rgba(255,255,255,0.3)', padding: 8, borderRadius: 20 },
  bannerTitle: { color: 'white', fontSize: 28, fontWeight: 'bold' },
  bannerSubtitle: { color: 'rgba(255,255,255,0.9)', fontSize: 16, marginBottom: 10 },
  content: { padding: SIZES.padding },
  formCard: {
    backgroundColor: COLORS.surface,
    borderRadius: SIZES.radius,
    padding: 20,
    marginTop: -40,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
  },
  tabs: { flexDirection: 'row', marginBottom: 20, backgroundColor: '#F3F4F6', borderRadius: 12, padding: 4 },
  tab: { flex: 1, paddingVertical: 8, alignItems: 'center', borderRadius: 10 },
  activeTab: { backgroundColor: 'white', shadowColor: "#000", shadowOpacity: 0.05, shadowRadius: 2, elevation: 1 },
  tabText: { color: COLORS.textSecondary, fontWeight: '600' },
  activeTabText: { color: COLORS.primary, fontWeight: 'bold' },
  inputGroup: { marginBottom: 15 },
  label: { fontSize: 12, color: COLORS.textSecondary, marginBottom: 6, fontWeight: '500' },
  input: { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 10, padding: 12 },
  inputText: { marginLeft: 10, color: COLORS.text, fontWeight: '500' },
  row: { flexDirection: 'row' },
  searchBtn: { backgroundColor: '#059669', padding: 16, borderRadius: 12, alignItems: 'center', marginTop: 10 },
  searchBtnText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: COLORS.text, marginTop: 25, marginBottom: 15 },
  destList: { flexDirection: 'row', overflow: 'visible' },
  destCard: { marginRight: 15, width: 140 },
  destImg: { width: 140, height: 100, borderRadius: 12, marginBottom: 8, backgroundColor: '#E5E7EB' },
  destName: { fontWeight: '600', color: COLORS.text, fontSize: 14, textAlign: 'center' },
});

export default TravelScreen;
