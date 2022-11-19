import Header from "../../../components/Header";
import Footer from "../../../components/Footer";
function Billing() {
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
                  <li className="breadcrumb-item active" aria-current="page">
                    Billing information
                  </li>
                </ol>
              </nav>
              <h5>Billing information</h5>
            </div>
          </div>
        </div>
      </section>

      <main>
        {/* <!-- Billing Info Area Start --> */}
        <section className="billing-info-area">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                {/* <!-- Dashboard-Nav  Start--> */}
                <div className="dashboard-nav">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="/billing" className="active">
                        Billing information
                      </a>
                      <i className="fas fa-angle-right"></i>
                    </li>
                    <li className="list-inline-item">
                      <a href="/payment" className="mr-0">
                        Payment
                      </a>
                    </li>
                  </ul>
                </div>
                {/* <!-- Dashboard-Nav  End--> */}
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7 order-2 order-lg-1">
                <div className="deliver-info-form">
                  <h6>Billing information</h6>
                  <form action="#">
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="form__div">
                          <input
                            type={"text"}
                            className="form__input"
                            placeholder="First Name"
                          />
                          <label htmlFor="" className="form__label"></label>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="form__div">
                          <input
                            type={"text"}
                            className="form__input"
                            placeholder="Last Name"
                          />
                          <label htmlFor="" className="form__label"></label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="form__div">
                          <input
                            type={"text"}
                            className="form__input"
                            placeholder="Address"
                          />
                          <label htmlFor="" className="form__label"></label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="form__div">
                          <input
                            type={"text"}
                            className="form__input"
                            placeholder="City"
                          />
                          <label htmlFor="" className="form__label"></label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="form__div">
                          <input
                            type={"text"}
                            className="form__input"
                            placeholder="Phone"
                          />
                          <label htmlFor="" className="form__label"></label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <div className="form__div">
                          <input
                            type={"email"}
                            className="form__input"
                            placeholder="Email"
                          />
                          <label htmlFor="" className="form__label"></label>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12 d-flex align-items-center justify-content-between bottom flex-wrap">
                        <a href="#/">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={"24"}
                            height={"24"}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-chevron-left"
                          >
                            <polyline points="15 18 9 12 15 6"></polyline>
                          </svg>
                          Return to cart
                        </a>
                        <a
                          href="/payment"
                          className="btn bg-primary mt-0 text-white"
                          type="submit"
                        >
                          Continue
                        </a>
                      </div>
                    </div>
                  </form>
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
                  <form action="#">
                    <a
                      href="/payment"
                      className="btn bg-primary mt-3"
                      type={"submit"}
                      style={{ width: "100%" }}
                    >
                      Checkout Now
                    </a>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Billing Info Area End --> */}
      </main>
      <Footer />
    </div>
  );
}

export default Billing;
