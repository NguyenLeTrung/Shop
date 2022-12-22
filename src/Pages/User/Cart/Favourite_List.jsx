import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function Favourite() {
  return (
    <div>
      <Header />
      {/* <!-- BreadCrumb Start--> */}
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
                    Favourite
                  </li>
                </ol>
              </nav>
              <h5>Favourite</h5>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- BreadCrumb End--> */}

      <section className="wishlist-area">
        <div className="container">
          <div className="row">
            {/* <!-- Wishlist Item Start --> */}
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
                      alt=""
                    />
                  </div>
                  <div className="name">
                    <div className="name-text">
                      <p> MLB BOSTON RED SOX BIG BALL CHUNKY P 3D</p>
                    </div>
                    <div className="button">
                      <div className="product-pricelist-selector-button">
                        <a className="btn cart-bg " href="/cart">
                          Add to cart
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={"17"}
                            height={"17"}
                            viewBox="0 0 17 17"
                          >
                            <g
                              id="Your_Bag"
                              data-name="Your Bag"
                              transform="translate(1)"
                            >
                              <g id="Icon" transform="translate(0 1)">
                                <ellipse
                                  id="Ellipse_2"
                                  data-name="Ellipse 2"
                                  cx={"0.682"}
                                  cy={"0.714"}
                                  rx={"0.682"}
                                  ry={"0.714"}
                                  transform="translate(4.773 13.571)"
                                  fill="none"
                                  stroke="#fff"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={"2"}
                                />
                                <ellipse
                                  id="Ellipse_3"
                                  data-name="Ellipse 3"
                                  cx={"0.682"}
                                  cy={"0.714"}
                                  rx={"0.682"}
                                  ry={"0.714"}
                                  transform="translate(12.273 13.571)"
                                  fill="none"
                                  stroke="#fff"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={"2"}
                                />
                                <path
                                  id="Path_3"
                                  data-name="Path 3"
                                  d="M1,1H3.727l1.827,9.564a1.38,1.38,0,0,0,1.364,1.15h6.627a1.38,1.38,0,0,0,1.364-1.15L16,4.571H4.409"
                                  transform="translate(-1 -1)"
                                  fill="none"
                                  stroke="#fff"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={"2"}
                                />
                              </g>
                            </g>
                          </svg>
                        </a>
                      </div>
                      <a className="del" href="#/">
                        Remove
                      </a>
                    </div>
                  </div>
                  <div className="price">
                    <span>179.000 VNĐ</span> <del>200.000 VNĐ</del>
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
            {/* <!-- Wishlist Item End --> */}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Favourite;
