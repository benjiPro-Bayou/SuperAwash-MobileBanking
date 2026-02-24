import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image, Dimensions, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell, Send, Smartphone, Download, QrCode, ShoppingBag, Car, Plane, Zap, CreditCard, Lightbulb, Wifi, MoreHorizontal, Eye, EyeOff, Copy, Plus } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SIZES } from '../constants/theme';

const { width } = Dimensions.get('window');

const ActionButton = ({ icon: Icon, label, onPress, color = COLORS.primary, bg }) => (
  <TouchableOpacity style={styles.actionBtn} onPress={onPress}>
    <View style={[styles.actionIcon, { backgroundColor: bg || color + '15' }]}>
      <Icon color={color} size={24} />
    </View>
    <Text style={styles.actionLabel}>{label}</Text>
  </TouchableOpacity>
);

const ServiceIcon = ({ icon: Icon, label, color, bg }) => (
  <TouchableOpacity style={styles.serviceIconWrapper}>
    <View style={[styles.serviceCircle, { backgroundColor: bg || color + '10' }]}>
      <Icon color={color} size={22} />
    </View>
    <Text style={styles.serviceText} numberOfLines={1}>{label}</Text>
  </TouchableOpacity>
);

const LifestyleCard = ({ icon: Icon, label, desc, color, bg, onPress }) => (
  <TouchableOpacity style={[styles.lifestyleCard, { backgroundColor: bg }]} onPress={onPress}>
    <View style={styles.lifestyleHeader}>
      <View style={[styles.lifestyleIconBox, { backgroundColor: 'white' }]}>
        <Icon color={color} size={20} />
      </View>
      <Text style={[styles.lifestyleTitle, { color: color }]}>{label}</Text>
    </View>
    <Text style={styles.lifestyleDesc}>{desc}</Text>
  </TouchableOpacity>
);

