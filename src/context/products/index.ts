import { ActionMap, Actions } from '../index';

export enum ActionTypes {
  CREATE = 'CREATE_PRODUCT',
  DELETE = 'DELETE_PRODUCT',
}

type Product = {
  id: number;
  name: string;
  price: number;
};

export type Products = Product[];

type Payload = {
  [ActionTypes.CREATE]: {
    id: number;
    name: string;
    price: number;
  };
  [ActionTypes.DELETE]: {
    id: number;
  };
};

export type ProductActions = ActionMap<Payload>[keyof ActionMap<Payload>];

export const productReducer = (state: Products, action: Actions): any => {
  switch (action.type) {
    case ActionTypes.CREATE:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
        },
      ];

    case ActionTypes.DELETE:
      return [...state.filter(product => product.id !== action.payload.id)];

    default:
      return state;
  }
};
