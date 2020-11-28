import { ActionMap, Actions } from '../index';

export enum ActionTypes {
  ADD = 'ADD_PRODUCT',
}

export type ShoppingCart = number;

type Payload = {
  [ActionTypes.ADD]: undefined;
};

export type ShoppingCartActions = ActionMap<Payload>[keyof ActionMap<Payload>];

export const shoppingCartReducer = (state: number, action: Actions): any => {
  switch (action.type) {
    case ActionTypes.ADD:
      return state + 1;

    default:
      return state;
  }
};
