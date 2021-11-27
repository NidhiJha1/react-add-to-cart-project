import { CButton, CCol, CContainer, CRow } from "@coreui/react";
import React, { useContext } from "react";
import { CartContext } from "../App";
import CartItem from "./CartItem";
import styles from './CartItem.module.css';
import image from '../assests/empty_img.png';
import Menu from "./menu";
import Cart from "./cart";

const CartContainer = () => {
 const {item,clearCart,totalAmount } = useContext(CartContext);

//  if(item.length === 0){
//    return(
//        <CContainer className={styles.container_emapty}>  
//           <div className={styles.empty_screen}>
//             <h3>Food not Available</h3>
//             <img src={image} alt="food not available"/>
//           </div>
//        </CContainer> 
//    );
//  }
    return(
        <>
      <CContainer className={styles.container}> 
      <CCol sm={3}><Menu/></CCol>  
      <CCol sm={6} className={styles.col_border}>
          <CRow>{
            item.map((item) => {
              return(
                   <CartItem key={item.id} {...item}/>
              );
            })
         }
         </CRow>
      </CCol>
      <CCol sm={3}> <Cart/></CCol>  
         {/* <CButton onClick={clearCart}>Clear Cart</CButton>
         {totalAmount} */}
      </CContainer>
        </>
    );
};

export default CartContainer;