import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Header from "../../../components/Header";

const Login = () => {
  return (
    <Formik
      initialValues={{
        user: "",
        password: "",
      }}
      onSubmit={(values) => {}}
    >
      <section className="vh-100">
        <Header />
        <div
          className="container py-5 border border-light round-left shadow"
          style={{ marginTop: 50 }}
        >
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-8 col-lg-7 col-xl-6">
              <figure>
                <img
                  src="../assert/dist/images/register/signin-image.jpg"
                  alt="image_login"
                  title="image_login"
                  style={{ marginLeft: 150 }}
                />
              </figure>
            </div>

            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <h2 className="form-title mb-3 text-center text-uppercase">
                Log in
              </h2>
              <Form id="login-form">
                {/* User Input */}
                <div className="form-outline mb-3">
                  <label htmlFor="user">Username:</label>
                  <Field
                    type="text"
                    name="user"
                    id="user"
                    placeholder="Username"
                    className="form-control"
                  />
                </div>
                <ErrorMessage
                  name="user"
                  render={(msg) => <div style={{ color: "red" }}>{msg}</div>}
                />

                {/* Password Input */}
                <div className="form-outline mb-4">
                  <label htmlFor="password">Password:</label>
                  <Field
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                <ErrorMessage
                  name="password"
                  render={(msg) => <div style={{ color: "red" }}>{msg}</div>}
                />

                <div className="d-flex justify-content-between align-items-center text-right">
                  {/* Checkbox */}
                  <Link
                    to={"/forgot-password"}
                    className="text-decoration-none"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="text-center text-lg-start mt-4 pt-2">
                  <Link
                    to={"/"}
                    type="button"
                    className="btn btn-primary btn-lg w-100"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Login
                  </Link>
                  <p className="text-center small fw-bold mt-2 pt-1 mb-0">
                    Don't have an account?
                    <Link
                      to={"/register"}
                      className="text-center link-danger text-decoration-none mb-6"
                    >
                      {" "}
                      Register
                    </Link>
                  </p>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </Formik>
  );
};

export default Login;
