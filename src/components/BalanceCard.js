import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Eye, EyeOff, Plus, Copy, MoreHorizontal, CreditCard } from 'lucide-react-native';
import { COLORS, SIZES } from '../constants/theme';

const BalanceCard = () => {
  const [visible, setVisible] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        {/* Top Section: Account Info */}
        <View style={styles.header}>
          <View style={styles.accountRow}>
            <View style={styles.iconContainer}>
              <CreditCard color="white" size={18} />
            </View>
            <View>
              <Text style={styles.accountLabel}>Saving Account</Text>
              <View style={styles.numberRow}>
                <Text style={styles.accountNumber}>1000 **** **** 1234</Text>
                <TouchableOpacity style={styles.copyBtn}>
                  <Copy size={12} color={COLORS.textSecondary} />
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <MoreHorizontal color={COLORS.textSecondary} size={20} />
          </TouchableOpacity>
        </View>

        {/* Middle Section: Balance */}
        <View style={styles.balanceContainer}>
          <Text style={styles.currencyLabel}>Total Balance</Text>
          <View style={styles.balanceRow}>
            <Text style={styles.currency}>ETB</Text>
            <Text style={styles.amount}>
              {visible ? '145,250.00' : '••••••••'}
            </Text>
            <TouchableOpacity onPress={() => setVisible(!visible)} style={styles.eyeBtn}>
              {visible ? <Eye color={COLORS.primary} size={22} /> : <EyeOff color="#9CA3AF" size={22} />}
            </TouchableOpacity>
          </View>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Bottom Section: Action */}
        <TouchableOpacity style={styles.topUpBtn}>
          <View style={styles.plusCircle}>
            <Plus color="white" size={14} />
          </View>
          <Text style={styles.topUpText}>Top Up Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.padding,
    marginTop: -85, // Pulls the card up over the header
    zIndex: 10,
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 24,
    padding: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.08,
    shadowRadius: 20,
    elevation: 8, // Android shadow
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  accountRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconContainer: {
    width: 36,
    height: 36,
    borderRadius: 12,
    backgroundColor: COLORS.primary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  accountLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
    fontWeight: '500',
    marginBottom: 2,
  },
  numberRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  accountNumber: {
    fontSize: 14,
    fontWeight: '700',
    color: COLORS.text,
    marginRight: 6,
    letterSpacing: 0.5,
  },
  copyBtn: {
    padding: 2,
  },
  balanceContainer: {
    marginBottom: 20,
  },
  currencyLabel: {
    fontSize: 12,
    color: COLORS.textSecondary,
    fontWeight: '500',
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  balanceRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  currency: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.textSecondary,
    marginRight: 6,
  },
  amount: {
    fontSize: 34,
    fontWeight: '800',
    color: COLORS.text,
    marginRight: 12,
    letterSpacing: -0.5,
  },
  eyeBtn: {
    transform: [{ translateY: 2 }],
  },
  divider: {
    height: 1,
    backgroundColor: '#F3F4F6',
    marginBottom: 15,
  },
  topUpBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  plusCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: COLORS.secondary,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  topUpText: {
    color: COLORS.secondary,
    fontSize: 14,
    fontWeight: '700',
  },
});

export default BalanceCard;
