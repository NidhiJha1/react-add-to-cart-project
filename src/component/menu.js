import React, { useContext } from "react";
import { CartContext } from "../App";
import styles from './CartItem.module.css';

const Menu = () => {
    const {allCategories } = useContext(CartContext);
    console.log(allCategories);
    return(
        <>
        <div className={styles.menu_wrapper}>
            {allCategories.map((data,index) => (
               <div key={index} className={styles.list_menu}> <button>{data}</button></div>
            ))}        
        </div>
        </>
    );
};

export default Menu;