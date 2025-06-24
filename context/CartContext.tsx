'use client';

import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { Product, CartItem } from '@/types';

// --- Define the shape of our state and actions ---
type State = {
  items: CartItem[];
};

type Action =
  | { type: 'ADD_ITEM'; payload: Product }
  | { type: 'REMOVE_ITEM'; payload: { id: number } }
  | { type: 'UPDATE_QUANTITY'; payload: { id: number; quantity: number } };

// --- The Reducer Function: The heart of our state logic ---
const cartReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case 'ADD_ITEM': {
      const itemExists = state.items.find(item => item.id === action.payload.id);
      if (itemExists) {
        // If item exists, just increase its quantity
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      }
      // If item doesn't exist, add it to the cart
      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }
    case 'REMOVE_ITEM': {
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload.id),
      };
    }
    case 'UPDATE_QUANTITY': {
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ).filter(item => item.quantity > 0), // Remove item if quantity is 0
      };
    }
    default:
      return state;
  }
};

// --- Create the Context ---
const CartStateContext = createContext<State | undefined>(undefined);
const CartDispatchContext = createContext<React.Dispatch<Action> | undefined>(undefined);

const initialState: State = {
  items: [],
};

// --- The Provider Component ---
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartStateContext.Provider value={state}>
      <CartDispatchContext.Provider value={dispatch}>
        {children}
      </CartDispatchContext.Provider>
    </CartStateContext.Provider>
  );
};

// --- Custom Hooks for easy access ---
export const useCartState = () => {
  const context = useContext(CartStateContext);
  if (context === undefined) {
    throw new Error('useCartState must be used within a CartProvider');
  }
  return context;
};

export const useCartDispatch = () => {
  const context = useContext(CartDispatchContext);
  if (context === undefined) {
    throw new Error('useCartDispatch must be used within a CartProvider');
  }
  return context;
};