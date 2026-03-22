import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { removeItem } from '../store/cartSlice';
import { CartItem as CartItemType } from '../store/cartSlice';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }: CartItemProps) => {
  const dispatch = useDispatch();

  const handleRemove = (): void => {
    dispatch(removeItem(item.id));
  };

  const itemTotal = (item.quantity * item.price).toFixed(2);

  return (
    <View style={styles.container}>
      <View style={styles.infoSection}>
        <Text style={styles.itemName}>{item.name}</Text>

        <View style={styles.detailsRow}>
          <Text style={styles.detail}>Qty: {item.quantity}</Text>
          <Text style={styles.detail}>Price: ${item.price.toFixed(2)}</Text>
        </View>

        <Text style={styles.itemTotal}>Total: ${itemTotal}</Text>
      </View>

      <TouchableOpacity style={styles.removeButton} onPress={handleRemove}>
        <Text style={styles.removeButtonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 8,
    padding: 12,
    marginBottom: 10,
  },
  infoSection: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 6,
  },
  detailsRow: {
    flexDirection: 'row',
    marginBottom: 6,
  },
  detail: {
    fontSize: 13,
    color: '#666',
    marginRight: 12,
  },
  itemTotal: {
    fontSize: 14,
    fontWeight: '600',
    color: '#007AFF',
  },
  removeButton: {
    backgroundColor: '#ff3b30',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
    marginLeft: 10,
  },
  removeButtonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
});

export default CartItem;
