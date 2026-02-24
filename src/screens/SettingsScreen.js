import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, ScrollView, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { User, Bell, Lock, Globe, HelpCircle, LogOut, ChevronRight, Moon, Shield } from 'lucide-react-native';
import { COLORS, SIZES } from '../constants/theme';
import { LinearGradient } from 'expo-linear-gradient';

const SettingItem = ({ icon: Icon, label, onPress, value, type = 'link' }) => (
  <TouchableOpacity style={styles.item} onPress={onPress} disabled={type === 'switch'}>
    <View style={styles.itemLeft}>
      <View style={styles.iconBox}>
        <Icon color={COLORS.primary} size={20} />
      </View>
      <Text style={styles.itemLabel}>{label}</Text>
    </View>
    {type === 'switch' ? (
      <Switch 
        trackColor={{ false: "#767577", true: COLORS.secondary }}
        thumbColor={value ? "#f4f3f4" : "#f4f3f4"}
        onValueChange={onPress}
        value={value}
      />
    ) : (
      <ChevronRight color={COLORS.textSecondary} size={20} />
    )}
  </TouchableOpacity>
);

const SettingsScreen = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [biometric, setBiometric] = useState(true);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        {/* Profile Header */}
        <LinearGradient
          colors={[COLORS.primary, '#373689']}
          style={styles.header}
        >
          <View style={styles.profileRow}>
            <Image 
              source={{ uri: 'https://i.pravatar.cc/300?img=12' }} 
              style={styles.avatar} 
            />
            <View style={styles.profileInfo}>
              <Text style={styles.name}>Biniyam Tessema</Text>
              <Text style={styles.phone}>+251 91 234 5678</Text>
              <TouchableOpacity style={styles.editBtn}>
                <Text style={styles.editBtnText}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Account</Text>
          <SettingItem icon={User} label="Personal Information" onPress={() => {}} />
          <SettingItem icon={Shield} label="KYC Documents" onPress={() => {}} />
          <SettingItem icon={Globe} label="Language" onPress={() => {}} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <SettingItem 
            icon={Bell} 
            label="Push Notifications" 
            type="switch" 
            value={notifications} 
            onPress={() => setNotifications(!notifications)} 
          />
          <SettingItem 
            icon={Moon} 
            label="Dark Mode" 
            type="switch" 
            value={darkMode} 
            onPress={() => setDarkMode(!darkMode)} 
          />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Security</Text>
          <SettingItem 
            icon={Lock} 
            label="Biometric Login" 
            type="switch" 
            value={biometric} 
            onPress={() => setBiometric(!biometric)} 
          />
          <SettingItem icon={Lock} label="Change PIN" onPress={() => {}} />
          <SettingItem icon={Shield} label="Manage Devices" onPress={() => {}} />
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Support</Text>
          <SettingItem icon={HelpCircle} label="Help Center" onPress={() => {}} />
          <SettingItem icon={HelpCircle} label="Contact Us" onPress={() => {}} />
        </View>

        <TouchableOpacity style={styles.logoutBtn}>
          <LogOut color={COLORS.danger} size={20} />
          <Text style={styles.logoutText}>Log Out</Text>
        </TouchableOpacity>

        <Text style={styles.version}>Version 2.4.0</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  scroll: { paddingBottom: 40 },
  header: {
    padding: 20,
    paddingBottom: 30,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    marginBottom: 20,
  },
  profileRow: { flexDirection: 'row', alignItems: 'center' },
  avatar: { width: 70, height: 70, borderRadius: 35, borderWidth: 3, borderColor: 'white' },
  profileInfo: { marginLeft: 15 },
  name: { fontSize: 20, fontWeight: 'bold', color: 'white', marginBottom: 4 },
  phone: { fontSize: 14, color: 'rgba(255,255,255,0.8)', marginBottom: 8 },
  editBtn: { backgroundColor: 'rgba(255,255,255,0.2)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 12, alignSelf: 'flex-start' },
  editBtnText: { color: 'white', fontSize: 12, fontWeight: '600' },
  
  section: {
    backgroundColor: COLORS.surface,
    marginHorizontal: SIZES.padding,
    marginBottom: 15,
    borderRadius: SIZES.radius,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: COLORS.textSecondary,
    marginBottom: 10,
    marginLeft: 10,
    marginTop: 5,
    textTransform: 'uppercase',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
  },
  itemLeft: { flexDirection: 'row', alignItems: 'center' },
  iconBox: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#F0F9FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  itemLabel: { fontSize: 16, color: COLORS.text, fontWeight: '500' },
  
  logoutBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FEF2F2',
    marginHorizontal: SIZES.padding,
    marginTop: 10,
    padding: 15,
    borderRadius: SIZES.radius,
    borderWidth: 1,
    borderColor: '#FECACA',
  },
  logoutText: { color: COLORS.danger, fontWeight: 'bold', fontSize: 16, marginLeft: 10 },
  version: { textAlign: 'center', color: COLORS.textSecondary, marginTop: 20, fontSize: 12 },
});

export default SettingsScreen;
