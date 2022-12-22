import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function Cart() {
  return (
    <div>
      <Header />
      <section className="breadcrumb-area mt-15">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    <a href="/favourite-list">Favourite</a>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Cart
                  </li>
                </ol>
              </nav>
              <h5>Cart</h5>
            </div>
          </div>
        </div>
      </section>
      <section className="cart-area">
        <div className="container">
          <div className="rows">
            <div className="cart-items">
              <div className="header">
                <div className="image">Image</div>
                <div className="name">Name</div>
                <div className="price">Prices</div>
                <div className="rating">Rating</div>
                <div className="info">Info</div>
              </div>
              <div className="body">
                <div className="item">
                  <div className="image">
                    <img
                      src="../assert/dist/images/product-deatils/mlb-1.jpg"
                      alt="image_product"
                    />
                  </div>
                  <div className="name">
                    <div className="name-text">
                      <a href="/detail">
                        {" "}
                        Skechers Men's Classic Fit-Delson-Camden Sneaker
                      </a>
                    </div>
                    <div className="button">
                      <a className="btn bg-primary" href="/order">
                        Order
                      </a>
                      <a className="del" href="#/">
                        Delete
                      </a>
                    </div>
                  </div>
                  <div className="price">
                    <span>765.000 VNĐ</span> <del>1.080.000 VNĐ</del>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i> 5.0
                  </div>
                  <div className="info">
                    <div className="size">
                      <div className="product-pricelist-selector-size">
                        <h6>Sizes</h6>
                        <div className="sizes" id="sizes">
                          <li className="sizes-all active">M</li>
                        </div>
                      </div>
                    </div>
                    <div className="quantity">
                      <div className="product-pricelist-selector-quantity">
                        <h6>quantity</h6>
                        <div className="wan-spinner wan-spinner-4">
                          <a href="#/" className="minus">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={"11.98"}
                              height={"6.69"}
                              viewBox="0 0 11.98 6.69"
                            >
                              <path
                                id="Arrow"
                                d="M1474.286,26.4l5,5,5-5"
                                transform="translate(-1473.296 -25.41)"
                                fill="none"
                                stroke="#989ba7"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={"1.4"}
                              />
                            </svg>
                          </a>
                          <input type={"text"} value="1" min={"1"} />
                          <a href="#/" className="plus">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={"11.98"}
                              height={"6.69"}
                              viewBox="0 0 11.98 6.69"
                            >
                              <g
                                id="Arrow"
                                transform="translate(10.99 5.7) rotate(180)"
                              >
                                <path
                                  id="Arrow-2"
                                  data-name="Arrow"
                                  d="M1474.286,26.4l5,5,5-5"
                                  transform="translate(-1474.286 -26.4)"
                                  fill="none"
                                  stroke="#1a2224"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={"1.4"}
                                />
                              </g>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-lg-6">
              <div className="card-price">
                <h6>Check Summery</h6>
                <div className="card-price-list d-flex justify-content-between align-items-center">
                  <div className="item">
                    <p>1 item</p>
                  </div>
                  <div class="price">
                    <p>765.000 VNĐ</p>
                  </div>
                </div>
                <div className="card-price-list d-flex justify-content-between align-items-center">
                  <div className="item">
                    <p>Shipping Cast</p>
                  </div>
                  <div className="price">
                    <p>100.000 VNĐ</p>
                  </div>
                </div>
                <div className="card-price-list d-flex justify-content-between align-items-center">
                  <div className="item">
                    <p>Discount</p>
                  </div>
                  <div className="price">
                    <p>8%</p>
                  </div>
                </div>
                <div className="card-price-list d-flex justify-content-between align-items-center">
                  <div className="item">
                    <p>Taxes</p>
                  </div>
                  <div className="price">
                    <p>34.000 VNĐ</p>
                  </div>
                </div>
                <div className="card-price-subtotal d-flex justify-content-between align-items-center">
                  <div className="total-text">
                    <p>Total Price</p>
                  </div>
                  <div className="total-price">
                    <p>994.000 VNĐ</p>
                  </div>
                </div>
                <form action="#">
                  <a
                    href="/billing"
                    className="btn bg-primary"
                    type={"submit"}
                    style={{ width: "100%" }}
                  >
                    Checkout Now
                  </a>
                </form>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Cart;
