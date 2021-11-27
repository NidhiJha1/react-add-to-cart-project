import './App.css';
import AppBAnner from './component/banner';
import CartContainer from './component/CartContainer';
import Footer from './component/Footer';
import Navbar from './component/Navbar';
import '@coreui/coreui/dist/css/coreui.min.css'
import { createContext, useEffect, useReducer} from 'react';
import {data} from './Cart-item';
import { reducer } from './component/reducer';

const allCategories = [ ...new Set(data.map((item) => item.category))];
export const CartContext = createContext();

const initialState={
  item: data,
  totalAmount:0,
  totalItem:0,
};
function App() {
  const [state,dispatch] = useReducer(reducer,initialState);


  const clearCart = () => {
    return dispatch({type: 'CLEAR_CART'});
  }

  const decerementItem = (id) =>{
    return dispatch({
      type: 'DECREMENT',
      payload:id,
    });
  };

  const incrementItem = (id) =>{
    return dispatch({
      type: 'INCREMMENT',
      payload:id,
    })
  }

  useEffect(() => {
    dispatch({type: 'GET_TOTAL'});
  },[state.item]);

  return (
    <div className="App">
      <CartContext.Provider value={{...state, clearCart , decerementItem, incrementItem,allCategories}}>
          <Navbar/>
          <AppBAnner/>
          <CartContainer/>
          <Footer/>
      </CartContext.Provider>
    </div>
  );
}

export default App;
