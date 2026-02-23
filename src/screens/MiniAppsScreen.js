import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Search, ShoppingBag, Car, Plane, Coffee, Film, Ticket, Briefcase, Zap, Smartphone, Wifi, Globe, Heart, MoreHorizontal } from 'lucide-react-native';
import { COLORS, SIZES } from '../constants/theme';
import { LinearGradient } from 'expo-linear-gradient';

const { width } = Dimensions.get('window');
const itemWidth = (width - 60) / 4; // 4 items per row

const ServiceItem = ({ icon: Icon, label, color, onPress }) => (
  <TouchableOpacity style={styles.serviceItem} onPress={onPress}>
    <View style={[styles.iconContainer, { backgroundColor: color + '15' }]}>
      <Icon color={color} size={28} />
    </View>
    <Text style={styles.serviceLabel} numberOfLines={1}>{label}</Text>
  </TouchableOpacity>
);

const MiniAppsScreen = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState('All');
  
  const categories = ['All', 'Travel', 'Lifestyle', 'Bills', 'Shopping'];

  const renderContent = () => {
    return (
      <View style={styles.grid}>
        {/* Travel */}
        {(activeTab === 'All' || activeTab === 'Travel') && (
          <>
            <ServiceItem icon={Car} label="Ride" color="#F59E0B" onPress={() => navigation.navigate('Ride')} />
            <ServiceItem icon={Plane} label="Ethiopian" color="#047857" onPress={() => navigation.navigate('Travel')} />
            <ServiceItem icon={Briefcase} label="Hotels" color="#6366F1" onPress={() => navigation.navigate('Travel')} />
            <ServiceItem icon={Car} label="Feres" color="#10B981" onPress={() => navigation.navigate('Ride')} />
          </>
        )}
        
        {/* Lifestyle */}
        {(activeTab === 'All' || activeTab === 'Lifestyle') && (
          <>
            <ServiceItem icon={Film} label="Cinema" color="#8B5CF6" onPress={() => navigation.navigate('Cinema')} />
            <ServiceItem icon={Ticket} label="Events" color="#EC4899" onPress={() => navigation.navigate('Cinema')} />
            <ServiceItem icon={Coffee} label="Food" color="#F43F5E" onPress={() => navigation.navigate('Ecommerce')} />
            <ServiceItem icon={Heart} label="Donation" color="#EF4444" onPress={() => {}} />
          </>
        )}

        {/* Bills */}
        {(activeTab === 'All' || activeTab === 'Bills') && (
          <>
            <ServiceItem icon={Zap} label="Electricity" color="#EAB308" onPress={() => {}} />
            <ServiceItem icon={Smartphone} label="Airtime" color={COLORS.secondary} onPress={() => {}} />
            <ServiceItem icon={Wifi} label="Internet" color="#3B82F6" onPress={() => {}} />
            <ServiceItem icon={Globe} label="DSTV" color="#06B6D4" onPress={() => {}} />
          </>
        )}

         {/* Shopping */}
         {(activeTab === 'All' || activeTab === 'Shopping') && (
          <>
            <ServiceItem icon={ShoppingBag} label="Jumia" color="#F97316" onPress={() => navigation.navigate('Ecommerce')} />
            <ServiceItem icon={ShoppingBag} label="Amazon" color="#374151" onPress={() => navigation.navigate('Ecommerce')} />
          </>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Services</Text>
        <View style={styles.searchBar}>
          <Search color={COLORS.textSecondary} size={20} />
          <TextInput placeholder="Search services..." style={styles.input} placeholderTextColor={COLORS.textSecondary} />
        </View>
      </View>

      <View style={styles.tabsContainer}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabs}>
          {categories.map(cat => (
            <TouchableOpacity 
              key={cat} 
              style={[styles.tab, activeTab === cat && styles.activeTab]}
              onPress={() => setActiveTab(cat)}
            >
              <Text style={[styles.tabText, activeTab === cat && styles.activeTabText]}>{cat}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {renderContent()}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: { padding: SIZES.padding, backgroundColor: COLORS.surface, paddingBottom: 15 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: COLORS.text, marginBottom: 15 },
  searchBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F3F4F6', borderRadius: 12, padding: 12 },
  input: { marginLeft: 10, flex: 1, fontSize: 16, color: COLORS.text },
  
  tabsContainer: { backgroundColor: COLORS.surface, paddingBottom: 10 },
  tabs: { paddingHorizontal: SIZES.padding },
  tab: { marginRight: 15, paddingVertical: 6, paddingHorizontal: 16, borderRadius: 20, backgroundColor: '#F3F4F6', borderWidth: 1, borderColor: 'transparent' },
  activeTab: { backgroundColor: COLORS.primary + '15', borderColor: COLORS.primary },
  tabText: { color: COLORS.textSecondary, fontWeight: '500' },
  activeTabText: { color: COLORS.primary, fontWeight: 'bold' },
  
  content: { padding: SIZES.padding },
  grid: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' },
  serviceItem: { width: itemWidth, alignItems: 'center', marginBottom: 25, marginHorizontal: 7 },
  iconContainer: { width: 55, height: 55, borderRadius: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
  serviceLabel: { fontSize: 11, fontWeight: '500', color: COLORS.text, textAlign: 'center' },
});

export default MiniAppsScreen;
