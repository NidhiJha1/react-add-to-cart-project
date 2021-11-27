import React from "react";
import styles from './style.module.css';
import ReactStars from 'react-stars';
import image from '../assests/banner_image.jpg';

const AppBAnner = () => {
    return(
        <>
        <div>
            <div className={styles.page_list}>
              <div className={styles.page}>Home / Mumbai / Marol Sakinaka /Francesco's Pizzeria</div>  
            </div>
            <div className={styles.banner}>
               <div className={styles.main_banner}>
                   <div className={styles.banner_img}>
                       <img className={styles.banner_img_wrapper} src={image} alt="banner"/>
                   </div>
                   <div className={styles.info}>
                    <div className={styles.info_name}>Francesco's Pizzeria</div>
                    <div className={styles.tag_wrapper}><span className={styles.tag}>Restaurant Unserviceable</span> Pizzas, Italian</div>
                    <div className={styles.Marol}>Marol Sakinaka, Marol Sakinaka</div>
                    <div className={styles.product_info}>
                        <div>
                            <div className={styles.star_rating}>
                                <div className={styles.reactStars}> <ReactStars
                                           count={1}
                                           value={5}
                                           size={14}
                                           color2={'#fff'}
                                          />
                                 </div>
                                <div className={styles.rating_number}><strong>4.9</strong></div></div>
                            <div className={styles.desc}>20+ Ratings</div>
                        </div>
                        <div className={styles.line}></div>
                        <div>
                            <div><strong>Unserviceable</strong></div>
                            <div className={styles.desc}>Check Back Later</div>
                        </div>
                        <div className={styles.line}></div>
                        <div>
                            <div><strong>₹ 1000</strong></div>
                            <div className={styles.desc}>Cost for two</div>
                        </div>
                        
                    </div>
                  </div>
                  <div className={styles.offer} title="Offer">
                      <div className={styles.main_heading}>
                          Offer
                      </div>
                      <div><span className={styles.icon_offer}><i class="fas fa-badge-percent"></i></span>60% off up to ₹120 | Use code TRYNEW</div>
                      <div><span className={styles.icon_offer}><i class="fas fa-badge-percent"></i></span>15% off | Use code PARTY</div>
                  </div>
               </div>
           
            </div>
        </div>
        </>
    );
};

export default AppBAnner;