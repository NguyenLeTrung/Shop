import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function Detail() {
  return (
    <div>
      <Header />
      <section className="breadcrumb-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <a href="/">Home</a>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Category
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Subcategory
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    Product
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    Detail
                  </li>
                </ol>
              </nav>
              <h1>Detail</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="product">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-5 col-12">
              <div className="product-slider">
                <div className="exzoom" id="exzoom">
                  <div className="exzoom_img_box">
                    <ul className="exzoom_img_ul">
                      <li>
                        <img
                          src="../assert/dist/images/product-deatils/mlb-1.jpg"
                          alt=""
                        />
                      </li>
                    </ul>
                  </div>
                  <div className="exzoom_nav"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-7 col-12">
              <div className="product-pricelist">
                <h2>MLB BOSTON RED SOX BIG BALL CHUNKY P 3D</h2>
                <div className="product-pricelist-ratting">
                  <div className="price">
                    <span>765.000 VNĐ </span> <del> 1.080.000 VNĐ</del>
                  </div>
                  <div className="star">
                    <ul>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>
                        <i className="fas fa-star"></i>
                      </li>
                      <li>5.0</li>
                      <li className="point">(500 Rating)</li>
                    </ul>
                  </div>
                </div>
                <p>
                  Giày Sneaker Nam TKTMS19 Giày Thể Thao Nam Tăng Chiều Cao Đến
                  6cm Cá Tính Chính Hãng TKT STORE Size (39-43)
                </p>
                <div className="product-pricelist-selector">
                  <div className="product-pricelist-selector-size">
                    <h6>Sizes</h6>
                    <div className="sizes" id="sizes">
                      <li className="sizes-all">S</li>
                      <li className="sizes-all active">M</li>
                      <li className="sizes-all">L</li>
                      <li className="sizes-all">XL</li>
                      <li className="sizes-all">XXL</li>
                    </div>
                  </div>
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
                <div className="product-pricelist-selector-button">
                  <a className="btn cart-bg " href="/cart">
                    Add to cart
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={"20"}
                      height={"20"}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={"2"}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-shopping-cart"
                    >
                      <circle cx={"9"} cy={"21"} r="1"></circle>
                      <circle cx={"20"} cy={"21"} r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                  </a>
                  <a
                    className="btn bg-primary cart-hart"
                    href="/favourite-list"
                  >
                    <svg
                      id="Heart"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                      width={"22"}
                      height={"20"}
                      viewBox="0 0 22 20"
                    >
                      <defs>
                        <clipPath id="clip-path">
                          <rect width={"22"} height={"20"} fill="none" />
                        </clipPath>
                      </defs>
                      <g
                        id="Repeat_Grid_1"
                        data-name="Repeat Grid 1"
                        clipPath="url(#clip-path)"
                      >
                        <g transform="translate(1 1)">
                          <path
                            id="Heart-2"
                            data-name="Heart"
                            d="M20.007,4.59a5.148,5.148,0,0,0-7.444,0L11.548,5.636,10.534,4.59a5.149,5.149,0,0,0-7.444,0,5.555,5.555,0,0,0,0,7.681L4.1,13.317,11.548,21l7.444-7.681,1.014-1.047a5.553,5.553,0,0,0,0-7.681Z"
                            transform="translate(-1.549 -2.998)"
                            fill="#fff"
                            stroke="#335aff"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={"2"}
                          />
                        </g>
                      </g>
                    </svg>
                  </a>
                  <div className="product-pricelist-selector-button-item">
                    <div className="shipping">
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={"21.4"}
                          height={"17.937"}
                          viewBox="0 0 21.4 17.937"
                        >
                          <g
                            id="Truck_Icon"
                            data-name="Truck Icon"
                            transform="translate(-0.8 -3.8)"
                          >
                            <path
                              id="Path_14"
                              data-name="Path 14"
                              d="M1.5,4.5H15.112V16.3H1.5Z"
                              fill="none"
                              stroke="#335aff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={"1.4"}
                            />
                            <path
                              id="Path_15"
                              data-name="Path 15"
                              d="M24,12h3.63l2.722,2.722V19.26H24Z"
                              transform="translate(-8.852 -3)"
                              fill="none"
                              stroke="#335aff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={"1.4"}
                            />
                            <path
                              id="Path_16"
                              data-name="Path 16"
                              d="M9.037,26.269A2.269,2.269,0,1,1,6.769,24a2.269,2.269,0,0,1,2.269,2.269Z"
                              transform="translate(-1.185 -7.5)"
                              fill="none"
                              stroke="#335aff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={"1.4"}
                            />
                            <path
                              id="Path_17"
                              data-name="Path 17"
                              d="M28.537,26.269A2.269,2.269,0,1,1,26.269,24,2.269,2.269,0,0,1,28.537,26.269Z"
                              transform="translate(-8.852 -7.5)"
                              fill="none"
                              stroke="#335aff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={"1.4"}
                            />
                          </g>
                        </svg>
                      </div>
                      <p>Free Shipping Cast</p>
                    </div>
                    <div className="delivery">
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={"17.5"}
                          height={"17.5"}
                          viewBox="0 0 17.5 17.5"
                        >
                          <g id="Icon" transform="translate(-2.25 -2.25)">
                            <path
                              id="Path_20"
                              data-name="Path 20"
                              d="M19,11a8,8,0,1,1-8-8A8,8,0,0,1,19,11Z"
                              fill="none"
                              stroke="#335aff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={"1.5"}
                            />
                            <path
                              id="Path_21"
                              data-name="Path 21"
                              d="M18,9v4.8l3.2,1.6"
                              transform="translate(-7 -2.8)"
                              fill="none"
                              stroke="#335aff"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={"1.5"}
                            />
                          </g>
                        </svg>
                      </div>
                      <p>3 Days Delivery Time</p>
                    </div>
                    <div className="cash">
                      <div className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={"10"}
                          height={"16"}
                          viewBox="0 0 10 16"
                        >
                          <path
                            id="Icon"
                            d="M14.863,11.522c-2.23-.524-2.947-1.067-2.947-1.911,0-.969.992-1.644,2.652-1.644,1.749,0,2.4.756,2.456,1.867H19.2a3.655,3.655,0,0,0-3.153-3.387V4.5H13.095V6.42c-1.906.373-3.438,1.493-3.438,3.209,0,2.053,1.876,3.076,4.617,3.671,2.456.533,2.947,1.316,2.947,2.142,0,.613-.481,1.591-2.652,1.591-2.024,0-2.819-.818-2.927-1.867H9.48c.118,1.947,1.729,3.04,3.615,3.4V20.5h2.947V18.589c1.916-.329,3.438-1.333,3.438-3.156C19.48,12.909,17.093,12.047,14.863,11.522Z"
                            transform="translate(-9.48 -4.5)"
                            fill="#335aff"
                          />
                        </svg>
                      </div>
                      <p>Cash on Delivery</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="features bg-lightwhite">
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
      <Footer />
    </div>
  );
}
export default Detail;
