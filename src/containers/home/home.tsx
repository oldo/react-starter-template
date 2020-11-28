import React, { useContext } from 'react';
import { AppContext, Types } from '../../context';

const Products: React.FC = ({ children }) => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div>
      <button
        onClick={() => {
          dispatch({
            type: Types.ADD,
          });
        }}
      >
        click
      </button>
      {state.shoppingCart}
    </div>
  );
};

export default Products;
