import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft } from 'lucide-react-native';
import { COLORS, SIZES } from '../constants/theme';
import Input from '../components/Input';

const TransferScreen = ({ navigation }) => {
  const [tab, setTab] = useState('Awash'); // Awash, Other, Wallet, Topup
  const [account, setAccount] = useState('');
  const [amount, setAmount] = useState('');
  const [remark, setRemark] = useState('');

  const handleTransfer = () => {
    Alert.alert("Confirm Transfer", `Send ${amount} ETB to ${account}?`, [
      { text: "Cancel" },
      { text: "Confirm", onPress: () => navigation.goBack() }
    ]);
  };

  const renderForm = () => {
    switch(tab) {
      case 'Awash':
        return (
          <>
            <Input label="Account Number" placeholder="Enter Awash Account" value={account} onChangeText={setAccount} keyboardType="numeric" />
            <Input label="Amount" placeholder="0.00" value={amount} onChangeText={setAmount} keyboardType="numeric" />
            <Input label="Remark" placeholder="Optional" value={remark} onChangeText={setRemark} />
          </>
        );
      case 'Other':
        return (
          <>
            <Input label="Bank Name" placeholder="Select Bank" value="" onChangeText={() => {}} />
            <Input label="Account Number" placeholder="Enter IBAN/Account" value={account} onChangeText={setAccount} keyboardType="numeric" />
            <Input label="Amount" placeholder="0.00" value={amount} onChangeText={setAmount} keyboardType="numeric" />
            <Input label="Receiver Name" placeholder="Full Name" value="" onChangeText={() => {}} />
          </>
        );
      case 'Wallet':
        return (
          <>
            <Input label="Wallet Provider" placeholder="Telebirr, M-Pesa..." value="" onChangeText={() => {}} />
            <Input label="Phone Number" placeholder="09..." value={account} onChangeText={setAccount} keyboardType="phone-pad" />
            <Input label="Amount" placeholder="0.00" value={amount} onChangeText={setAmount} keyboardType="numeric" />
          </>
        );
      case 'Topup':
        return (
          <>
            <Input label="Phone Number" placeholder="09..." value={account} onChangeText={setAccount} keyboardType="phone-pad" />
            <Input label="Amount" placeholder="Select or Enter Amount" value={amount} onChangeText={setAmount} keyboardType="numeric" />
          </>
        );
      default: return null;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color={COLORS.text} size={24} />
        </TouchableOpacity>
        <Text style={styles.title}>Transfer & Pay</Text>
        <View style={{ width: 24 }} />
      </View>

      <View style={styles.tabs}>
        {['Awash', 'Other', 'Wallet', 'Topup'].map((t) => (
          <TouchableOpacity 
            key={t} 
            style={[styles.tab, tab === t && styles.activeTab]}
            onPress={() => setTab(t)}
          >
            <Text style={[styles.tabText, tab === t && styles.activeTabText]}>{t}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        {renderForm()}
        
        <TouchableOpacity style={styles.btn} onPress={handleTransfer}>
          <Text style={styles.btnText}>Proceed</Text>
        </TouchableOpacity>
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
  title: { fontSize: 18, fontWeight: 'bold', color: COLORS.text },
  tabs: {
    flexDirection: 'row',
    backgroundColor: COLORS.surface,
    paddingHorizontal: SIZES.padding,
    paddingBottom: 10,
  },
  tab: {
    marginRight: 20,
    paddingVertical: 8,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: { borderBottomColor: COLORS.secondary },
  tabText: { color: COLORS.textSecondary, fontWeight: '600' },
  activeTabText: { color: COLORS.secondary },
  content: { padding: SIZES.padding },
  btn: {
    backgroundColor: COLORS.primary,
    padding: 16,
    borderRadius: SIZES.radius,
    alignItems: 'center',
    marginTop: 20,
  },
  btnText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
});

export default TransferScreen;
