import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Shield, Lock, Settings } from 'lucide-react-native';
import { COLORS, SIZES } from '../constants/theme';

const CardsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>My Cards</Text>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {/* Card Visualization */}
        <View style={styles.cardContainer}>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.bankName}>Awash Bank</Text>
              <Text style={styles.cardType}>Visa Platinum</Text>
            </View>
            <Text style={styles.cardNumber}>7*** **** **** 1234</Text>
            <View style={styles.cardFooter}>
              <View>
                <Text style={styles.label}>Card Holder</Text>
                <Text style={styles.value}>BINIYAM TESSEMA</Text>
              </View>
              <View>
                <Text style={styles.label}>Expires</Text>
                <Text style={styles.value}>12/28</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Actions */}
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionItem}>
            <View style={[styles.iconBox, { backgroundColor: '#FEE2E2' }]}>
              <Lock color={COLORS.danger} size={24} />
            </View>
            <Text style={styles.actionText}>Block Card</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionItem}>
            <View style={[styles.iconBox, { backgroundColor: '#E0F2FE' }]}>
              <Shield color={COLORS.primary} size={24} />
            </View>
            <Text style={styles.actionText}>Change PIN</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.actionItem}>
            <View style={[styles.iconBox, { backgroundColor: '#F3F4F6' }]}>
              <Settings color={COLORS.text} size={24} />
            </View>
            <Text style={styles.actionText}>Settings</Text>
          </TouchableOpacity>
        </View>

        {/* Limits */}
        <View style={styles.limitSection}>
          <Text style={styles.sectionTitle}>Transaction Limits</Text>
          <View style={styles.limitItem}>
            <Text style={styles.limitLabel}>Online Payments</Text>
            <Text style={styles.limitValue}>50,000 ETB / day</Text>
          </View>
          <View style={styles.limitItem}>
            <Text style={styles.limitLabel}>ATM Withdrawal</Text>
            <Text style={styles.limitValue}>10,000 ETB / day</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: { padding: SIZES.padding, backgroundColor: COLORS.surface },
  title: { fontSize: 24, fontWeight: 'bold', color: COLORS.text },
  content: { padding: SIZES.padding },
  cardContainer: { alignItems: 'center', marginBottom: 30 },
  card: {
    width: '100%',
    height: 200,
    backgroundColor: '#373689',
    borderRadius: 16,
    padding: 20,
    justifyContent: 'space-between',
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 8,
  },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  bankName: { color: 'white', fontWeight: 'bold', fontSize: 18 },
  cardType: { color: 'rgba(255,255,255,0.8)', fontStyle: 'italic' },
  cardNumber: { color: 'white', fontSize: 22, letterSpacing: 2, textAlign: 'center', marginVertical: 20 },
  cardFooter: { flexDirection: 'row', justifyContent: 'space-between' },
  label: { color: 'rgba(255,255,255,0.6)', fontSize: 10, textTransform: 'uppercase' },
  value: { color: 'white', fontSize: 14, fontWeight: 'bold' },
  
  actions: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 30 },
  actionItem: { alignItems: 'center', width: '30%' },
  iconBox: { width: 50, height: 50, borderRadius: 16, justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
  actionText: { fontSize: 12, fontWeight: '500', color: COLORS.text },
  
  limitSection: { backgroundColor: COLORS.surface, padding: 15, borderRadius: 12 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 15, color: COLORS.text },
  limitItem: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: COLORS.border },
  limitLabel: { color: COLORS.textSecondary },
  limitValue: { fontWeight: '600', color: COLORS.text },
});

export default CardsScreen;
