import React, { useEffect, useState} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import {FreeMode} from "swiper";
import { Link } from "react-router-dom";
import Rating from './Rating';
import Pagination from './Pagination';
import { useDispatch, useSelector } from 'react-redux';
import { listProduct } from './../../Redux/Actions/ProductActions.js';
import Loading from './../LoandingError/Loading.js';
import Message from './../LoandingError/Error.js';
import './../../css/product.css';
import 'swiper/css';
import pro from "./../../image/product1.png";
import Countdown from './Countdown';
import banner3 from './../../image/banner3.png'
import banner4 from './../../image/banner4.jfif';


const ShopSection = (props) => {
  
  const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMinutes, setTimerMinutes] = useState();
  const [timerSeconds, setTimerSeconds] = useState();

  let interval;


  const startTimer = () => {
    const countDownDate = new Date("May 30,2021 ").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        // Stop Timer

        clearInterval(interval.current);
      } else {
        // Update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });
  
  const { keyword } = props;
  const dispatch  = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products }  = productList;

  useEffect(() => {
    dispatch(listProduct(keyword)); 
  }, [dispatch, keyword]);
  return (
    <>
      <div className='container' style={{ paddingTop: '0', marginTop:'-10px', display:'none'}}>
        <div className='row'>
          <div className='col-lg-3'>
            <div className='menu-3 col-12'>
              <div className='menu-pro'>
                <ul className='menu-pro-1'>
                  <li>
                    <i class="fa-solid fa-tv"></i>
                    <h6>Televison</h6>
                  </li>
                  <li>
                    <i class="fa-solid fa-tv"></i>
                    <h6>Televison</h6>
                  </li>
                  <li>
                    <i class="fa-solid fa-tv"></i>
                    <h6>Televison</h6>
                  </li>
                  <li>
                    <i class="fa-solid fa-tv"></i>
                    <h6>Televison</h6>
                  </li>
                  <li>
                    <i class="fa-solid fa-tv"></i>
                    <h6>Televison</h6>
                  </li>
                  <li>
                    <i class="fa-solid fa-tv"></i>
                    <h6>Televison</h6>
                  </li>
                  <li>
                    <i class="fa-solid fa-tv"></i>
                    <h6>Televison</h6>
                  </li>
                  <li>
                    <i class="fa-solid fa-tv"></i>
                    <h6>Televison</h6>
                  </li>
                </ul>
                <hr/>
                <ul className='menu-key'>
                  <li>
                    Value of the Day
                  </li>
                  <li>
                    Top 100 Offers
                  </li>
                  <li>
                    New Arrivals
                  </li>
                </ul>
              </div>
            </div>
            <div className='col-12 banner1'>
            </div>
            <div className='col-12 banner2'>
              <h5>TRENDING PRODUCTS</h5>
                <div className='banner2-pro'>
                  <div className='bn-pro-image'>
                   
                  </div>
                  <div className='bn-pro-text'>
                    <h5></h5>
                    <h4></h4>
                  </div>
                </div>
            </div>
          </div>
          <div className='col-lg-9'>
            <div className='banner'>

            </div>
            <h3>BEST SELLERS</h3>
            <p>Do not miss the current offers until the end of March.</p>
            <div className='justify-content-center produc1'>
              <Swiper
              freeMode={true}
              grabCursor={true}
              modules={[FreeMode]}
              className="mySwiper"
              slidesPerView={4}
              spaceBetween={30}
              >
                <SwiperSlide>
                  <div className='card'>
                    <div className='card-sale'>
                      <span>- 20%</span>
                    </div>
                    <div className='card-icon'>
                      <span className='icon-heart'>
                        <i class="fa-regular fa-heart"></i>
                      </span>
                    </div>
                    <div className='image-card'>
                      <img src={pro} alt="pro" />
                    </div>
                    <div className='container'>
                      <div className='card-text'>
                        <h4>BLue Diamond Almonds</h4>
                        <h6>IN STOCK</h6>
                        <div className='card-star'>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <span> 1 </span>
                        </div>
                        <h5>$12</h5>
                      </div>
                      <div className='card-btn'>
                        <button>Add to cart</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='card'>
                    <div className='card-sale'>
                      <span>- 20%</span>
                    </div>
                    <div className='card-icon'>
                      <span className='icon-heart'>
                        <i class="fa-regular fa-heart"></i>
                      </span>
                    </div>
                    <div className='image-card'>
                      <img src={pro} alt="pro" />
                    </div>
                    <div className='container'>
                      <div className='card-text'>
                        <h4>BLue Diamond Almonds</h4>
                        <h6>IN STOCK</h6>
                        <div className='card-star'>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <span> 1 </span>
                        </div>
                        <h5>$12</h5>
                      </div>
                      <div className='card-btn'>
                        <button>Add to cart</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='card'>
                    <div className='card-sale'>
                      <span>- 20%</span>
                    </div>
                    <div className='card-icon'>
                      <span className='icon-heart'>
                        <i class="fa-regular fa-heart"></i>
                      </span>
                    </div>
                    <div className='image-card'>
                      <img src={pro} alt="pro" />
                    </div>
                    <div className='container'>
                      <div className='card-text'>
                        <h4>BLue Diamond Almonds</h4>
                        <h6>IN STOCK</h6>
                        <div className='card-star'>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <span> 1 </span>
                        </div>
                        <h5>$12</h5>
                      </div>
                      <div className='card-btn'>
                        <button>Add to cart</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='card'>
                    <div className='card-sale'>
                      <span>- 20%</span>
                    </div>
                    <div className='card-icon'>
                      <span className='icon-heart'>
                        <i class="fa-regular fa-heart"></i>
                      </span>
                    </div>
                    <div className='image-card'>
                      <img src={pro} alt="pro" />
                    </div>
                    <div className='container'>
                      <div className='card-text'>
                        <h4>BLue Diamond Almonds</h4>
                        <h6>IN STOCK</h6>
                        <div className='card-star'>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <span> 1 </span>
                        </div>
                        <h5>$12</h5>
                      </div>
                      <div className='card-btn'>
                        <button>Add to cart</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='card'>
                    <div className='card-sale'>
                      <span>- 20%</span>
                    </div>
                    <div className='card-icon'>
                      <span className='icon-heart'>
                        <i class="fa-regular fa-heart"></i>
                      </span>
                    </div>
                    <div className='image-card'>
                      <img src={pro} alt="pro" />
                    </div>
                    <div className='container'>
                      <div className='card-text'>
                        <h4>BLue Diamond Almonds</h4>
                        <h6>IN STOCK</h6>
                        <div className='card-star'>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <span> 1 </span>
                        </div>
                        <h5>$12</h5>
                      </div>
                      <div className='card-btn'>
                        <button>Add to cart</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='card'>
                    <div className='card-sale'>
                      <span>- 20%</span>
                    </div>
                    <div className='card-icon'>
                      <span className='icon-heart'>
                        <i class="fa-regular fa-heart"></i>
                      </span>
                    </div>
                    <div className='image-card'>
                      <img src={pro} alt="pro" />
                    </div>
                    <div className='container'>
                      <div className='card-text'>
                        <h4>BLue Diamond Almonds</h4>
                        <h6>IN STOCK</h6>
                        <div className='card-star'>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <span> 1 </span>
                        </div>
                        <h5>$12</h5>
                      </div>
                      <div className='card-btn'>
                        <button>Add to cart</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='card'>
                    <div className='card-sale'>
                      <span>- 20%</span>
                    </div>
                    <div className='card-icon'>
                      <span className='icon-heart'>
                        <i class="fa-regular fa-heart"></i>
                      </span>
                    </div>
                    <div className='image-card'>
                      <img src={pro} alt="pro" />
                    </div>
                    <div className='container'>
                      <div className='card-text'>
                        <h4>BLue Diamond Almonds</h4>
                        <h6>IN STOCK</h6>
                        <div className='card-star'>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <span> 1 </span>
                        </div>
                        <h5>$12</h5>
                      </div>
                      <div className='card-btn'>
                        <button>Add to cart</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className='card'>
                    <div className='card-sale'>
                      <span>- 20%</span>
                    </div>
                    <div className='card-icon'>
                      <span className='icon-heart'>
                        <i class="fa-regular fa-heart"></i>
                      </span>
                    </div>
                    <div className='image-card'>
                      <img src={pro} alt="pro" />
                    </div>
                    <div className='container'>
                      <div className='card-text'>
                        <h4>BLue Diamond Almonds</h4>
                        <h6>IN STOCK</h6>
                        <div className='card-star'>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <i class="fa-solid fa-star"></i>
                          <span> 1 </span>
                        </div>
                        <h5>$12</h5>
                      </div>
                      <div className='card-btn'>
                        <button>Add to cart</button>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>

            <div className = 'module-body' >
              <div className='banner-wrapper'>
                <div className='banner-content col-7'>
                  <h4 className='sub-text'>Always Taking Care</h4>
                  <h3>In store or online sell your stuff </h3>
                </div>
                <div className='banner-thumbnai col-5'>
                  <img src='https://k4j3j2s7.rocketcdn.me/bacola/wp-content/plugins/bacola-core/elementor/images/banner-box2.jpg' alt='image' />
                </div>
              </div>
            </div>

            {/* sale prodcut */}
            <div className='product-sale'>
              <div className='pro-sale-header'> 
                <div className='pro-sale-header-text col-10'>
                  <h3>HOT PRODUCT FOR<span> THIS WEEK</span></h3>
                  <p>Dont miss this opportunity at a special discount just for this week.</p>
                </div>
                <div className='pro-sale-header-view col-2'>
                  <button>View All</button>
                </div>
              </div>
              <div className='pro-sale-body'>
                <div className='container'>
                  <div className='row'>
                    <div className='pro-sale-image col-4'>
                      <img src={pro} alt='af' />
                      <div className='sale'>
                        <h6>19%</h6>
                      </div>
                    </div>
                    <div className='pro-sale-text col-8'>
                      <h5><span>$5.45</span> $19.99</h5>
                      <h4>Chobani Complete Vanilla Greek Yogurt</h4>
                      <h6>In STOCK</h6>
                      <div className = 'progress-bar' >
                        <span className="progress" style={{ width: "74%" }}></span>
                      </div>
                      <div className='countdown-time'>
                        <Countdown 
                          timerDays={timerDays}
                          timerHours={timerHours}
                          timerMinutes={timerMinutes}
                          timerSeconds={timerSeconds}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* */}
            <div className='code-sale col-12'>
              <h5>Super discount for your <span>first purchase</span></h5>
              <h5 className='code'>FREE24BD</h5>
              <h6>Use discount code in checkout!</h6>
            </div>

            <div className='new-product'>
              <div className='container'>
                <div className='row'>
                  <div className='new-pro-text col-12'>
                    <div className='pro-sale-header-text col-10'>
                      <h3>NEW PRODUCTS</h3>
                      <p>New products with updated stocks.</p>
                    </div>
                    <div className='pro-sale-header-view col-2'>
                      <button>View All</button>
                    </div>
                  </div>
                  <div className='col-12 card-1'>
                    <div className='row'>
                      <div className='card-new col-3'>
                        <div className='card-sale'>
                        <span>- 20%</span>
                      </div>
                      <div className='card-icon'>
                        <span className='icon-heart'>
                          <i class="fa-regular fa-heart"></i>
                        </span>
                      </div>
                      <div className='image-card'>
                        <img src={pro} alt="pro" />
                      </div>
                      <div className='container'>
                        <div className='card-text'>
                          <h4>BLue Diamond Almonds</h4>
                          <h6>IN STOCK</h6>
                          <div className='card-star'>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <span> 1 </span>
                          </div>
                          <h5>$12</h5>
                        </div>
                        <div className='card-btn'>
                          <button>Add to cart</button>
                        </div>
                      </div>
                      </div>
                      <div className='card-new col-3'>
                        <div className='card-sale'>
                        <span>- 20%</span>
                      </div>
                      <div className='card-icon'>
                        <span className='icon-heart'>
                          <i class="fa-regular fa-heart"></i>
                        </span>
                      </div>
                      <div className='image-card'>
                        <img src={pro} alt="pro" />
                      </div>
                      <div className='container'>
                        <div className='card-text'>
                          <h4>BLue Diamond Almonds</h4>
                          <h6>IN STOCK</h6>
                          <div className='card-star'>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <span> 1 </span>
                          </div>
                          <h5>$12</h5>
                        </div>
                        <div className='card-btn'>
                          <button>Add to cart</button>
                        </div>
                      </div>
                      </div>
                      <div className='card-new col-3'>
                        <div className='card-sale'>
                        <span>- 20%</span>
                      </div>
                      <div className='card-icon'>
                        <span className='icon-heart'>
                          <i class="fa-regular fa-heart"></i>
                        </span>
                      </div>
                      <div className='image-card'>
                        <img src={pro} alt="pro" />
                      </div>
                      <div className='container'>
                        <div className='card-text'>
                          <h4>BLue Diamond Almonds</h4>
                          <h6>IN STOCK</h6>
                          <div className='card-star'>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <span> 1 </span>
                          </div>
                          <h5>$12</h5>
                        </div>
                        <div className='card-btn'>
                          <button>Add to cart</button>
                        </div>
                      </div>
                      </div>
                      <div className='card-new col-3'>
                        <div className='card-sale'>
                        <span>- 20%</span>
                      </div>
                      <div className='card-icon'>
                        <span className='icon-heart'>
                          <i class="fa-regular fa-heart"></i>
                        </span>
                      </div>
                      <div className='image-card'>
                        <img src={pro} alt="pro" />
                      </div>
                      <div className='container'>
                        <div className='card-text'>
                          <h4>BLue Diamond Almonds</h4>
                          <h6>IN STOCK</h6>
                          <div className='card-star'>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <span> 1 </span>
                          </div>
                          <h5>$12</h5>
                        </div>
                        <div className='card-btn'>
                          <button>Add to cart</button>
                        </div>
                      </div>
                      </div>
                      <div className='card-new col-3'>
                        <div className='card-sale'>
                        <span>- 20%</span>
                      </div>
                      <div className='card-icon'>
                        <span className='icon-heart'>
                          <i class="fa-regular fa-heart"></i>
                        </span>
                      </div>
                      <div className='image-card'>
                        <img src={pro} alt="pro" />
                      </div>
                      <div className='container'>
                        <div className='card-text'>
                          <h4>BLue Diamond Almonds</h4>
                          <h6>IN STOCK</h6>
                          <div className='card-star'>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <span> 1 </span>
                          </div>
                          <h5>$12</h5>
                        </div>
                        <div className='card-btn'>
                          <button>Add to cart</button>
                        </div>
                      </div>
                      </div>
                      <div className='card-new col-3'>
                        <div className='card-sale'>
                        <span>- 20%</span>
                      </div>
                      <div className='card-icon'>
                        <span className='icon-heart'>
                          <i class="fa-regular fa-heart"></i>
                        </span>
                      </div>
                      <div className='image-card'>
                        <img src={pro} alt="pro" />
                      </div>
                      <div className='container'>
                        <div className='card-text'>
                          <h4>BLue Diamond Almonds</h4>
                          <h6>IN STOCK</h6>
                          <div className='card-star'>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <span> 1 </span>
                          </div>
                          <h5>$12</h5>
                        </div>
                        <div className='card-btn'>
                          <button>Add to cart</button>
                        </div>
                      </div>
                      </div>
                      <div className='card-new col-3'>
                        <div className='card-sale'>
                        <span>- 20%</span>
                      </div>
                      <div className='card-icon'>
                        <span className='icon-heart'>
                          <i class="fa-regular fa-heart"></i>
                        </span>
                      </div>
                      <div className='image-card'>
                        <img src={pro} alt="pro" />
                      </div>
                      <div className='container'>
                        <div className='card-text'>
                          <h4>BLue Diamond Almonds</h4>
                          <h6>IN STOCK</h6>
                          <div className='card-star'>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <span> 1 </span>
                          </div>
                          <h5>$12</h5>
                        </div>
                        <div className='card-btn'>
                          <button>Add to cart</button>
                        </div>
                      </div>
                      </div>
                      <div className='card-new col-3'>
                        <div className='card-sale'>
                        <span>- 20%</span>
                      </div>
                      <div className='card-icon'>
                        <span className='icon-heart'>
                          <i class="fa-regular fa-heart"></i>
                        </span>
                      </div>
                      <div className='image-card'>
                        <img src={pro} alt="pro" />
                      </div>
                      <div className='container'>
                        <div className='card-text'>
                          <h4>BLue Diamond Almonds</h4>
                          <h6>IN STOCK</h6>
                          <div className='card-star'>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <span> 1 </span>
                          </div>
                          <h5>$12</h5>
                        </div>
                        <div className='card-btn'>
                          <button>Add to cart</button>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          <div className='banner-3'>
            <div className='row'>
              <div className='col-6 banner3-3'>
                <img src={banner3} alt="aa"/>
              </div>
              <div className='col-6 banner3-4'>
                <img src={banner4} alt="aa"/>
              </div>
            </div>
          </div>

          </div>
          <div className='col-12'>

          </div>
        </div>
      </div>
     <div className='container'>
        <div className='section'>
            <div className='row'>
              <div className='col-lg-12 col-md-12 article'>
                <div className='shopcontainer row'>
                {
                  loading ? (
                    <div className="mb-5">
                      <Loading />
                    </div>
                    ) : error ? (<Message variant="alert-danger">{error}</Message>)
                  :
                  (
                    <>
                      {products.map((product) => (
                      <div className='shop col-lg-4 col-md-6 col-sm-6' key={product._id}>
                        <div className='border-product'>
                          <Link  to = {
                            `/products/${product._id}`
                          } >
                            <div className='shopBack'>
                              <img src={product.image} alt={product.name} />
                            </div>
                          </Link>

                          <div className='shoptext'>
                            <p>
                              <Link to={`/products/${product._id}`}>
                                {product.name}
                              </Link>
                            </p>

                            <Rating  value={product.rating} text={`${product.numReviews} reviews`}/>
                            <h3>${product.price}</h3>
                            <button>
                              
                            </button>
                          </div>
                        </div>
                      </div>
                      ))};
                    </>
                  )
                }
                  <Pagination />
                </div>
              </div>
            </div>
            
        </div>
     </div> 
    </>
  )
}

export default ShopSection
