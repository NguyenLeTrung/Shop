import Header from "../../components/Header";
import Footer from "../../components/Footer";

function Home() {
  return (
    <>
      <Header />
      <section className="banner-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 order-2 order-lg-1">
              <div className="banner-area__content">
                <h2>Premium care for premium people.</h2>
                <p>
                  Not ready for a subscription? Not ready to sign up? Buy all
                  the high end shoe products in the store
                </p>
                <a className="btn bg-primary" href="/shop">
                  Shop Now
                </a>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              <div className="banner-area__img">
                <img
                  src="../assert/dist/images/banner.jpg"
                  alt="banner-img"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="brand-area">
                <div className="brand-area-image">
                  <img
                    src="../assert/dist/images/brand/nike.png"
                    alt="Brand"
                    className="img-fluid"
                  />
                </div>
                <div className="brand-area-image">
                  <img
                    src="../assert/dist/images/brand/converse.png"
                    alt="Brand"
                    className="img-fluid"
                  />
                </div>
                <div className="brand-area-image">
                  <img
                    src="../assert/dist/images/brand/puma.png"
                    alt="Brand"
                    className="img-fluid"
                  />
                </div>
                <div className="brand-area-image">
                  <img
                    src="../assert/dist/images/brand/adidas.jpg"
                    alt="Brand"
                    className="img-fluid"
                  />
                </div>
                <div className="brand-area-image">
                  <img
                    src="../assert/dist/images/brand/vans.png"
                    alt="Brand"
                    className="img-fluid"
                  />
                </div>

                <div className="brand-area-image">
                  <img
                    src="../assert/dist/images/brand/adidas.jpg"
                    alt="Brand"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="features">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="section-title">
                <h2>Featured Products</h2>
              </div>
            </div>
          </div>
          <div className="features-wrapper">
            <div className="features-active">
              <div className="product-item">
                <div className="product-item-image">
                  <a href="/detail">
                    <img
                      src="../assert/dist/images/product/02.jpg"
                      alt="Product Name"
                      className="img-fluid"
                    />
                  </a>
                  <div className="cart-icon">
                    <a href="/favourite-list">
                      <i className="far fa-heart"></i>
                    </a>
                    <a href="/cart">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={"16.75"}
                        height={"16.75"}
                        viewBox="0 0 16.75 16.75"
                      >
                        <g
                          id="Your_Bag"
                          data-name="Your Bag"
                          transform="translate(0.75)"
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
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={"1.5"}
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
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokelinejoin="round"
                              strokewidth={"1.5"}
                            />
                            <path
                              id="Path_3"
                              data-name="Path 3"
                              d="M1,1H3.727l1.827,9.564a1.38,1.38,0,0,0,1.364,1.15h6.627a1.38,1.38,0,0,0,1.364-1.15L16,4.571H4.409"
                              transform="translate(-1 -1)"
                              fill="none"
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokelinejoin="round"
                              strokeWidth={"1.5"}
                            />
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="product-item-info text-uppercase">
                  <a href="/detail">Giày nam phong cách mới</a>
                  <span>210.000 VNĐ</span> <del>300.000 VNĐ</del>
                </div>
              </div>
              <div className="product-item">
                <div className="product-item-image">
                  <a href="/detail">
                    <img
                      src="../assert/dist/images/product/giay_nu.png"
                      alt="Product Name"
                      className="img-fluid"
                    />
                  </a>
                  <div className="cart-icon">
                    <a href="/favourite-list">
                      <i className="far fa-heart"></i>
                    </a>
                    <a href="/cart">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={"16.75"}
                        height={"16.75"}
                        viewBox="0 0 16.75 16.75"
                      >
                        <g
                          id="Your_Bag"
                          data-name="Your Bag"
                          transform="translate(0.75)"
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
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={"1.5"}
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
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokelinejoin="round"
                              strokewidth={"1.5"}
                            />
                            <path
                              id="Path_3"
                              data-name="Path 3"
                              d="M1,1H3.727l1.827,9.564a1.38,1.38,0,0,0,1.364,1.15h6.627a1.38,1.38,0,0,0,1.364-1.15L16,4.571H4.409"
                              transform="translate(-1 -1)"
                              fill="none"
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokelinejoin="round"
                              strokeWidth={"1.5"}
                            />
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="product-item-info text-uppercase">
                  <a href="/detail">Giày nữ sneaker mẫu mới</a>
                  <span>159.000 VNĐ</span> <del>270.000 VNĐ</del>
                </div>
              </div>
              <div className="product-item">
                <div className="product-item-image">
                  <a href="/detail">
                    <img
                      src="../assert/dist/images/product/10.jpg"
                      alt="Product Name"
                      className="img-fluid"
                    />
                  </a>
                  <div className="cart-icon">
                    <a href="/favourite-list">
                      <i className="far fa-heart"></i>
                    </a>
                    <a href="/cart">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={"16.75"}
                        height={"16.75"}
                        viewBox="0 0 16.75 16.75"
                      >
                        <g
                          id="Your_Bag"
                          data-name="Your Bag"
                          transform="translate(0.75)"
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
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={"1.5"}
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
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokelinejoin="round"
                              strokewidth={"1.5"}
                            />
                            <path
                              id="Path_3"
                              data-name="Path 3"
                              d="M1,1H3.727l1.827,9.564a1.38,1.38,0,0,0,1.364,1.15h6.627a1.38,1.38,0,0,0,1.364-1.15L16,4.571H4.409"
                              transform="translate(-1 -1)"
                              fill="none"
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokelinejoin="round"
                              strokeWidth={"1.5"}
                            />
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="product-item-info text-uppercase">
                  <a href="/detail">Giày thể thao nữ</a>
                  <span>179.000 VNĐ</span> <del>200.000 VNĐ</del>
                </div>
              </div>
              <div className="product-item">
                <div className="product-item-image">
                  <a href="/detail">
                    <img
                      src="../assert/dist/images/product/06.jpg"
                      alt="Product Name"
                      className="img-fluid"
                    />
                  </a>
                  <div className="cart-icon">
                    <a href="/favourite-list">
                      <i className="far fa-heart"></i>
                    </a>
                    <a href="/cart">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={"16.75"}
                        height={"16.75"}
                        viewBox="0 0 16.75 16.75"
                      >
                        <g
                          id="Your_Bag"
                          data-name="Your Bag"
                          transform="translate(0.75)"
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
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={"1.5"}
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
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokelinejoin="round"
                              strokewidth={"1.5"}
                            />
                            <path
                              id="Path_3"
                              data-name="Path 3"
                              d="M1,1H3.727l1.827,9.564a1.38,1.38,0,0,0,1.364,1.15h6.627a1.38,1.38,0,0,0,1.364-1.15L16,4.571H4.409"
                              transform="translate(-1 -1)"
                              fill="none"
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokelinejoin="round"
                              strokeWidth={"1.5"}
                            />
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="product-item-info text-uppercase">
                  <a href="/detail">Giày nam cao cấp</a>
                  <span>275.000 VNĐ</span> <del>350.000 VNĐ</del>
                </div>
              </div>
              <div className="product-item">
                <div className="product-item-image">
                  <a href="/detail">
                    {" "}
                    <img
                      src="../assert/dist/images/product/01.jpg"
                      alt="Product Name"
                      className="img-fluid"
                    />
                  </a>
                  <div className="cart-icon">
                    <a href="/favourite-list">
                      <i className="far fa-heart"></i>
                    </a>
                    <a href="/cart">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={"16.75"}
                        height={"16.75"}
                        viewBox="0 0 16.75 16.75"
                      >
                        <g
                          id="Your_Bag"
                          data-name="Your Bag"
                          transform="translate(0.75)"
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
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={"1.5"}
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
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={"1.5"}
                            />
                            <path
                              id="Path_3"
                              data-name="Path 3"
                              d="M1,1H3.727l1.827,9.564a1.38,1.38,0,0,0,1.364,1.15h6.627a1.38,1.38,0,0,0,1.364-1.15L16,4.571H4.409"
                              transform="translate(-1 -1)"
                              fill="none"
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={"1.5"}
                            />
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="product-item-info text-uppercase">
                  <a href="/detail">giày Vans</a>
                  <span>270.000 VNĐ</span> <del>310.000 VNĐ</del>
                </div>
              </div>
              <div className="product-item">
                <div className="product-item-image">
                  <a href="/detail">
                    {" "}
                    <img
                      src="../assert/dist/images/product/02.jpg"
                      alt="Product Name"
                      className="img-fluid"
                    />
                  </a>
                  <div className="cart-icon">
                    <a href="/favourite-list">
                      <i className="far fa-heart"></i>
                    </a>
                    <a href="/cart">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={"16.75"}
                        height="16.75"
                        viewBox="0 0 16.75 16.75"
                      >
                        <g
                          id="Your_Bag"
                          data-name="Your Bag"
                          transform="translate(0.75)"
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
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={"1.5"}
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
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={"1.5"}
                            />
                            <path
                              id="Path_3"
                              data-name="Path 3"
                              d="M1,1H3.727l1.827,9.564a1.38,1.38,0,0,0,1.364,1.15h6.627a1.38,1.38,0,0,0,1.364-1.15L16,4.571H4.409"
                              transform="translate(-1 -1)"
                              fill="none"
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={"1.5"}
                            />
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="product-item-info text-uppercase">
                  <a href="/detail">giày thể thao</a>
                  <span>150.000 VNĐ</span> <del>200.000 VNĐ</del>
                </div>
              </div>
              <div className="product-item">
                <div className="product-item-image">
                  <a href="/detail">
                    <img
                      src="../assert/dist/images/product/06.jpg"
                      alt="Product Name"
                      className="img-fluid"
                    />
                  </a>
                  <div className="cart-icon">
                    <a href="/favourite-list">
                      <i className="far fa-heart"></i>
                    </a>
                    <a href="/cart">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={"16.75"}
                        height={"16.75"}
                        viewBox="0 0 16.75 16.75"
                      >
                        <g
                          id="Your_Bag"
                          data-name="Your Bag"
                          transform="translate(0.75)"
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
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={"1.5"}
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
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={"1.5"}
                            />
                            <path
                              id="Path_3"
                              data-name="Path 3"
                              d="M1,1H3.727l1.827,9.564a1.38,1.38,0,0,0,1.364,1.15h6.627a1.38,1.38,0,0,0,1.364-1.15L16,4.571H4.409"
                              transform="translate(-1 -1)"
                              fill="none"
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={"1.5"}
                            />
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="product-item-info text-uppercase">
                  <a href="/detail">giày phong cách mới</a>
                  <span>350.000 VNĐ</span> <del>410.000 VNĐ</del>
                </div>
              </div>
            </div>
            <div className="slider-arrows">
              <div className="prev-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={"9.414"}
                  height={"16.828"}
                  viewBox="0 0 9.414 16.828"
                >
                  <path
                    id="Icon_feather-chevron-left"
                    data-name="Icon feather-chevron-left"
                    d="M20.5,23l-7-7,7-7"
                    transform="translate(-12.5 -7.586)"
                    fill="none"
                    stroke="#1a2224"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={"2"}
                  />
                </svg>
              </div>
              <div className="next-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={"9.414"}
                  height={"16.828"}
                  viewBox="0 0 9.414 16.828"
                >
                  <path
                    id="Icon_feather-chevron-right"
                    data-name="Icon feather-chevron-right"
                    d="M13.5,23l5.25-5.25.438-.437L20.5,16l-7-7"
                    transform="translate(-12.086 -7.586)"
                    fill="none"
                    stroke="#1a2224"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={"2"}
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="features-morebutton text-center">
                <a className="btn bt-glass" href="/shop">
                  View All Products
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about-area">
        <div className="container">
          <div className="about-area-content">
            <div className="row align-items-center">
              <div className="col-lg-6 ">
                <div className="about-area-content-img">
                  <img
                    src="../assert/dist/images/feature/99.jpg"
                    alt="img"
                    className="img-fluid"
                  />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-area-content-text">
                  <h3>Why Shop with Olog</h3>
                  <p>
                    The shoe mania is really cool - you have more freedom, you
                    can exaggerate things without any worries.
                  </p>
                  <div className="icon-area-content">
                    <div className="icon-area">
                      <i className="far fa-check-circle"></i>
                      <span>Secure Payment Method.</span>
                    </div>
                    <div className="icon-area">
                      <i className="far fa-check-circle"></i>
                      <span>24/7 Customers Services.</span>
                    </div>
                    <div className="icon-area">
                      <i className="far fa-check-circle"></i>
                      <span>Shop in 2 languages</span>
                    </div>
                    <div className="icon-area">
                      <i className="far fa-check-circle"></i>
                      <span>Mauris congue eros in iaculis.</span>
                    </div>
                  </div>

                  <a className="btn bg-primary" href="/">
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="populerproduct">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="section-title">
                <h2>Popular Products</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-6">
              <div className="product-item">
                <div className="product-item-image">
                  <a href="/detail">
                    <img
                      src="../assert/dist/images/product/06.jpg"
                      alt="Product Name"
                      className="img-fluid"
                    />
                  </a>
                  <div className="cart-icon">
                    <a href="/favourite-list">
                      <i className="far fa-heart"></i>
                    </a>
                    <a href="/cart">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={"16.75"}
                        height={"16.75"}
                        viewBox="0 0 16.75 16.75"
                      >
                        <g
                          id="Your_Bag"
                          data-name="Your Bag"
                          transform="translate(0.75)"
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
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={"1.5"}
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
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={"1.5"}
                            />
                            <path
                              id="Path_3"
                              data-name="Path 3"
                              d="M1,1H3.727l1.827,9.564a1.38,1.38,0,0,0,1.364,1.15h6.627a1.38,1.38,0,0,0,1.364-1.15L16,4.571H4.409"
                              transform="translate(-1 -1)"
                              fill="none"
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={"1.5"}
                            />
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="product-item-info text-uppercase">
                  <a href="/detail">giày phong cách mới</a>
                  <span>350.000 VNĐ</span> <del>410.000 VNĐ</del>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="product-item">
                <div className="product-item-image">
                  <a href="/detail">
                    <img
                      src="../assert/dist/images/product/02.jpg"
                      alt="Product Name"
                      className="img-fluid"
                    />
                  </a>
                  <div className="cart-icon">
                    <a href="/favourite-list">
                      <i className="far fa-heart"></i>
                    </a>
                    <a href="/cart">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={"16.75"}
                        height={"16.75"}
                        viewBox="0 0 16.75 16.75"
                      >
                        <g
                          id="Your_Bag"
                          data-name="Your Bag"
                          transform="translate(0.75)"
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
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={"1.5"}
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
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokelinejoin="round"
                              strokewidth={"1.5"}
                            />
                            <path
                              id="Path_3"
                              data-name="Path 3"
                              d="M1,1H3.727l1.827,9.564a1.38,1.38,0,0,0,1.364,1.15h6.627a1.38,1.38,0,0,0,1.364-1.15L16,4.571H4.409"
                              transform="translate(-1 -1)"
                              fill="none"
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokelinejoin="round"
                              strokeWidth={"1.5"}
                            />
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="product-item-info text-uppercase">
                  <a href="/detail">Giày nam phong cách mới</a>
                  <span>210.000 VNĐ</span> <del>300.000 VNĐ</del>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="product-item">
                <div className="product-item-image">
                  <a href="/detail">
                    <img
                      src="../assert/dist/images/product/giay_nu.png"
                      alt="Product Name"
                      className="img-fluid"
                    />
                  </a>
                  <div className="cart-icon">
                    <a href="/favourite-list">
                      <i className="far fa-heart"></i>
                    </a>
                    <a href="/cart">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={"16.75"}
                        height={"16.75"}
                        viewBox="0 0 16.75 16.75"
                      >
                        <g
                          id="Your_Bag"
                          data-name="Your Bag"
                          transform="translate(0.75)"
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
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={"1.5"}
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
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokelinejoin="round"
                              strokewidth={"1.5"}
                            />
                            <path
                              id="Path_3"
                              data-name="Path 3"
                              d="M1,1H3.727l1.827,9.564a1.38,1.38,0,0,0,1.364,1.15h6.627a1.38,1.38,0,0,0,1.364-1.15L16,4.571H4.409"
                              transform="translate(-1 -1)"
                              fill="none"
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokelinejoin="round"
                              strokeWidth={"1.5"}
                            />
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="product-item-info text-uppercase">
                  <a href="/detail">Giày nữ sneaker mẫu mới</a>
                  <span>159.000 VNĐ</span> <del>270.000 VNĐ</del>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="product-item">
                <div className="product-item-image">
                  <a href="/detail">
                    <img
                      src="../assert/dist/images/product/10.jpg"
                      alt="Product Name"
                      className="img-fluid"
                    />
                  </a>
                  <div className="cart-icon">
                    <a href="/favourite-list">
                      <i className="far fa-heart"></i>
                    </a>
                    <a href="/cart">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={"16.75"}
                        height={"16.75"}
                        viewBox="0 0 16.75 16.75"
                      >
                        <g
                          id="Your_Bag"
                          data-name="Your Bag"
                          transform="translate(0.75)"
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
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={"1.5"}
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
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokelinejoin="round"
                              strokewidth={"1.5"}
                            />
                            <path
                              id="Path_3"
                              data-name="Path 3"
                              d="M1,1H3.727l1.827,9.564a1.38,1.38,0,0,0,1.364,1.15h6.627a1.38,1.38,0,0,0,1.364-1.15L16,4.571H4.409"
                              transform="translate(-1 -1)"
                              fill="none"
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokelinejoin="round"
                              strokeWidth={"1.5"}
                            />
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="product-item-info text-uppercase">
                  <a href="/detail">Giày thể thao nữ</a>
                  <span>179.000 VNĐ</span> <del>200.000 VNĐ</del>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="product-item">
                <div className="product-item-image">
                  <a href="/detail">
                    {" "}
                    <img
                      src="../assert/dist/images/product/01.jpg"
                      alt="Product Name"
                      className="img-fluid"
                    />
                  </a>
                  <div className="cart-icon">
                    <a href="/favourite-list">
                      <i className="far fa-heart"></i>
                    </a>
                    <a href="/cart">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={"16.75"}
                        height={"16.75"}
                        viewBox="0 0 16.75 16.75"
                      >
                        <g
                          id="Your_Bag"
                          data-name="Your Bag"
                          transform="translate(0.75)"
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
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={"1.5"}
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
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={"1.5"}
                            />
                            <path
                              id="Path_3"
                              data-name="Path 3"
                              d="M1,1H3.727l1.827,9.564a1.38,1.38,0,0,0,1.364,1.15h6.627a1.38,1.38,0,0,0,1.364-1.15L16,4.571H4.409"
                              transform="translate(-1 -1)"
                              fill="none"
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={"1.5"}
                            />
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="product-item-info text-uppercase">
                  <a href="/detail">giày Vans</a>
                  <span>270.000 VNĐ</span> <del>310.000 VNĐ</del>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="product-item">
                <div className="product-item-image">
                  <a href="/detail">
                    <img
                      src="../assert/dist/images/product/02.jpg"
                      alt="Product Name"
                      className="img-fluid"
                    />
                  </a>
                  <div className="cart-icon">
                    <a href="/favourite-list">
                      <i className="far fa-heart"></i>
                    </a>
                    <a href="/cart">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={"16.75"}
                        height={"16.75"}
                        viewBox="0 0 16.75 16.75"
                      >
                        <g
                          id="Your_Bag"
                          data-name="Your Bag"
                          transform="translate(0.75)"
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
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={"1.5"}
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
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokelinejoin="round"
                              strokewidth={"1.5"}
                            />
                            <path
                              id="Path_3"
                              data-name="Path 3"
                              d="M1,1H3.727l1.827,9.564a1.38,1.38,0,0,0,1.364,1.15h6.627a1.38,1.38,0,0,0,1.364-1.15L16,4.571H4.409"
                              transform="translate(-1 -1)"
                              fill="none"
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokelinejoin="round"
                              strokeWidth={"1.5"}
                            />
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="product-item-info text-uppercase">
                  <a href="/detail">Giày nam phong cách mới</a>
                  <span>210.000 VNĐ</span> <del>300.000 VNĐ</del>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="product-item">
                <div className="product-item-image">
                  <a href="/detail">
                    <img
                      src="../assert/dist/images/product/10.jpg"
                      alt="Product Name"
                      className="img-fluid"
                    />
                  </a>
                  <div className="cart-icon">
                    <a href="/favourite-list">
                      <i className="far fa-heart"></i>
                    </a>
                    <a href="/cart">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={"16.75"}
                        height={"16.75"}
                        viewBox="0 0 16.75 16.75"
                      >
                        <g
                          id="Your_Bag"
                          data-name="Your Bag"
                          transform="translate(0.75)"
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
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={"1.5"}
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
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokelinejoin="round"
                              strokewidth={"1.5"}
                            />
                            <path
                              id="Path_3"
                              data-name="Path 3"
                              d="M1,1H3.727l1.827,9.564a1.38,1.38,0,0,0,1.364,1.15h6.627a1.38,1.38,0,0,0,1.364-1.15L16,4.571H4.409"
                              transform="translate(-1 -1)"
                              fill="none"
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokelinejoin="round"
                              strokeWidth={"1.5"}
                            />
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="product-item-info text-uppercase">
                  <a href="/detail">Giày thể thao nữ</a>
                  <span>179.000 VNĐ</span> <del>200.000 VNĐ</del>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="product-item">
                <div className="product-item-image">
                  <a href="/detail">
                    <img
                      src="../assert/dist/images/product/02.jpg"
                      alt="Product Name"
                      className="img-fluid"
                    />
                  </a>
                  <div className="cart-icon">
                    <a href="/favourite-list">
                      <i className="far fa-heart"></i>
                    </a>
                    <a href="/cart">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={"16.75"}
                        height={"16.75"}
                        viewBox="0 0 16.75 16.75"
                      >
                        <g
                          id="Your_Bag"
                          data-name="Your Bag"
                          transform="translate(0.75)"
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
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={"1.5"}
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
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokelinejoin="round"
                              strokewidth={"1.5"}
                            />
                            <path
                              id="Path_3"
                              data-name="Path 3"
                              d="M1,1H3.727l1.827,9.564a1.38,1.38,0,0,0,1.364,1.15h6.627a1.38,1.38,0,0,0,1.364-1.15L16,4.571H4.409"
                              transform="translate(-1 -1)"
                              fill="none"
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokelinejoin="round"
                              strokeWidth={"1.5"}
                            />
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="product-item-info text-uppercase">
                  <a href="/detail">Giày nam phong cách mới</a>
                  <span>210.000 VNĐ</span> <del>300.000 VNĐ</del>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="product-item">
                <div className="product-item-image">
                  <a href="/detail">
                    <img
                      src="../assert/dist/images/product/10.jpg"
                      alt="Product Name"
                      className="img-fluid"
                    />
                  </a>
                  <div className="cart-icon">
                    <a href="/favourite-list">
                      <i className="far fa-heart"></i>
                    </a>
                    <a href="/cart">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={"16.75"}
                        height={"16.75"}
                        viewBox="0 0 16.75 16.75"
                      >
                        <g
                          id="Your_Bag"
                          data-name="Your Bag"
                          transform="translate(0.75)"
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
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={"1.5"}
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
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokelinejoin="round"
                              strokewidth={"1.5"}
                            />
                            <path
                              id="Path_3"
                              data-name="Path 3"
                              d="M1,1H3.727l1.827,9.564a1.38,1.38,0,0,0,1.364,1.15h6.627a1.38,1.38,0,0,0,1.364-1.15L16,4.571H4.409"
                              transform="translate(-1 -1)"
                              fill="none"
                              stroke="#1a2224"
                              strokeLinecap="round"
                              strokelinejoin="round"
                              strokeWidth={"1.5"}
                            />
                          </g>
                        </g>
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="product-item-info text-uppercase">
                  <a href="/detail">Giày thể thao nữ</a>
                  <span>179.000 VNĐ</span> <del>200.000 VNĐ</del>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="categorys">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <div className="section-title">
                <h2>Shop with top categorys</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="productcategory text-center">
                <div className="productcategory-img">
                  <a href="/shop">
                    <img
                      src="../assert/dist/images/categorys/wool-shoe.jpg"
                      alt="images"
                    />
                  </a>
                </div>
                <div className="productcategory-text">
                  <a href="/shop">
                    <h6>Shoe</h6>
                    <span>480 Products</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="productcategory text-center">
                <div className="productcategory-img">
                  <a href="/shop">
                    <img
                      src="../assert/dist/images/categorys/wool-shoe.jpg"
                      alt="images"
                    />
                  </a>
                </div>
                <div className="productcategory-text">
                  <a href="/shop">
                    <h6>Shoe</h6>
                    <span>40 Products</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="productcategory text-center">
                <div className="productcategory-img">
                  <a href="/shop">
                    <img
                      src="../assert/dist/images/categorys/wool-shoe.jpg"
                      alt="images"
                    />
                  </a>
                </div>
                <div className="productcategory-text">
                  <a href="/shop">
                    <h6>Shoe</h6>
                    <span>80 Products</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="productcategory text-center">
                <div className="productcategory-img">
                  <a href="/shop">
                    <img
                      src="../assert/dist/images/categorys/wool-shoe.jpg"
                      alt="images"
                    />
                  </a>
                </div>
                <div className="productcategory-text">
                  <a href="/shop">
                    <h6>Shoe</h6>
                    <span>48 Products</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="productcategory text-center">
                <div className="productcategory-img">
                  <a href="/shop">
                    <img
                      src="../assert/dist/images/categorys/wool-shoe.jpg"
                      alt="images"
                    />
                  </a>
                </div>
                <div className="productcategory-text">
                  <a href="/shop">
                    <h6>Shoe</h6>
                    <span>480 Products</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="productcategory text-center">
                <div className="productcategory-img">
                  <a href="/shop">
                    <img
                      src="../assert/dist/images/categorys/wool-shoe.jpg"
                      alt="images"
                    />
                  </a>
                </div>
                <div className="productcategory-text">
                  <a href="/shop">
                    <h6>Shoe</h6>
                    <span>4 Products</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="productcategory text-center">
                <div className="productcategory-img">
                  <a href="/shop">
                    <img
                      src="../assert/dist/images/categorys/wool-shoe.jpg"
                      alt="images"
                    />
                  </a>
                </div>
                <div className="productcategory-text">
                  <a href="/shop">
                    <h6>Shoe</h6>
                    <span>48 Products</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-6">
              <div className="productcategory text-center">
                <div className="productcategory-img">
                  <a href="/shop">
                    <img
                      src="../assert/dist/images/categorys/wool-shoe.jpg"
                      alt="images"
                    />
                  </a>
                </div>
                <div className="productcategory-text">
                  <a href="/shop">
                    <h6>Shoe</h6>
                    <span>8 Products</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <div className="features-morebutton text-center">
                <a className="btn bt-glass" href="#/">
                  View All Categorys
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Home;
