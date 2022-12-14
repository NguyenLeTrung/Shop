import React, { Component } from 'react';
import Header from "../../../components/Page/Header";
import Footer from "../../../components/Page/Footer";

class Cart extends Component {
  render() {
    return (
      <div id="page">
        <Header />
        <div className="breadcrumbs">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="bread"><span><a href="/">Trang chủ</a></span> / <span>Giỏ hàng</span></p>
              </div>
            </div>
          </div>
        </div>
        <div className="colorlib-product">
          <div className="container">
            <div className="row row-pb-lg">
              <div className="col-md-10 offset-md-1">
                <div className="process-wrap">
                  <div className="process text-center active">
                    <p><span>01</span></p>
                    <h3>Giỏ hàng</h3>
                  </div>
                  <div className="process text-center">
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
            <div className="row row-pb-lg">
              <div className="col-md-12">
                <div className="product-name d-flex">
                  <div className="one-forth text-left px-4">
                    <span>Tên sản phẩm</span>
                  </div>
                  <div className="one-eight text-center">
                    <span>Giá</span>
                  </div>
                  <div className="one-eight text-center">
                    <span>Số lượng</span>
                  </div>
                  <div className="one-eight text-center">
                    <span>Tổng</span>
                  </div>
                  <div className="one-eight text-center px-4">
                    <span>Xóa</span>
                  </div>
                </div>
                <div className="product-cart d-flex">
                  <div className="one-forth">
                    <div className="product-img" style={{ backgroundImage: `url(../assets/images/item-6.jpg)` }}>
                    </div>
                    <div className="display-tc">
                      <h3>Product Name</h3>
                    </div>
                  </div>
                  <div className="one-eight text-center">
                    <div className="display-tc">
                      <span className="price">$68.00</span>
                    </div>
                  </div>
                  <div className="one-eight text-center">
                    <div className="display-tc">
                      <input type="number" id="quantity" name="quantity" className="form-control input-number text-center" value="1" min="1" max="100" />
                    </div>
                  </div>
                  <div className="one-eight text-center">
                    <div className="display-tc">
                      <span className="price">$120.00</span>
                    </div>
                  </div>
                  <div className="one-eight text-center">
                    <div className="display-tc">
                      <a href="#" className="closed"></a>
                    </div>
                  </div>
                </div>
                <div className="product-cart d-flex">
                  <div className="one-forth">
                    <div className="product-img" style={{ backgroundImage: `url(../assets/images/item-7.jpg)` }}>
                    </div>
                    <div className="display-tc">
                      <h3>Product Name</h3>
                    </div>
                  </div>
                  <div className="one-eight text-center">
                    <div className="display-tc">
                      <span className="price">$68.00</span>
                    </div>
                  </div>
                  <div className="one-eight text-center">
                    <div className="display-tc">
                      <form action="#">
                        <input type="text" name="quantity" className="form-control input-number text-center" value="1" min="1" max="100" />
                      </form>
                    </div>
                  </div>
                  <div className="one-eight text-center">
                    <div className="display-tc">
                      <span className="price">$120.00</span>
                    </div>
                  </div>
                  <div className="one-eight text-center">
                    <div className="display-tc">
                      <a href="#" className="closed"></a>
                    </div>
                  </div>
                </div>
                <div className="product-cart d-flex">
                  <div className="one-forth">
                    <div className="product-img" style={{ backgroundImage: `url(../assets/images/item-8.jpg)` }}>
                    </div>
                    <div className="display-tc">
                      <h3>Product Name</h3>
                    </div>
                  </div>
                  <div className="one-eight text-center">
                    <div className="display-tc">
                      <span className="price">$68.00</span>
                    </div>
                  </div>
                  <div className="one-eight text-center">
                    <div className="display-tc">
                      <input type="text" id="quantity" name="quantity" className="form-control input-number text-center" value="1" min="1" max="100" />
                    </div>
                  </div>
                  <div className="one-eight text-center">
                    <div className="display-tc">
                      <span className="price">$120.00</span>
                    </div>
                  </div>
                  <div className="one-eight text-center">
                    <div className="display-tc">
                      <a href="#" className="closed"></a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row row-pb-lg">
              <div className="col-md-12">
                <div className="total-wrap">
                  <div className="row">
                    <div className="col-sm-8">
                      <form action="#">
                        <div className="row form-group">
                          <div className="col-sm-9">
                            <input type="text" name="quantity" className="form-control input-number" placeholder="Your Coupon Number..." />
                          </div>
                          <div className="col-sm-3">
                            <input type="submit" value="Apply Coupon" className="btn btn-primary" />
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="col-sm-4 text-center">
                      <div className="total">
                        <div className="sub">
                          <p><span>Subtotal:</span> <span>$200.00</span></p>
                          <p><span>Delivery:</span> <span>$0.00</span></p>
                          <p><span>Discount:</span> <span>$45.00</span></p>
                        </div>
                        <div className="grand-total">
                          <p><span><strong>Total:</strong></span> <span>$450.00</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
                <h2>Related Products</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3 col-lg-3 mb-4 text-center">
                <div className="product-entry border">
                  <a href="#" className="prod-img">
                    <img src="../assets/images/item-1.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
                  </a>
                  <div className="desc">
                    <h2><a href="#">Women's Boots Shoes Maca</a></h2>
                    <span className="price">$139.00</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 mb-4 text-center">
                <div className="product-entry border">
                  <a href="#" className="prod-img">
                    <img src="../assets/images/item-2.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
                  </a>
                  <div className="desc">
                    <h2><a href="#">Women's Minam Meaghan</a></h2>
                    <span className="price">$139.00</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 mb-4 text-center">
                <div className="product-entry border">
                  <a href="#" className="prod-img">
                    <img src="../assets/images/item-3.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
                  </a>
                  <div className="desc">
                    <h2><a href="#">Men's Taja Commissioner</a></h2>
                    <span className="price">$139.00</span>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3 mb-4 text-center">
                <div className="product-entry border">
                  <a href="#" className="prod-img">
                    <img src="../assets/images/item-4.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
                  </a>
                  <div className="desc">
                    <h2><a href="#">Russ Men's Sneakers</a></h2>
                    <span className="price">$139.00</span>
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

export default Cart;
