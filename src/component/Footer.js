import React from "react";
import styles from './style.module.css';

const Footer = () => {
    return(
        <>
           <footer className={styles.footer}>
              <div className="footer_wrapper">
                &copy; Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut dapibus libero sapien, 
              </div>
           </footer>
        </>
    );
};

export default Footer;