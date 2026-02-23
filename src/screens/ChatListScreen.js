import React from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS, SIZES } from '../constants/theme';
import { Search } from 'lucide-react-native';

const ChatListScreen = ({ navigation }) => {
  const contacts = [
    { id: '1', name: 'Abebe Kebede', lastMsg: 'Sent you 500 ETB', time: '10:30 AM', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: '2', name: 'Chaltu Tadesse', lastMsg: 'Can you send me 200?', time: 'Yesterday', avatar: 'https://i.pravatar.cc/150?img=5' },
    { id: '3', name: 'Biniyam Moges', lastMsg: 'Thanks!', time: 'Yesterday', avatar: 'https://i.pravatar.cc/150?img=3' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.chatItem} 
      onPress={() => navigation.navigate('ChatDetail', { contact: item })}
    >
      <Image source={{ uri: item.avatar }} style={styles.avatar} />
      <View style={styles.chatInfo}>
        <View style={styles.chatHeader}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.time}>{item.time}</Text>
        </View>
        <Text style={styles.lastMsg} numberOfLines={1}>{item.lastMsg}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Chats</Text>
        <TouchableOpacity style={styles.searchBtn}>
          <Search color={COLORS.text} size={24} />
        </TouchableOpacity>
      </View>
      <FlatList
        data={contacts}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: {
    padding: SIZES.padding,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
  },
  title: { fontSize: 24, fontWeight: 'bold', color: COLORS.text },
  searchBtn: { padding: 8 },
  list: { padding: SIZES.padding },
  chatItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.surface,
    padding: 15,
    borderRadius: 12,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 2,
  },
  avatar: { width: 50, height: 50, borderRadius: 25, backgroundColor: '#EEE' },
  chatInfo: { flex: 1, marginLeft: 15 },
  chatHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 5 },
  name: { fontSize: 16, fontWeight: '600', color: COLORS.text },
  time: { fontSize: 12, color: COLORS.textSecondary },
  lastMsg: { fontSize: 14, color: COLORS.textSecondary },
});

export default ChatListScreen;
