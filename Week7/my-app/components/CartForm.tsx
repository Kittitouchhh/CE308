import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { addItem } from '../store/cartSlice';

interface FormInput {
  name: string;
  quantity: string;
  price: string;
}

const CartForm: React.FC<{}> = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState<FormInput>({
    name: '',
    quantity: '',
    price: '',
  });
  const [error, setError] = useState<string>('');

  const handleChange = (field: keyof FormInput, value: string): void => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setError('');
  };

  const validateForm = (): boolean => {
    if (!formData.name.trim()) {
      setError('Please enter a product name');
      return false;
    }

    const quantity = parseFloat(formData.quantity);
    if (!formData.quantity || isNaN(quantity) || quantity <= 0) {
      setError('Quantity must be a positive number');
      return false;
    }

    const price = parseFloat(formData.price);
    if (!formData.price || isNaN(price) || price <= 0) {
      setError('Price must be a positive number');
      return false;
    }

    return true;
  };

  const handleSubmit = (): void => {
    if (!validateForm()) {
      Alert.alert('Validation Error', error);
      return;
    }

    dispatch(
      addItem({
        name: formData.name.trim(),
        quantity: parseFloat(formData.quantity),
        price: parseFloat(formData.price),
      })
    );

    setFormData({
      name: '',
      quantity: '',
      price: '',
    });
    setError('');
    Alert.alert('Success', 'Item added to cart!');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Item to Cart</Text>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Product Name:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter product name"
          value={formData.name}
          onChangeText={(value) => handleChange('name', value)}
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Quantity:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter quantity"
          value={formData.quantity}
          onChangeText={(value) => handleChange('quantity', value)}
          keyboardType="decimal-pad"
          placeholderTextColor="#999"
        />
      </View>

      <View style={styles.formGroup}>
        <Text style={styles.label}>Price:</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter price"
          value={formData.price}
          onChangeText={(value) => handleChange('price', value)}
          keyboardType="decimal-pad"
          placeholderTextColor="#999"
        />
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  formGroup: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 6,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 14,
    backgroundColor: '#fff',
    color: '#333',
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  errorText: {
    color: '#d32f2f',
    fontSize: 13,
    marginBottom: 12,
    fontWeight: '500',
  },
});

export default CartForm;
