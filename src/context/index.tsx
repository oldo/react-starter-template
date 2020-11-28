import React, { createContext, useReducer, Dispatch } from 'react';

import {
  ProductActions,
  productReducer,
  ActionTypes as ProductActionTypes,
  Products,
} from './products';
import {
  ShoppingCartActions,
  shoppingCartReducer,
  ActionTypes as ShoppingCartActionTypes,
  ShoppingCart,
} from './shoppingCart';

// function to create types for actions
export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

// type for all actions
export type Actions = ProductActions | ShoppingCartActions;

// enum of all action types
export const Types = { ...ProductActionTypes, ...ShoppingCartActionTypes };

// type of context state
type StateType = {
  products: Products;
  shoppingCart: ShoppingCart;
};

// context initial state
const initialState: StateType = {
  products: [],
  shoppingCart: 0,
};

// create AppContext
const AppContext = createContext<{
  state: StateType;
  dispatch: Dispatch<Actions>;
}>({
  state: initialState,
  dispatch: () => null,
});

// combine reducers
const mainReducer = (
  { products, shoppingCart }: StateType,
  action: Actions
) => ({
  products: productReducer(products, action),
  shoppingCart: shoppingCartReducer(shoppingCart, action),
});

// create AppProvider
const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppProvider, AppContext };
