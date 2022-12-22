import React, { Component } from 'react';
import Header from "../../../components/Page/Header";
import Footer from "../../../components/Page/Footer";

class Checkout extends Component {
  render() {
    return (
      <div id="page">
        <Header />
        <div className="breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="bread"><span><a href="/">Trang chủ</a></span> / <span>Thanh toán</span></p>
              </div>
            </div>
          </div>
        </div>

        <div className="colorlib-product">
          <div className="container">
            <div className="row row-pb-lg">
              <div className="col-sm-10 offset-md-1">
                <div className="process-wrap">
                  <div className="process text-center active">
                    <p><span>01</span></p>
                    <h3>Giỏ hàng</h3>
                  </div>
                  <div className="process text-center active">
                    <p><span>02</span></p>
                    <h3>Thanh toán</h3>
                  </div>
                  <div className="process text-center">
                    <p><span>03</span></p>
                    <h3>Thành công</h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8">
                <form method="post" className="colorlib-form">
                  <h2>Chi tiết hóa đơn</h2>
                  <div className="row">
                    {/* <div className="col-md-12">
                      <div className="form-group">
                        <label for="country">Select Country</label>
                        <div className="form-field">
                          <i className="icon icon-arrow-down3"></i>
                          <select name="people" id="people" className="form-control">
                            <option value="#">Select country</option>
                            <option value="#">Alaska</option>
                            <option value="#">China</option>
                            <option value="#">Japan</option>
                            <option value="#">Korea</option>
                            <option value="#">Philippines</option>
                          </select>
                        </div>
                      </div>
                    </div> */}

                    <div className="col-md-12">
                      <div className="form-group">
                        <label>Họ và tên</label>
                        <input type="text" className="form-control" placeholder="Họ và tên" />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="form-group">
                        <label for="lname">Email</label>
                        <input type="text" className="form-control" placeholder="Email" />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <label for="companyname">SĐT</label>
                        <input type="text" className="form-control" placeholder="Số điện thoại" />
                      </div>
                    </div>

                    <div className="col-md-12">
                      <div className="form-group">
                        <label for="fname">Địa chỉ</label>
                        <input type="text"className="form-control" placeholder="Địa chỉ" />
                      </div>
                      {/* <div className="form-group">
                        <input type="text" id="address2" className="form-control" placeholder="Second Address" />
                      </div> */}
                    </div>

                    {/* <div className="col-md-12">
                      <div className="form-group">
                        <label for="companyname">Town/City</label>
                        <input type="text" id="towncity" className="form-control" placeholder="Town or City" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="stateprovince">State/Province</label>
                        <input type="text" id="fname" className="form-control" placeholder="State Province" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="lname">Zip/Postal Code</label>
                        <input type="text" id="zippostalcode" className="form-control" placeholder="Zip / Postal" />
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="email">E-mail Address</label>
                        <input type="text" id="email" className="form-control" placeholder="State Province" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label for="Phone">Phone Number</label>
                        <input type="text" id="zippostalcode" className="form-control" placeholder="" />
                      </div>
                    </div> */}

                    {/* <div className="col-md-12">
                      <div className="form-group">
                        <div className="radio">
                          <label><input type="radio" name="optradio" /> Create an Account? </label> <br/>
                          <label><input type="radio" name="optradio" /> Ship to different address</label>
                        </div>
                      </div>
                    </div> */}
                  </div>
                </form>
              </div>

              <div className="col-lg-4">
                <div className="row">
                  <div className="col-md-12">
                    <div className="cart-detail">
                      <h2>Đơn hàng</h2>
                      <ul>
                        <li>
                          {/* <span>Subtotal</span> <span>$100.00</span> */}
                          <ul>
                            <li><span>1 x Product Name</span> <span>$90.00</span></li>
                            <li><span>1 x Product Name</span> <span>$90.00</span></li>
                          </ul>
                        </li>
                        <li><span>Shipping</span> <span>$0.00</span></li>
                        <li><span>Tổng tiền</span> <span>$180.00</span></li>
                      </ul>
                    </div>
                  </div>

                  <div className="w-100"></div>

                  {/* <div className="col-md-12">
                    <div className="cart-detail">
                      <h2>Payment Method</h2>
                      <div className="form-group">
                        <div className="col-md-12">
                          <div className="radio">
                            <label><input type="radio" name="optradio" /> Direct Bank Tranfer</label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-md-12">
                          <div className="radio">
                            <label><input type="radio" name="optradio" /> Check Payment</label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-md-12">
                          <div className="radio">
                            <label><input type="radio" name="optradio" /> Paypal</label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="col-md-12">
                          <div className="checkbox">
                            <label><input type="checkbox" value="" /> I have read and accept the terms and conditions</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="row">
                  <div className="col-md-12 text-center">
                    <p><a href="#" className="btn btn-primary">Đặt hàng</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Checkout;