import React, { useContext, useEffect } from "react";
import { CartContext } from "../App";
import styles from './cart.module.css';
import image from '../assests/empty_img.png';
import { CButton } from "@coreui/react";

const Cart = ({quantity }) => {
    const {item,clearCart,totalAmount,totalItem,decerementItem,incrementItem} = useContext(CartContext);
    useEffect(()=>{
      

    },[quantity])

    if(totalItem < 1){
        return(
               <div className={styles.empty_screen}>
                 <h3>Food not Available</h3>
                 <img src={image} className={styles.image_wrapper} alt="food not available"/>
                 <p className={styles.para}>Good food is always cooking! Go ahead, order some yummy items from the menu.</p>
               </div>
          
        );
      }

      const quantities = item.filter((data) => data.quantity > 0);
    return(
        <>
         <div>
             <div><h3 className={styles.heading}> My Cart</h3></div>
             <div>{totalItem} Food Available in  cart</div>
             {quantities.map((data) => {
                 return(
                     <>
                 <div className={styles.cart_item_wrapper} key={data.id}>
                     <div>
                         <div>{data.name}</div>
                         <div>₹{data.price}</div>
                         <div>  <button className={styles.btn_action} onClick={() => decerementItem(data.id)}>
                                   <i class="fas fa-minus"></i>
                                 </button>
                                 <button className={styles.btn_action}>{data.quantity}</button>
                                 <button className={styles.btn_action} onClick={() => incrementItem(data.id)}><i class="fas fa-plus"></i></button></div>
                         </div>
                     <div><img className={styles.cart_food_img} src={data.image} alt="food"/></div>
                 </div>
                 <hr/>
                 </>
             )})}
             <div className={styles.total_amount}>
                 <div>Total Amount</div>
                 <div className={styles.amount}>₹{totalAmount}</div>
            </div>
             <div className={styles.checkout_btn}><CButton className={styles.btn}>Checkout</CButton></div>
         </div>
        </>
    );
};

export default Cart;