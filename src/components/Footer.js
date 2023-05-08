import React from 'react';
import "./../css/footer.css";

const Footer = () => {
  return (
    <div className='footer'>
      <div className = 'footer-subscribe' >
        <div className='container'>
          <div className='row'>
            <div className='col-12 col-lg-5'>
              <div className='subscribe-content'>
                <h6 class="entry-subtitle">$20 discount for your first order</h6>
                <h3 class="entry-title">Join our newsletter and get...</h3>
              </div>
              <div className='entry-teaser'>
                <p>Join our email subscription now to get updates on promotions and coupons.</p>
              </div>
              <div className='form-wrapper'>
                <form>
                  <div className='input-text'>
                    <input className='subscribe-input' placeholder='Your email address' />
                    <input type="submit" />
                  </div>
                </form>
              </div>
            </div>
            <div className='col-12 col-lg-7'>
              <div className='subscribe-image'>
                <img  src='https://klbtheme.com/bacola/wp-content/uploads/2021/04/coupon.png' alt='hihi'/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='footer-iconboxes'>
        <div className='container'>
          <div className='row'>
            <div className='col col-12 col-md-6 col-lg-3'>
              <div className='iconbox'>
                <div className='iconbox-icon'></div>
                <div className='iconbox-detail'>
                  <span>Everyday fresh products</span>
                </div>
              </div>
            </div>
            <div className='col col-12 col-md-6 col-lg-3'>
              <div className='iconbox'>
                <div className='iconbox-icon'></div>
                <div className='iconbox-detail'>
                  <span>Everyday fresh products</span>
                </div>
              </div>
            </div>
            <div className='col col-12 col-md-6 col-lg-3'>
              <div className='iconbox'>
                <div className='iconbox-icon'></div>
                <div className='iconbox-detail'>
                  <span>Everyday fresh products</span>
                </div>
              </div>
            </div>
            <div className='col col-12 col-md-6 col-lg-3'>
              <div className='iconbox'>
                <div className='iconbox-icon'></div>
                <div className='iconbox-detail'>
                  <span>Everyday fresh products</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='footer-contacts'>
        <div className='container'>
          <div className='column column-left'>
            <div className='site-phone'>
              <div className='phone-icon'></div>
              <div className='phone-detail'>
                <h4 class="entry-title">8 800 555-55</h4>
                <span>Working 8:00 - 22:00</span>
              </div>
            </div>
          </div>
          <div className='column column-right'>
            <div className='site-mobile-app'>
              <div className='app-content'>
                <h6 class="entry-title">Download App on Mobile :</h6>
                <span>15% discount on your first purchase</span>
              </div>
              <div className='app-buttons'>
                <a>
                  <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/google-play.png" alt="app" />
                </a>
                <a>
                  <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/app-store.png" alt="app" />
                </a>
              </div>
            </div>
            <div className='site-social'>
              <ul>
                <li>

                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className='footer-bottom border-enable'>
        <div className='container'>
          <div className='site-copyright'>
            <p>Copyright 2022 © Bacola WordPress Theme. All rights reserved. Powered by KlbTheme.</p>
          </div>
          <nav class="site-menu footer-menu">
							<ul id="menu-footer-menu" class="menu"><li id="menu-item-1889" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-privacy-policy menu-item-1889"><a href="https://klbtheme.com/bacola/privacy-policy/">Privacy Policy</a></li>
                <li id="menu-item-2066" class="menu-item menu-item-type-post_type menu-item-object-page menu-item-2066"><a href="https://klbtheme.com/bacola/terms-and-conditions/">Terms and Conditions</a></li>
                <li id="menu-item-1844" class="menu-item menu-item-type-custom menu-item-object-custom menu-item-1844"><a href="#">Cookie</a></li>
              </ul>						
          </nav>
          <div class="site-payments">
            <a href="#">
              <img src="https://klbtheme.com/bacola/wp-content/uploads/2021/04/payments.jpg" alt="payment" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
