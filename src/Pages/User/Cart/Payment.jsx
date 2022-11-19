import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
function Payment() {
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
                  <li className="breadcrumb-item" aria-current="page">
                    <a href="/cart">Cart</a>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    <a href="/billing">Billing information</a>
                  </li>
                  <li className="breadcrumb-item" aria-current="page">
                    <a href="/payment">Payment</a>
                  </li>
                </ol>
              </nav>
              <h5>Payment</h5>
            </div>
          </div>
        </div>
      </section>

      <section className="payment-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              {/* <!-- Dashboard-Nav Starts Here --> */}
              <div className="dashboard-nav">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <a href="/billing">Billing information</a>
                    <i className="fas fa-angle-right"></i>
                  </li>
                  <li className="list-inline-item">
                    <a href="/payment" class="mr-0 active">
                      Payment
                    </a>
                  </li>
                </ul>
              </div>
              {/* <!-- Dashboard-Nav Ends Here --> */}
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7 order-2 order-lg-1">
              <div className="shipping-info-form">
                <div className="shipping-info-form-text">
                  <h6>Your information</h6>
                  <div className="shipping-info">
                    <div className="shipping-info-text">
                      <div className="left">
                        <span>Contact:</span>
                      </div>
                      <div className="right">
                        <p>example.test@gmail.com</p>
                        <p>+1202-555-0558</p>
                      </div>
                    </div>
                    <div className="shipping-info-button">
                      <form action="#">
                        <button type="submit">Change</button>
                      </form>
                    </div>
                  </div>
                  <div className="shipping-info mod">
                    <div className="shipping-info-text">
                      <div className="left">
                        <span>Ship to:</span>
                      </div>
                      <div className="right mar-5">
                        <p>Bac Tu Liem, Ha Noi</p>
                        <p>Bac Tu Liem, Ha Noi, Viet Nam</p>
                      </div>
                    </div>
                    <div className="shipping-info-button">
                      <form action="#">
                        <button type="submit">Change</button>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5 order-1 order-lg-2">
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
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <div className="payment-area-payment">
                <form action="#">
                  <div className="payment-info">
                    <div className="payment-area-info d-flex justify-content-between align-items-center flex-wrap">
                      <div className="credit-card-option">
                        <input type={"radio"} id="card-option" />
                        <label htmlFor="card-option">
                          Payment with your credit card
                        </label>
                      </div>
                      <div className="credit-card">
                        <a href="#/">
                          <svg
                            id="masterclass"
                            xmlns="http://www.w3.org/2000/svg"
                            width={"18.219"}
                            height={"14.22"}
                            viewBox="0 0 18.219 14.22"
                          >
                            <path
                              id="Path_87"
                              data-name="Path 87"
                              d="M120.475,1319.09v.037h.034a.036.036,0,0,0,.018,0,.016.016,0,0,0,.007-.014.016.016,0,0,0-.007-.014.033.033,0,0,0-.018,0h-.034Zm.034-.026a.064.064,0,0,1,.041.012.04.04,0,0,1,.014.032.037.037,0,0,1-.011.028.055.055,0,0,1-.033.014l.046.052h-.035l-.042-.052h-.014v.052h-.029v-.138h.064Zm-.009.186a.108.108,0,0,0,.045-.009.117.117,0,0,0,.061-.061.115.115,0,0,0-.025-.127.117.117,0,0,0-.036-.025.111.111,0,0,0-.045-.009.115.115,0,0,0-.083.033.118.118,0,0,0-.024.128.108.108,0,0,0,.024.037.118.118,0,0,0,.037.025.114.114,0,0,0,.046.009m0-.265a.152.152,0,0,1,.107.044.146.146,0,0,1,.032.047.148.148,0,0,1,0,.116.156.156,0,0,1-.032.047.165.165,0,0,1-.048.032.144.144,0,0,1-.059.012.148.148,0,0,1-.06-.012.157.157,0,0,1-.048-.032.155.155,0,0,1-.032-.049.15.15,0,0,1,.14-.207m-13.947-.532a.453.453,0,1,1,.454.48.449.449,0,0,1-.454-.48m1.21,0v-.75h-.325v.183a.566.566,0,0,0-.472-.22.789.789,0,0,0,0,1.575.566.566,0,0,0,.472-.22v.182h.325v-.75Zm10.984,0a.453.453,0,1,1,.454.48.449.449,0,0,1-.454-.48m1.211,0V1317.1h-.325v.785a.566.566,0,0,0-.472-.22.789.789,0,0,0,0,1.575.566.566,0,0,0,.472-.22v.182h.325Zm-8.16-.5a.372.372,0,0,1,.378.364H111.4a.386.386,0,0,1,.4-.364m.006-.292a.788.788,0,0,0,.022,1.575.905.905,0,0,0,.613-.21l-.159-.242a.711.711,0,0,1-.435.157.416.416,0,0,1-.447-.367h1.11c0-.04.006-.082.006-.125a.719.719,0,0,0-.71-.788m3.925.788a.453.453,0,1,1,.454.48.45.45,0,0,1-.454-.48m1.21,0v-.75h-.325v.183a.566.566,0,0,0-.472-.22.789.789,0,0,0,0,1.575.567.567,0,0,0,.472-.22v.182h.325v-.75Zm-3.046,0a.756.756,0,0,0,.8.788.781.781,0,0,0,.537-.179l-.156-.264a.656.656,0,0,1-.392.135.481.481,0,0,1,0-.96.657.657,0,0,1,.392.135l.156-.264a.781.781,0,0,0-.537-.179.756.756,0,0,0-.8.788m4.191-.788a.441.441,0,0,0-.394.22v-.182h-.322v1.5h.325v-.841c0-.248.106-.386.319-.386a.523.523,0,0,1,.2.038l.1-.308a.691.691,0,0,0-.232-.041m-8.714.157a1.116,1.116,0,0,0-.61-.157c-.379,0-.623.182-.623.48,0,.245.182.4.516.443l.154.022c.178.025.262.072.262.157,0,.116-.118.182-.341.182a.8.8,0,0,1-.5-.157l-.153.254a1.076,1.076,0,0,0,.647.195c.432,0,.682-.2.682-.49,0-.264-.2-.4-.522-.448l-.153-.022c-.141-.018-.253-.047-.253-.147s.106-.176.285-.176a.963.963,0,0,1,.466.128l.141-.264Zm4.195-.156a.44.44,0,0,0-.394.22v-.182h-.322v1.5h.325v-.841c0-.248.106-.386.319-.386a.522.522,0,0,1,.2.038l.1-.308a.691.691,0,0,0-.232-.041m-2.774.037h-.532v-.455h-.329v.455h-.3v.3h.3v.684c0,.348.135.555.519.555a.761.761,0,0,0,.407-.116l-.094-.279a.6.6,0,0,1-.288.085c-.162,0-.216-.1-.216-.251V1318h.532Zm-4.86,1.5v-.941a.558.558,0,0,0-.588-.6.578.578,0,0,0-.525.267.548.548,0,0,0-.494-.267.494.494,0,0,0-.438.223v-.186h-.325v1.5h.328v-.832a.351.351,0,0,1,.366-.4c.216,0,.325.141.325.4v.835h.329v-.832a.353.353,0,0,1,.366-.4c.222,0,.328.141.328.4v.835Z"
                              transform="translate(-102.616 -1305.064)"
                              fill="#231f20"
                            />
                            <path
                              id="Path_88"
                              data-name="Path 88"
                              d="M1929.324,977.439v-.219h-.057l-.066.151-.065-.151h-.057v.219h.04v-.165l.062.143h.042l.062-.143v.166h.04Zm-.361,0v-.182h.073v-.037h-.186v.037h.073v.182h.04Z"
                              transform="translate(-1911.281 -968.29)"
                              fill="#f79410"
                            />
                            <path
                              id="Path_89"
                              data-name="Path 89"
                              d="M734.636,141.032H729.71V132.15h4.926Z"
                              transform="translate(-723.063 -130.942)"
                              fill="#ff5f00"
                            />
                            <path
                              id="Path_90"
                              data-name="Path 90"
                              d="M6.959,5.648a5.646,5.646,0,0,1,2.15-4.441A5.626,5.626,0,0,0,0,5.648a5.626,5.626,0,0,0,9.109,4.441,5.646,5.646,0,0,1-2.15-4.441"
                              transform="translate(0 0.001)"
                              fill="#eb001b"
                            />
                            <path
                              id="Path_91"
                              data-name="Path 91"
                              d="M1009.22,5.648a5.627,5.627,0,0,1-9.11,4.441,5.66,5.66,0,0,0,0-8.882,5.627,5.627,0,0,1,9.11,4.441"
                              transform="translate(-991 0.001)"
                              fill="#f79e1b"
                            />
                          </svg>
                        </a>
                        <a href="#/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={"24.885"}
                            height={"7.999"}
                            viewBox="0 0 24.885 7.999"
                          >
                            <g
                              id="Group_63"
                              data-name="Group 63"
                              transform="translate(0 0)"
                            >
                              <path
                                id="Path_93"
                                data-name="Path 93"
                                d="M22.014,59.384H19.983l1.269-7.727h2.031Zm-3.739-7.727-1.936,5.315-.229-1.145h0l-.683-3.475a.866.866,0,0,0-.963-.7h-3.2l-.038.131a7.638,7.638,0,0,1,2.124.883l1.764,6.713H17.23l3.231-7.728Zm15.971,7.727h1.864l-1.626-7.728H32.853a.932.932,0,0,0-.937.576l-3.028,7.152H31l.423-1.148h2.581Zm-2.234-2.733,1.067-2.892.6,2.892Zm-2.966-3.136.29-1.659a5.908,5.908,0,0,0-1.826-.337c-1.008,0-3.4.436-3.4,2.558,0,2,2.809,2.021,2.809,3.07s-2.519.861-3.351.2l-.3,1.735a5.735,5.735,0,0,0,2.292.436c1.386,0,3.476-.711,3.476-2.646,0-2.009-2.834-2.2-2.834-3.07S28.177,53.041,29.046,53.515Z"
                                transform="translate(-11.226 -51.519)"
                                fill="#2566af"
                              />
                              <path
                                id="Path_94"
                                data-name="Path 94"
                                d="M16.44,56.639l-.729-3.71a.925.925,0,0,0-1.028-.743H11.266l-.04.14a8.434,8.434,0,0,1,3.217,1.6A6.43,6.43,0,0,1,16.44,56.639Z"
                                transform="translate(-11.226 -52.039)"
                                fill="#e6a540"
                              />
                            </g>
                          </svg>
                        </a>
                        <p>and more...</p>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form__div">
                          <input
                            type={"text"}
                            className="form__input"
                            placeholder="Name on Card"
                          />
                          <label htmlFor="" className="form__label"></label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form__div">
                          <input
                            type={"text"}
                            className="form__input"
                            placeholder="Card Number"
                          />
                          <label htmlFor="" className="form__label"></label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form__div">
                          <input
                            type={"text"}
                            className="form__input"
                            placeholder="Expiration Date (MM/YY)"
                          />
                          <label htmlFor="" className="form__label"></label>
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form__div">
                          <input
                            type={"text"}
                            className="form__input"
                            placeholder="CVC"
                          />
                          <label htmlFor="" className="form__label"></label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="on-delivery">
                    <input type={"radio"} id="on-delivery" />
                    <label htmlFor="on-delivery">Cash on Delivery</label>
                  </div>
                  <div className="save-info">
                    <input type={"checkbox"} name="" id="save-info" />
                    <label htmlFor="save-info">
                      Save my information for a faster checkout
                    </label>
                  </div>
                  <div className="row">
                    <div className="col-12 d-flex align-items-center justify-content-between bottom flex-wrap">
                      <a href="/billing">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={"24"}
                          height={"24"}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={"2"}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="feather feather-chevron-left"
                        >
                          <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                        Return to billing information
                      </a>
                      <button className="btn bg-primary mt-0" type="submit">
                        Pay Now
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Payment;
