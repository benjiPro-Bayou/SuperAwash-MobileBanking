import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { COLORS, SIZES } from '../constants/theme';

const Input = ({ label, placeholder, value, onChangeText, keyboardType = 'default', secureTextEntry }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={COLORS.textSecondary}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { marginBottom: 15 },
  label: { fontSize: 14, color: COLORS.text, marginBottom: 5, fontWeight: '500' },
  input: {
    backgroundColor: COLORS.surface,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: SIZES.radius,
    padding: 12,
    fontSize: 16,
    color: COLORS.text,
  },
});

export default Input;
