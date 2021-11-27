import { CCard, CCol } from "@coreui/react";
import React, { useContext } from "react";
import { CartContext } from "../App";
import styles from './CartItem.module.css';

const CartItem = ({id,name,image,description,price,quantity}) => {
  const {decerementItem,incrementItem} = useContext(CartContext);
    return(
        <>
           <CCol sm={12}>      
           <CCard className={styles.card}>
             <div className={styles.card_wrapper}>
             <div className={styles.item_info}>
               <div className={styles.name}>{name}</div>
               <div className={styles.price}>₹ {price}</div>
               <div className={styles.desc}>{description}</div>
             </div>
  
             
              
               <div>
               <div> <img className={styles.image_style} src={image}/></div>
               <div className={styles.card_btn_wrapper}>
              <button className={styles.btn_action} onClick={() => decerementItem(id)}>
                <i class="fas fa-minus"></i>
              </button>
              <button className={styles.btn_action}>{quantity}</button>
              <button className={styles.btn_action} onClick={() => incrementItem(id)}><i class="fas fa-plus"></i></button>
              </div>
          </div>
          </div>
        </CCard>
          </CCol>
        </>
    );
};

export default CartItem;