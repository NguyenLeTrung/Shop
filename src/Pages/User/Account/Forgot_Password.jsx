import Header from "../../../components/Header";

function ForgotPassword() {
  return (
    <div className="forgot-password-container">
      <Header />
      <div className="account section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="login-form border p-5 shadow">
                <div className="text-center heading">
                  <h3 className="mb-2 h2">Forgot Password</h3>
                </div>

                <form action="/">
                  <div className="form-group mb-4">
                    <label htmlFor="#">Enter Email Address</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Email Addresss"
                    />
                  </div>
                  <a href="/login" className="btn mt-3 btn-primary w-100">
                    Request OTP
                  </a>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
