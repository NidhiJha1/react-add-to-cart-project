import React, { useContext } from "react";
import { CartContext } from "../App";
import styles from './style.module.css';

const Navbar = () => {
    const {totalItem } = useContext(CartContext);
    return(
        <>
            <header>
                 <div className={styles.header_wrapper}>
                     <div><span className={styles.icon}>
                         <i class="fas fa-arrow-left"></i></span>Continue Shopping</div>
                     <div className={styles.right_menu}>
                     <div className={styles.navbar_icon}><span className={styles.icon}><i class="fas fa-search"></i></span>Search</div>
                     <div className={styles.navbar_icon}><span className={styles.icon}><i class="fas fa-badge-percent"></i></span>Discount</div>
                     <div className={styles.navbar_icon}><span className={styles.icon}><i class="fas fa-life-ring"></i></span>Help</div>
                     <div className={styles.navbar_icon}><span className={styles.icon}><i class="fas fa-user"></i></span>Sign In</div>
                     <div className={styles.cart}><span className={styles.icon}><i class="fas fa-shopping-cart"></i></span><span className={styles.cart_item}>{totalItem}</span>
                     <span className={styles.cart_text}>Cart</span> 
                     </div>
                     </div>
                 </div>
           </header>
        </>
    );
};

export default Navbar;