import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { Eye, EyeOff, Plus, CreditCard } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { COLORS, SIZES } from '../constants/theme';

const { width } = Dimensions.get('window');

const BalanceCard = () => {
  const [visible, setVisible] = useState(true);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['white', '#F8FAFC']}
        style={styles.card}
      >
        <View style={styles.topRow}>
          <View>
            <Text style={styles.label}>Total Balance</Text>
            <View style={styles.amountRow}>
              <Text style={styles.currency}>ETB</Text>
              <Text style={styles.amount}>
                {visible ? '145,250.00' : '••••••••'}
              </Text>
            </View>
          </View>
          <TouchableOpacity onPress={() => setVisible(!visible)} style={styles.eyeBtn}>
            {visible ? <Eye color={COLORS.primary} size={20} /> : <EyeOff color={COLORS.textSecondary} size={20} />}
          </TouchableOpacity>
        </View>

        <View style={styles.divider} />

        <View style={styles.accountRow}>
          <View style={styles.accountInfo}>
            <CreditCard color={COLORS.textSecondary} size={16} />
            <Text style={styles.accountNum}>1000 **** **** 1234</Text>
          </View>
          <TouchableOpacity style={styles.addBtn}>
            <Plus color="white" size={16} />
            <Text style={styles.addBtnText}>Top Up</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.padding,
    marginTop: -40, // Pull up to overlap header
  },
  card: {
    borderRadius: 20,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 15,
  },
  label: { fontSize: 12, color: COLORS.textSecondary, marginBottom: 5, fontWeight: '500' },
  amountRow: { flexDirection: 'row', alignItems: 'baseline' },
  currency: { fontSize: 16, fontWeight: '600', color: COLORS.textSecondary, marginRight: 5 },
  amount: { fontSize: 32, fontWeight: 'bold', color: COLORS.primary },
  eyeBtn: { padding: 5 },
  divider: { height: 1, backgroundColor: '#F1F5F9', marginVertical: 15 },
  accountRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  accountInfo: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F1F5F9', paddingHorizontal: 10, paddingVertical: 6, borderRadius: 8 },
  accountNum: { marginLeft: 8, color: COLORS.textSecondary, fontSize: 12, fontWeight: '500' },
  addBtn: { flexDirection: 'row', alignItems: 'center', backgroundColor: COLORS.secondary, paddingHorizontal: 15, paddingVertical: 8, borderRadius: 20 },
  addBtnText: { color: 'white', fontSize: 12, fontWeight: 'bold', marginLeft: 5 },
});

export default BalanceCard;
