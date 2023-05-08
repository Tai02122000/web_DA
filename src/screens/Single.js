import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProductDetails } from "./../Redux/Actions/ProductActions.js";
import Header from "../components/Header";
import Rating from "../components/homeComponents/Rating";
import Message from "../components/LoandingError/Error.js";
import { Link } from "react-router-dom";
import Loading from "../components/LoandingError/Loading.js";
import "./../css/product.css";
import img1 from "./../image/1.png";

const Single = ({ match, history }) => {
  const [qty, setQty] = useState(1);

  const productId = match.params.id;
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  useEffect(() => {
    dispatch(listProductDetails(productId));
  }, [dispatch, productId]);

  const AddToCartHandle = (e) => {
    e.preventDefault();
    history.push(`/cart/${productId}?qty=${qty}`);
  };

  return (
    <>
      <Header />
      <div className="container single-product">
        {loading ? (
          <Loading />
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ) : (
          <>
            <div className="row">
              <div className="col-md-6">
                <div className="single-image">
                  <img src={img1} alt={product.name} />
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">{product.name}</div>
                    <p>{product.description}</p>

                    <div className="product-count col-lg-7">
                      <div className="flex-box d-flex justify-content-between align-items-center">
                        <h6>Price</h6>
                        <span>${product.price}</span>
                      </div>
                      <div className="flex-box d-flex justify-content-between align-items-center">
                        <h6>Status</h6>
                        {product.countInStock > 0 ? (
                          <span>In Stock</span>
                        ) : (
                          <span>unavailable</span>
                        )}
                      </div>
                      <div className="flex-box d-flex justify-content-between align-items-center">
                        <h6>Reviews</h6>
                        <Rating
                          value={product.rating}
                          text={`${product.numReviews} reviews`}
                        />
                      </div>
                      {product.countInStock > 0 ? (
                        <>
                          <div className="flex-box d-flex justify-content-between align-items-center">
                            <h6>Quantity</h6>
                            <select
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                          <button
                            onClick={AddToCartHandle}
                            className="round-black-btn"
                          >
                            Add To Cart
                          </button>
                        </>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row my-5">
              <div className="col-md-6">
                <h6 className="mb-3">REVIEWS</h6>
                <div className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded">
                  <strong>Admin Doe</strong>
                  <Rating />
                  <span>Jan 12 2022</span>
                  <div className="alert alert-info mt-3">Lorem</div>
                </div>
              </div>
              <div className="col-md-6">
                <h6>WRITE A CUSTOMER REVIEW</h6>
                <div className="my-4"></div>

                <form>
                  <div className="my-4">
                    <strong>Rating</strong>
                    <select className="col-12 bg-light p-3 mt-2 border-0 rounded">
                      <option value="">Select...</option>
                      <option value="1">1 - Poor</option>
                      <option value="2">2 - Fair</option>
                      <option value="3">3 - Good</option>
                      <option value="4">4 - Very Good</option>
                      <option value="5">5 - Excellent</option>
                    </select>
                  </div>
                  <div className="my-4">
                    <strong>Comment</strong>
                    <textarea
                      row="3"
                      className="col-12 bg-light p-3 mt-2 border-0 rounded"
                    ></textarea>
                  </div>
                  <div className="my-3">
                    <button className="col-12 bg-black border-0 p-3 rounded text-white">
                      SUBMIT
                    </button>
                  </div>
                </form>
                <div className="my-3">
                  Please{""}
                  <Link to="/login">
                    "<strong>Login</strong>"
                  </Link>
                  to write a review{" "}
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <div className="shop-content" style={{ opacity: "0" }}>
        <div className="container">
          <div className="single-wrapper">
            <div className="product-header">
              <h1 className="product_title entry-title">{product.name}</h1>
              <div className="product-meta top"></div>
            </div>
            <div className="product-content">
              <div className="row">
                <div className="col col-12 col-lg-5 product-images">
                  <img src={product.image} alt={product.name} />
                </div>
                <div className="col col-12 col-lg-7 product-detail">
                  <div className="column">
                    <p className="price">
                      <del>
                        <span className="price-amount amount">
                          <span className="price-currencySymbol">$</span>
                          9.35
                        </span>
                      </del>
                      <ins>
                        <span className="price-amount amount">
                          <span className="price-currencySymbol">$</span>
                          7.5
                        </span>
                      </ins>
                    </p>
                    <div className="product-meta">
                      <div className="stock product-available in-stock">
                        <span className="stock in-stock">IN STOCK</span>
                      </div>
                    </div>
                    <div className="product-details__short-description product-short-description">
                      <p>{product.description}</p>
                    </div>
                    <div className="product-checklist">
                      <ul>
                        <li>Type: Phone</li>
                        <li>Type: Phone</li>
                        <li>Type: Phone</li>
                      </ul>
                    </div>
                    <div className="product-share">
                      <div className="social-share site-social style-1">
                        <ul className="social-container">
                          <li>
                            <i class="klbth-icon-facebook"></i>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="column product-icons">
                    <div className="alert-message">
                      Covid-19 Info: We keep delivering
                    </div>
                    <div className="icon-messages">
                      <ul>
                        <li>
                          <div className="icon"></div>
                          <div className="message">
                            Free Shipping apply to all orders over $100
                          </div>
                        </li>
                        <li>
                          <div className="icon"></div>
                          <div className="message">
                            Guranteed 100% Organic from natural farmas
                          </div>
                        </li>
                        <li>
                          <div className="icon"></div>
                          <div className="message">
                            1 Day Returns if you change your mind
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Single;