const HomeScreen = ({ navigation }) => {
  const [balanceVisible, setBalanceVisible] = useState(true);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      
      {/* Unified Header & Account Card */}
      <LinearGradient
        colors={[COLORS.primary, '#373689']}
        style={styles.headerContainer}
        // start={{ x: 0, y: 0 }}
        // end={{ x: 1, y: 1 }}
      >
        <SafeAreaView edges={['top', 'left', 'right']}>
          {/* Top Bar: Profile & Notifs */}
          <View style={styles.topBar}>
            <View style={styles.userInfo}>
              <View style={styles.avatarWrapper}>
                <Image 
                  source={{ uri: 'https://i.pravatar.cc/300?img=12' }} 
                  style={styles.avatar} 
                />
                <View style={styles.statusDot} />
              </View>
              <View>
                <Text style={styles.greeting}>Good Morning,</Text>
                <Text style={styles.username}>Biniyam Tessema</Text>
              </View>
            </View>
            <TouchableOpacity style={styles.notifBtn} onPress={() => navigation.navigate('Settings')}>
              <Bell color="white" size={24} />
              <View style={styles.badge} />
            </TouchableOpacity>
          </View>

          {/* Integrated Account Info */}
          <View style={styles.accountCard}>
            <View style={styles.accountRow}>
              <View>
                <Text style={styles.accountLabel}>Saving Account</Text>
                <View style={styles.accountNumWrapper}>
                  <Text style={styles.accountNum}>1000 **** **** 1234</Text>
                  <TouchableOpacity style={styles.copyBtn}>
                    <Copy color="rgba(255,255,255,0.7)" size={14} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.logoTag}>
                <Text style={styles.logoText}>Awash</Text>
              </View>
            </View>

            <View style={styles.balanceWrapper}>
              <Text style={styles.balanceLabel}>Available Balance</Text>
              <View style={styles.balanceRow}>
                <Text style={styles.currency}>ETB</Text>
                <Text style={styles.amount}>
                  {balanceVisible ? '145,250.00' : '••••••••'}
                </Text>
                <TouchableOpacity onPress={() => setBalanceVisible(!balanceVisible)} style={styles.eyeBtn}>
                  {balanceVisible ? <Eye color="rgba(255,255,255,0.8)" size={22} /> : <EyeOff color="rgba(255,255,255,0.6)" size={22} />}
                </TouchableOpacity>
              </View>
            </View>

            {/* <TouchableOpacity style={styles.topUpBtn}>
              <Plus color={COLORS.primary} size={16} />
              <Text style={styles.topUpText}>Top Up</Text>
            </TouchableOpacity> */}
          </View>
        </SafeAreaView>
      </LinearGradient>

      <ScrollView 
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={styles.scrollContent}
        style={styles.scrollView}
      >
        {/* Quick Actions */}
        <View style={styles.quickActionsContainer}>
          <Text style={styles.sectionHeader}>Quick Actions</Text>
          <View style={styles.quickActionsRow}>
            <ActionButton icon={Send} label="Transfer" color={COLORS.primary} bg="#E0F2FE" onPress={() => navigation.navigate('Transfer')} />
            <ActionButton icon={Smartphone} label="Airtime" color={COLORS.secondary} bg="#FFF7ED" onPress={() => navigation.navigate('Transfer')} />
            <ActionButton icon={QrCode} label="Scan" color="#10B981" bg="#ECFDF5" onPress={() => {}} />
            <ActionButton icon={Download} label="Request" color="#8B5CF6" bg="#F5F3FF" onPress={() => navigation.navigate('Chat')} />
          </View>
        </View>

        {/* Payments Grid */}
        <View style={styles.servicesContainer}>
          <View style={styles.sectionHeaderRow}>
            <Text style={styles.sectionHeader}>Payments</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Services')}>
              <Text style={styles.seeAll}>See All</Text>
            </TouchableOpacity>
          </View>
          
          <View style={styles.servicesGrid}>
            <ServiceIcon icon={Zap} label="Electric" color="#EAB308" bg="#FEF9C3" />
            <ServiceIcon icon={Wifi} label="Internet" color="#3B82F6" bg="#DBEAFE" />
            <ServiceIcon icon={CreditCard} label="Merchant" color="#EC4899" bg="#FCE7F3" />
            <ServiceIcon icon={MoreHorizontal} label="More" color={COLORS.textSecondary} bg="#F3F4F6" />
          </View>
        </View>

        {/* Banner */}
        <TouchableOpacity style={styles.promoBanner}>
          <LinearGradient
            colors={['#10B981', '#059669']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.promoGradient}
          >
            <View style={styles.promoContent}>
              <Text style={styles.promoTitle}>Get 5% Cashback</Text>
              <Text style={styles.promoText}>On your first Ethiopian Airlines booking via Super Awash.</Text>
            </View>
            <Plane color="white" size={40} style={{ opacity: 0.8 }} />
          </LinearGradient>
        </TouchableOpacity>

        {/* Lifestyle Section */}
        <View style={styles.lifestyleContainer}>
          <Text style={styles.sectionHeader}>Lifestyle</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.lifestyleScroll}>
            <LifestyleCard 
              icon={ShoppingBag} 
              label="Shop" 
              desc="Groceries & Tech" 
              color="#EC4899" 
              bg="#FDF2F8" 
              onPress={() => navigation.navigate('Ecommerce')} 
            />
            <LifestyleCard 
              icon={Car} 
              label="Ride" 
              desc="Book a taxi" 
              color="#F59E0B" 
              bg="#FFFBEB" 
              onPress={() => navigation.navigate('Ride')} 
            />
            <LifestyleCard 
              icon={Plane} 
              label="Travel" 
              desc="Flights & Hotels" 
              color="#059669" 
              bg="#ECFDF5" 
              onPress={() => navigation.navigate('Travel')} 
            />
             <LifestyleCard 
              icon={Lightbulb} 
              label="Cinema" 
              desc="Movie tickets" 
              color="#7C3AED" 
              bg="#F5F3FF" 
              onPress={() => navigation.navigate('Cinema')} 
            />
          </ScrollView>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FAFAFA' },
  headerContainer: {
    paddingBottom: 30,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    paddingHorizontal: SIZES.padding,
    paddingTop: 10,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },
  userInfo: { flexDirection: 'row', alignItems: 'center' },
  avatarWrapper: { position: 'relative', marginRight: 12 },
  avatar: { width: 44, height: 44, borderRadius: 22, borderWidth: 2, borderColor: 'rgba(255,255,255,0.2)' },
  statusDot: { position: 'absolute', bottom: 2, right: 0, width: 10, height: 10, borderRadius: 5, backgroundColor: '#22C55E', borderWidth: 2, borderColor: COLORS.primary },
  greeting: { color: 'rgba(255,255,255,0.7)', fontSize: 12, fontWeight: '500' },
  username: { color: 'white', fontSize: 16, fontWeight: '700', letterSpacing: 0.3 },
  notifBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.15)', justifyContent: 'center', alignItems: 'center' },
  badge: { position: 'absolute', top: 10, right: 10, width: 8, height: 8, borderRadius: 4, backgroundColor: COLORS.secondary, borderWidth: 1, borderColor: COLORS.primary },
  
  /* Account Card Inside Header */
  accountCard: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  accountRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 },
  accountLabel: { color: 'rgba(255,255,255,0.7)', fontSize: 12, marginBottom: 4, fontWeight: '500', textTransform: 'uppercase' },
  accountNumWrapper: { flexDirection: 'row', alignItems: 'center' },
  accountNum: { color: 'white', fontSize: 16, fontWeight: '600', letterSpacing: 1, marginRight: 8 },
  copyBtn: { padding: 4 },
  logoTag: { backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  logoText: { color: 'white', fontWeight: 'bold', fontSize: 10, fontStyle: 'italic' },
  
  balanceWrapper: { marginBottom: 20 },
  balanceLabel: { color: 'rgba(255,255,255,0.7)', fontSize: 12, marginBottom: 5 },
  balanceRow: { flexDirection: 'row', alignItems: 'baseline' },
  currency: { color: 'rgba(255,255,255,0.9)', fontSize: 18, fontWeight: '600', marginRight: 8 },
  amount: { color: 'white', fontSize: 36, fontWeight: 'bold', marginRight: 10 },
  eyeBtn: { transform: [{ translateY: 2 }] },
  
  topUpBtn: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', alignSelf: 'flex-start', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 20 },
  topUpText: { color: COLORS.primary, fontWeight: 'bold', fontSize: 12, marginLeft: 6 },

  scrollView: { flex: 1, marginTop: 10 },
  scrollContent: { paddingBottom: 20 },

  /* Quick Actions */
  quickActionsContainer: { paddingHorizontal: SIZES.padding, marginBottom: 25 },
  sectionHeader: { fontSize: 18, fontWeight: '700', color: '#1F2937', marginBottom: 15 },
  quickActionsRow: { flexDirection: 'row', justifyContent: 'space-between' },
  actionBtn: { alignItems: 'center', width: '23%' },
  actionIcon: { width: 56, height: 56, borderRadius: 18, justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
  actionLabel: { fontSize: 12, fontWeight: '600', color: '#4B5563' },

  /* Services Grid */
  servicesContainer: { paddingHorizontal: SIZES.padding, marginBottom: 25 },
  sectionHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  seeAll: { color: COLORS.primary, fontSize: 13, fontWeight: '600' },
  servicesGrid: { flexDirection: 'row', justifyContent: 'space-between' },
  serviceIconWrapper: { alignItems: 'center', width: '23%' },
  serviceCircle: { width: 56, height: 56, borderRadius: 18, justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
  serviceText: { fontSize: 11, fontWeight: '500', color: '#6B7280' },

  /* Banner */
  promoBanner: { marginHorizontal: SIZES.padding, marginBottom: 25, borderRadius: 20, overflow: 'hidden' },
  promoGradient: { flexDirection: 'row', padding: 20, alignItems: 'center' },
  promoContent: { flex: 1, marginRight: 15 },
  promoTitle: { color: 'white', fontSize: 16, fontWeight: '800', marginBottom: 4 },
  promoText: { color: 'rgba(255,255,255,0.9)', fontSize: 12, lineHeight: 16 },

  /* Lifestyle */
  lifestyleContainer: { paddingLeft: SIZES.padding, marginBottom: 20 },
  lifestyleScroll: { paddingRight: SIZES.padding },
  lifestyleCard: { width: 140, padding: 16, borderRadius: 20, marginRight: 12, height: 120, justifyContent: 'space-between' },
  lifestyleHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  lifestyleIconBox: { width: 32, height: 32, borderRadius: 10, justifyContent: 'center', alignItems: 'center', marginRight: 8 },
  lifestyleTitle: { fontWeight: '700', fontSize: 13 },
  lifestyleDesc: { fontSize: 11, color: '#6B7280', lineHeight: 14 },
});

export default HomeScreen;
