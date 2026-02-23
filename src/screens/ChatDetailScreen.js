import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, Image, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeft, Send, MoreVertical, CreditCard, Download, Smartphone } from 'lucide-react-native';
import { COLORS, SIZES } from '../constants/theme';

const ChatDetailScreen = ({ navigation, route }) => {
  const { contact } = route.params || { contact: { name: 'Unknown', avatar: '' } };
  
  const [messages, setMessages] = useState([
    { id: '1', text: 'Hey, how are you?', sender: 'them', type: 'text' },
    { id: '2', text: 'I am good. Can you send me 500 ETB for lunch?', sender: 'me', type: 'text' },
    { id: '3', text: 'Sure, sending now.', sender: 'them', type: 'text' },
    { id: '4', text: 'Sent 500.00 ETB', sender: 'them', type: 'transfer', amount: '500.00' },
  ]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim()) {
      setMessages([...messages, { id: Date.now().toString(), text: inputText, sender: 'me', type: 'text' }]);
      setInputText('');
    }
  };

  const handleBankingAction = (action) => {
    Alert.alert(action, `Initiating ${action} for ${contact.name}`);
    // In a real app, this would open a modal or navigate to a pre-filled form
  };

  const renderMessage = ({ item }) => {
    const isMe = item.sender === 'me';
    
    if (item.type === 'transfer') {
      return (
        <View style={[styles.msgBubble, isMe ? styles.myMsg : styles.theirMsg, styles.transferBubble]}>
          <Text style={styles.transferText}>{item.text}</Text>
          <TouchableOpacity style={styles.claimBtn}>
            <Text style={styles.claimText}>View Receipt</Text>
          </TouchableOpacity>
        </View>
      );
    }

    return (
      <View style={[styles.msgBubble, isMe ? styles.myMsg : styles.theirMsg]}>
        <Text style={[styles.msgText, isMe ? styles.myMsgText : styles.theirMsgText]}>{item.text}</Text>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
          <ArrowLeft color={COLORS.text} size={24} />
        </TouchableOpacity>
        <Image source={{ uri: contact.avatar }} style={styles.avatar} />
        <View style={styles.headerInfo}>
          <Text style={styles.name}>{contact.name}</Text>
          <Text style={styles.status}>Online</Text>
        </View>
        <TouchableOpacity>
          <MoreVertical color={COLORS.text} size={24} />
        </TouchableOpacity>
      </View>

      {/* Banking Action Bar */}
      <View style={styles.actionBar}>
        <TouchableOpacity style={styles.actionBtn} onPress={() => handleBankingAction('Send Money')}>
          <View style={[styles.actionIcon, { backgroundColor: '#E0F2FE' }]}>
            <CreditCard color={COLORS.primary} size={20} />
          </View>
          <Text style={styles.actionLabel}>Send</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.actionBtn} onPress={() => handleBankingAction('Request Money')}>
          <View style={[styles.actionIcon, { backgroundColor: '#FEF3C7' }]}>
            <Download color={COLORS.secondary} size={20} />
          </View>
          <Text style={styles.actionLabel}>Request</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionBtn} onPress={() => handleBankingAction('Top Up')}>
          <View style={[styles.actionIcon, { backgroundColor: '#D1FAE5' }]}>
            <Smartphone color="#059669" size={20} />
          </View>
          <Text style={styles.actionLabel}>Top Up</Text>
        </TouchableOpacity>
      </View>

      {/* Chat Area */}
      <FlatList
        data={messages}
        keyExtractor={item => item.id}
        renderItem={renderMessage}
        contentContainerStyle={styles.chatList}
      />

      {/* Input */}
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} keyboardVerticalOffset={10}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Type a message..."
            value={inputText}
            onChangeText={setInputText}
          />
          <TouchableOpacity onPress={handleSend} style={styles.sendBtn}>
            <Send color="white" size={20} />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.background },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: COLORS.surface,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  backBtn: { padding: 8 },
  avatar: { width: 40, height: 40, borderRadius: 20, marginHorizontal: 10 },
  headerInfo: { flex: 1 },
  name: { fontWeight: 'bold', fontSize: 16, color: COLORS.text },
  status: { fontSize: 12, color: COLORS.success },
  
  actionBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    backgroundColor: COLORS.surface,
    marginBottom: 5,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  actionBtn: { alignItems: 'center' },
  actionIcon: { width: 40, height: 40, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginBottom: 4 },
  actionLabel: { fontSize: 11, color: COLORS.text, fontWeight: '500' },

  chatList: { padding: 15 },
  msgBubble: { padding: 12, borderRadius: 16, maxWidth: '75%', marginBottom: 10 },
  myMsg: { alignSelf: 'flex-end', backgroundColor: COLORS.primary, borderBottomRightRadius: 2 },
  theirMsg: { alignSelf: 'flex-start', backgroundColor: '#E5E7EB', borderBottomLeftRadius: 2 },
  msgText: { fontSize: 15 },
  myMsgText: { color: 'white' },
  theirMsgText: { color: COLORS.text },
  
  transferBubble: { backgroundColor: COLORS.surface, borderWidth: 1, borderColor: COLORS.border, width: '70%', alignItems: 'center' },
  transferText: { fontWeight: 'bold', fontSize: 16, color: COLORS.text, marginBottom: 8 },
  claimBtn: { backgroundColor: COLORS.secondary, paddingVertical: 6, paddingHorizontal: 12, borderRadius: 8 },
  claimText: { color: 'white', fontSize: 12, fontWeight: '600' },

  inputContainer: { flexDirection: 'row', padding: 10, backgroundColor: COLORS.surface, alignItems: 'center' },
  input: { flex: 1, backgroundColor: COLORS.background, borderRadius: 20, paddingHorizontal: 15, paddingVertical: 8, marginRight: 10 },
  sendBtn: { width: 40, height: 40, borderRadius: 20, backgroundColor: COLORS.primary, justifyContent: 'center', alignItems: 'center' },
});

export default ChatDetailScreen;
