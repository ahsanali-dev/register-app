import React from "react";
import { Form, Formik } from "formik";
import Users from "./Users";
import axios from "axios";

const Regiater = () => {
  const handleSubmit = (values) => {
    axios
      .post("http://localhost:3001/users", values)
      .then((response) => {
        console.log("Data saved successfully:", response.data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  // const [userFormData, setuserFormData] = useState({
  //   name: "",
  //   email: "",
  //   password: "",
  // });
  // const handleChange = (e) => {
  //   setuserFormData({
  //     ...userFormData,
  //     [e.target.name]: e.target.value,
  //   });
  // };
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(userFormData);
  // };

  return (
    <div>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-8">
            <h1 className="text-center text-success mb-3">Regesiter</h1>
            <Formik
              initialValues={{ name: "", email: "", password: "" }}
              onSubmit={handleSubmit}
            >
              {({ values, handleChange }) => (
                <Form>
                  <div className="card">
                    <div className="card-body">
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput2"
                          className="form-label"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          id="exampleFormControlInput2"
                          placeholder="Your Name"
                          onChange={handleChange}
                          name="name"
                          value={values.name}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlInput1"
                          className="form-label"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          id="exampleFormControlInput1"
                          placeholder="name@example.com"
                          onChange={handleChange}
                          name="email"
                          value={values.email}
                        />
                      </div>
                      <div className="mb-3">
                        <label
                          htmlFor="exampleFormControlTextarea1"
                          className="form-label"
                        >
                          Password:
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          id="exampleFormControlTextarea1"
                          onChange={handleChange}
                          name="password"
                          value={values.password}
                        ></input>
                      </div>
                      <div className="mb-3">
                        <button type="submit" className="btn btn-primary">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
          <div className="col-12 mt-5">
            <Users />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Regiater;
