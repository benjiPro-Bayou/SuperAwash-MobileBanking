import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell, Send, Smartphone, Download, QrCode, ShoppingBag, Car, Plane, Menu, Zap, CreditCard, Lightbulb, Wifi, MoreHorizontal } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SIZES } from '../constants/theme';
import BalanceCard from '../components/BalanceCard';

const { width } = Dimensions.get('window');

const ServiceItem = ({ icon: Icon, label, color, onPress, isNew }) => (
  <TouchableOpacity style={styles.serviceItem} onPress={onPress}>
    <View style={[styles.iconCircle, { backgroundColor: color + '15' }]}>
      <Icon color={color} size={24} />
      {isNew && <View style={styles.newBadge} />}
    </View>
    <Text style={styles.serviceLabel} numberOfLines={1}>{label}</Text>
  </TouchableOpacity>
);

const Banner = () => (
  <View style={styles.bannerContainer}>
    <LinearGradient
      colors={[COLORS.secondary, '#FB923C']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.banner}
    >
      <View style={styles.bannerContent}>
        <Text style={styles.bannerTitle}>5% Cash Back</Text>
        <Text style={styles.bannerText}>On all Ethiopian Airlines bookings this week!</Text>
      </View>
      <Plane color="white" size={48} style={{ opacity: 0.8 }} />
    </LinearGradient>
  </View>
);

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Top Background Gradient */}
      <LinearGradient
        colors={[COLORS.primary, '#004478']}
        style={styles.headerBackground}
      >
        <SafeAreaView edges={['top', 'left', 'right']}>
          {/* Top Bar */}
          <View style={styles.topBar}>
            <View style={styles.profileSection}>
              <View style={styles.avatarContainer}>
                <Image 
                  source={{ uri: 'https://i.pravatar.cc/300?img=12' }} 
                  style={styles.avatar} 
                />
                <View style={styles.onlineBadge} />
              </View>
              <View>
                <Text style={styles.greetingText}>Good Morning</Text>
                <Text style={styles.userName}>Biniyam</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.iconBtn} onPress={() => navigation.navigate('Settings')}>
              <Bell color="white" size={24} />
              <View style={styles.notifDot} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </LinearGradient>

      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        {/* Floating Balance Card */}
        <View style={styles.balanceContainer}>
          <BalanceCard />
        </View>

        {/* Main Services Grid (Dashen Style) */}
        <View style={styles.gridContainer}>
          <Text style={styles.sectionTitle}>Banking & Payments</Text>
          <View style={styles.grid}>
            <ServiceItem icon={Send} label="Transfer" color={COLORS.primary} onPress={() => navigation.navigate('Transfer')} />
            <ServiceItem icon={Smartphone} label="Airtime" color={COLORS.secondary} onPress={() => navigation.navigate('Transfer')} />
            <ServiceItem icon={Zap} label="Utilities" color="#EAB308" onPress={() => {}} />
            <ServiceItem icon={QrCode} label="Scan QR" color={COLORS.text} onPress={() => {}} />
            
            <ServiceItem icon={CreditCard} label="Pay Merch" color="#8B5CF6" onPress={() => {}} />
            <ServiceItem icon={Download} label="Request" color="#10B981" onPress={() => navigation.navigate('Chat')} />
            <ServiceItem icon={Wifi} label="Internet" color="#3B82F6" onPress={() => {}} />
            <ServiceItem icon={MoreHorizontal} label="More" color={COLORS.textSecondary} onPress={() => {}} />
          </View>
        </View>

        {/* Promotional Banner */}
        <Banner />

        {/* Lifestyle / Super App Section */}
        <View style={styles.lifestyleContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Lifestyle Services</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Services')}>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.lifestyleScroll}>
            <TouchableOpacity style={styles.lifestyleCard} onPress={() => navigation.navigate('Ecommerce')}>
              <LinearGradient colors={['#E0F2FE', '#BAE6FD']} style={styles.lifestyleIcon}>
                <ShoppingBag color={COLORS.primary} size={28} />
              </LinearGradient>
              <Text style={styles.lifestyleLabel}>Shop</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.lifestyleCard} onPress={() => navigation.navigate('Ride')}>
              <LinearGradient colors={['#FEF3C7', '#FDE68A']} style={styles.lifestyleIcon}>
                <Car color={COLORS.secondary} size={28} />
              </LinearGradient>
              <Text style={styles.lifestyleLabel}>Ride</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.lifestyleCard} onPress={() => navigation.navigate('Travel')}>
              <LinearGradient colors={['#D1FAE5', '#A7F3D0']} style={styles.lifestyleIcon}>
                <Plane color="#059669" size={28} />
              </LinearGradient>
              <Text style={styles.lifestyleLabel}>Travel</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.lifestyleCard} onPress={() => navigation.navigate('Cinema')}>
              <LinearGradient colors={['#F3E8FF', '#E9D5FF']} style={styles.lifestyleIcon}>
                <Lightbulb color="#9333EA" size={28} />
              </LinearGradient>
              <Text style={styles.lifestyleLabel}>Cinema</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
        
        <View style={{ height: 100 }} /> 
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F8F9FA' },
  headerBackground: {
    height: 220,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    paddingHorizontal: SIZES.padding,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  profileSection: { flexDirection: 'row', alignItems: 'center' },
  avatarContainer: { position: 'relative', marginRight: 12 },
  avatar: { width: 45, height: 45, borderRadius: 22.5, borderWidth: 2, borderColor: 'rgba(255,255,255,0.2)' },
  onlineBadge: { position: 'absolute', bottom: 0, right: 0, width: 12, height: 12, borderRadius: 6, backgroundColor: '#22C55E', borderWidth: 2, borderColor: COLORS.primary },
  greetingText: { color: 'rgba(255,255,255,0.8)', fontSize: 12 },
  userName: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  iconBtn: { padding: 8, backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 12 },
  notifDot: { position: 'absolute', top: 8, right: 10, width: 8, height: 8, borderRadius: 4, backgroundColor: COLORS.secondary },
  
  scrollContent: { marginTop: -80 }, // Pull content up over header
  balanceContainer: { marginBottom: 20 },
  
  gridContainer: {
    paddingHorizontal: SIZES.padding,
    marginBottom: 20,
  },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: COLORS.text, marginBottom: 15, marginLeft: 5 },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 3,
  },
  serviceItem: {
    width: '25%', // 4 items per row
    alignItems: 'center',
    marginBottom: 20,
  },
  iconCircle: {
    width: 50,
    height: 50,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  serviceLabel: { fontSize: 11, color: COLORS.text, fontWeight: '500' },
  newBadge: { position: 'absolute', top: -2, right: -2, width: 8, height: 8, borderRadius: 4, backgroundColor: COLORS.danger },
  
  bannerContainer: { paddingHorizontal: SIZES.padding, marginBottom: 25 },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    borderRadius: 20,
    height: 100,
  },
  bannerContent: { flex: 1, marginRight: 10 },
  bannerTitle: { color: 'white', fontSize: 18, fontWeight: 'bold', marginBottom: 4 },
  bannerText: { color: 'rgba(255,255,255,0.9)', fontSize: 12 },
  
  lifestyleContainer: { paddingHorizontal: SIZES.padding },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  seeAll: { color: COLORS.primary, fontSize: 12, fontWeight: '600' },
  lifestyleScroll: { overflow: 'visible' },
  lifestyleCard: { marginRight: 15, alignItems: 'center' },
  lifestyleIcon: { width: 65, height: 65, borderRadius: 22, justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
  lifestyleLabel: { fontSize: 12, fontWeight: '600', color: COLORS.text },
});

export default HomeScreen;
