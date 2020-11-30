import React, { useContext } from 'react';
import { AppContext, Types } from '../../context';

const Products: React.FC = ({ children }) => {
  const { state, dispatch } = useContext(AppContext);

  return (
    <div className="p-12">
      <button
        className="bg-green-400 rounded-lg py-2 px-4 mr-4"
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
