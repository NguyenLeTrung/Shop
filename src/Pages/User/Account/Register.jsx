import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Header from "../../../components/Header";

const Register = () => {
  return (
    <Formik
      initialValues={{
        user: "",
        email: "",
        password: "",
        confirmPassword: "",
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
            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
              <h2 className="form-title mb-3 text-center text-uppercase font-weight-bolder">
                Register
              </h2>
              <Form id="register-form">
                <div className="form-outline mb-3">
                  {/* Username */}
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
                {/* Email */}
                <div className="form-outline mb-3">
                  <label htmlFor="user">Email:</label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email: email@example.com"
                    className="form-control"
                  />
                </div>
                <ErrorMessage
                  name="email"
                  render={(msg) => <div style={{ color: "red" }}>{msg}</div>}
                />

                <div className="form-outline mb-3">
                  {/* Password */}
                  <label htmlFor="user">Password:</label>
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

                <div className="form-outline mb-3">
                  {/* ConfirmPassword */}
                  <label htmlFor="user">Confirm Password:</label>
                  <Field
                    type="password"
                    name="confirmPassword"
                    id="confirmPassword"
                    placeholder="Password"
                    className="form-control"
                  />
                </div>
                <ErrorMessage
                  name="password"
                  render={(msg) => <div style={{ color: "red" }}>{msg}</div>}
                />

                <div className="text-center text-lg-start mt-4 pt-2">
                  <Link
                    to={"/login"}
                    type="button"
                    className="btn btn-primary btn-lg w-100"
                    style={{ paddingLeft: "2.5rem", paddingRight: "2.5rem" }}
                  >
                    Register
                  </Link>
                  <p className="text-center small fw-bold mt-2 pt-1 mb-0">
                    Create an account ?
                    <Link
                      to={"/login"}
                      className="text-center link-danger text-decoration-none mb-6"
                    >
                      {" "}
                      Log in
                    </Link>
                  </p>
                </div>
              </Form>
            </div>
            <div className="col-md-8 col-lg-7 col-xl-6">
              <figure>
                <img
                  src="../assert/dist/images/register/signup-image.jpg"
                  alt="image_register"
                  title="register"
                  style={{ marginLeft: 150 }}
                />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </Formik>
  );
};

export default Register;
