import Header from "../../../components/Header";
import Footer from "../../../components/Footer";

function Order() {
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
                    Order
                  </li>
                </ol>
              </nav>
              <h5>Order</h5>
            </div>
          </div>
        </div>
      </section>

      <section className="order-area">
        <div className="container">
          <div className="row">
            {/* <!-- Order Item Start --> */}
            <div className="cart-items">
              <div className="header">
                <div className="image">Image</div>
                <div className="name">Name</div>
                <div className="price">Prices</div>
                <div className="rating">Rating</div>
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
                      <h5 className="text-uppercase">
                        MLB BOSTON RED SOX BIG BALL CHUNKY P 3D
                      </h5>
                    </div>
                    <div className="button">
                      <a className="btn bg-primary" href="/billing">
                        Checkout now
                      </a>
                      <a className="del" href="/#">
                        Delete
                      </a>
                    </div>
                  </div>
                  <div className="price">
                    <span>210.000 VNĐ</span> <del>300.000 VNĐ</del>
                  </div>
                  <div className="rating">
                    <i className="fas fa-star"></i> 5.0
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- Order Item End --> */}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Order;
