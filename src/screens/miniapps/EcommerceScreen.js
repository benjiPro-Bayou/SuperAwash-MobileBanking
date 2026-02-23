import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, ShoppingBag, ArrowLeft, Star } from 'lucide-react-native';
import { COLORS, SIZES } from '../../constants/theme';

const EcommerceScreen = ({ navigation }) => {
  const [search, setSearch] = useState('');
  
  const products = [
    { id: 1, name: "Samsung Galaxy S23", price: "55,000 ETB", rating: 4.8, img: "https://images.unsplash.com/photo-1610945431131-c42190280c81?w=500" },
    { id: 2, name: "Nike Air Jordan", price: "4,500 ETB", rating: 4.5, img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500" },
    { id: 3, name: "MacBook Pro M2", price: "125,000 ETB", rating: 4.9, img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500" },
    { id: 4, name: "Ethiopian Coffee", price: "500 ETB", rating: 5.0, img: "https://images.unsplash.com/photo-1559525839-818ee9eb8a8d?w=500" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <ArrowLeft color={COLORS.text} size={24} />
        </TouchableOpacity>
        <Text style={styles.title}>Shop</Text>
        <ShoppingBag color={COLORS.primary} size={24} />
      </View>

      <View style={styles.searchBar}>
        <Search color={COLORS.textSecondary} size={20} />
        <TextInput 
          style={styles.input} 
          placeholder="Search products..." 
          value={search} 
          onChangeText={setSearch} 
        />
      </View>

      <ScrollView contentContainerStyle={styles.grid}>
        {products.map(item => (
          <TouchableOpacity key={item.id} style={styles.card}>
            <Image source={{ uri: item.img }} style={styles.img} />
            <View style={styles.info}>
              <Text style={styles.name} numberOfLines={1}>{item.name}</Text>
              <View style={styles.rating}>
                <Star size={12} color="#F59E0B" fill="#F59E0B" />
                <Text style={styles.ratingText}>{item.rating}</Text>
              </View>
              <Text style={styles.price}>{item.price}</Text>
              <TouchableOpacity style={styles.addBtn}>
                <Text style={styles.addBtnText}>Add</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: SIZES.padding,
    backgroundColor: COLORS.surface,
  },
  title: { fontSize: 20, fontWeight: 'bold', color: COLORS.text },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    margin: SIZES.padding,
    marginTop: 10,
    padding: 10,
    borderRadius: SIZES.radius,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  input: { flex: 1, marginLeft: 10, fontSize: 16 },
  grid: { padding: SIZES.padding, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' },
  card: {
    width: '48%',
    backgroundColor: COLORS.surface,
    borderRadius: SIZES.radius,
    marginBottom: 15,
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  img: { width: '100%', height: 120, resizeMode: 'cover' },
  info: { padding: 10 },
  name: { fontSize: 14, fontWeight: 'bold', color: COLORS.text, marginBottom: 4 },
  rating: { flexDirection: 'row', alignItems: 'center', marginBottom: 6 },
  ratingText: { fontSize: 10, color: COLORS.textSecondary, marginLeft: 4 },
  price: { fontSize: 14, color: COLORS.primary, fontWeight: 'bold', marginBottom: 8 },
  addBtn: {
    backgroundColor: COLORS.secondary,
    paddingVertical: 6,
    borderRadius: 6,
    alignItems: 'center',
  },
  addBtnText: { color: 'white', fontSize: 12, fontWeight: '600' },
});

export default EcommerceScreen;
