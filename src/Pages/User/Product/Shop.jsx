import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function Shop() {
  return (
    <div>
      <Header />
      <section class="breadcrumb-area mt-15">
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="index.html">Home</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Shop
                  </li>
                </ol>
              </nav>
              <h1>Shop</h1>
            </div>
          </div>
        </div>
      </section>

      <section class="categoryitem">
        <div class="container">
          <div class="row justify-content-center">
            <div class="categoryitem-wrapper">
              <div class="categoryitem-wrapper-itembox">
                <h6>Category</h6>
                <select>
                  <option data-display="Men">Men</option>
                  <option value="1">Women</option>
                </select>
              </div>
              <div class="categoryitem-wrapper-itembox">
                <h6>Brand</h6>
                <select>
                  <option data-display="Puma">Puma</option>
                  <option value="1">Converse</option>
                  <option value="2">Adidas</option>
                  <option value="3">Nike</option>
                  <option value="4">Vans</option>
                </select>
              </div>
              <div class="categoryitem-wrapper-price">
                <h6>Price</h6>
                <form class="price-item">
                  <input type="number" placeholder="$ Min" />
                  <span>|</span>
                  <input type="number" placeholder="$ Max" />
                </form>
              </div>
              <div class="categoryitem-wrapper-itembox">
                <h6>Sort By</h6>
                <select>
                  <option data-display="Ascending">Ascending</option>
                  <option value="1">Descending</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="populerproduct bg-white p-0 shop-product">
        <div class="container">
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
                  <a href="/detail">gi??y phong c??ch m???i</a>
                  <span>350.000 VN??</span> <del>410.000 VN??</del>
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
                  <a href="/detail">Gi??y nam phong c??ch m???i</a>
                  <span>210.000 VN??</span> <del>300.000 VN??</del>
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
                  <a href="/detail">Gi??y n??? sneaker m???u m???i</a>
                  <span>159.000 VN??</span> <del>270.000 VN??</del>
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
                  <a href="/detail">Gi??y th??? thao n???</a>
                  <span>179.000 VN??</span> <del>200.000 VN??</del>
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
                  <a href="/detail">gi??y Vans</a>
                  <span>270.000 VN??</span> <del>310.000 VN??</del>
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
                  <a href="/detail">Gi??y nam phong c??ch m???i</a>
                  <span>210.000 VN??</span> <del>300.000 VN??</del>
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
                  <a href="/detail">Gi??y th??? thao n???</a>
                  <span>179.000 VN??</span> <del>200.000 VN??</del>
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
                  <a href="/detail">Gi??y nam phong c??ch m???i</a>
                  <span>210.000 VN??</span> <del>300.000 VN??</del>
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
                  <a href="/detail">Gi??y th??? thao n???</a>
                  <span>179.000 VN??</span> <del>200.000 VN??</del>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="pagination">
        <div class="container">
          <div class="row justify-content-center">
            <div class="pagination-group">
              <a href="#!-1" class="p_prev">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9.414"
                  height="16.828"
                  viewBox="0 0 9.414 16.828"
                >
                  <path
                    id="Icon_feather-chevron-left"
                    data-name="Icon feather-chevron-left"
                    d="M20.5,23l-7-7,7-7"
                    transform="translate(-12.5 -7.586)"
                    fill="none"
                    stroke="#1a2224"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                  ></path>
                </svg>
              </a>
              <a href="#!1" class="cdp_i active">
                01
              </a>
              <a href="#!2" class="cdp_i">
                02
              </a>
              <a href="#!3" class="cdp_i">
                03
              </a>
              <a href="#!4" class="cdp_i">
                ...
              </a>
              <a href="#!5" class="cdp_i">
                20
              </a>
              <a href="#!+1" class="p_next">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="9.414"
                  height="16.829"
                  viewBox="0 0 9.414 16.829"
                >
                  <g id="Arrow" transform="translate(1.414 15.414) rotate(-90)">
                    <path
                      id="Arrow-2"
                      data-name="Arrow"
                      d="M1474.286,26.4l7,7,7-7"
                      transform="translate(-1474.286 -26.4)"
                      fill="none"
                      stroke="#1a2224"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    />
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Shop;
