import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { v4 as uuidv4 } from 'uuid';

export interface CartItem {
  id: string;
  name: string;
  quantity: number;
  price: number;
}

export interface CartState {
  items: CartItem[];
  totalAmount: number;
}

const initialState: CartState = {
  items: [],
  totalAmount: 0,
};

const calculateTotalAmount = (items: CartItem[]): number => {
  return items.reduce((total, item) => total + item.quantity * item.price, 0);
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<Omit<CartItem, 'id'>>) => {
      const existingItem = state.items.find(
        (item) => item.name === action.payload.name && item.price === action.payload.price
      );

      if (existingItem) {
        existingItem.quantity += action.payload.quantity;
      } else {
        const newItem: CartItem = {
          id: uuidv4(),
          name: action.payload.name,
          quantity: action.payload.quantity,
          price: action.payload.price,
        };
        state.items.push(newItem);
      }

      state.totalAmount = calculateTotalAmount(state.items);
    },

    removeItem: (state, action: PayloadAction<string>) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      state.totalAmount = calculateTotalAmount(state.items);
    },

    clearCart: (state) => {
      state.items = [];
      state.totalAmount = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
