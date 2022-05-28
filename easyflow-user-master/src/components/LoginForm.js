import React from "react";
import "./ComponentsCss.css";

class LoginForm extends React.Component {
  constructor(property) {
    super(property);
    this.state = {
      cName: "",
      cNumber: "",
      eMail: "",
      cin: "",
      gstin: "",
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row gx-0">
          <form
            id="form1"
            className="col-7 needs-validation"
            noValidate
            onSubmit={(e) => {
              var form = document.getElementById("form1");
              e.preventDefault();

              if (!form.checkValidity()) {
                e.stopPropagation();
              } else {
                window.alert("A confirmation email has been sent to you email account...");
                this.props.printDetails({
                  cName: this.state.cName,
                  cNumber: this.state.cNumber,
                  eMail: this.state.eMail,
                  cin: this.state.cin,
                  gstin: this.state.gstin,
                  logIn: true,
                });
              }
              form.classList.add("was-validated");
            }}
          >
            <div className="row mt-3 justify-content-md-center">
              <div className="row justify-content-md-center">
                <div className="col-5">
                  <h3>Register as Employer</h3>
                </div>
              </div>
            </div>
            <div className="row mt-3 justify-content-md-center">
              <div className="col-md-8">
                <label htmlFor="validationCustom01" className="form-label">
                  COMPANY NAME
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  name="cName"
                  onChange={(e) => {
                    this.setState({ cName: e.currentTarget.value });
                  }}
                  value={this.state.cName}
                  required
                />
              </div>
            </div>
            <div className="row mt-3 justify-content-md-center">
              <div className="col-md-8">
                <label htmlFor="validationCustom02" className="form-label">
                  CONTACT NUMBER
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="validationCustom02"
                  name="cNumber"
                  pattern="[0-9]{10}"
                  maxLength="10"
                  onChange={(e) => {
                    this.setState({ cNumber: e.currentTarget.value });
                  }}
                  value={this.state.cNumber}
                  required
                />
                <div className="invalid-feedback">Invalid contact number</div>
              </div>
            </div>
            <div className="row mt-3 justify-content-md-center">
              <div className="col-md-8">
                <label
                  htmlFor="validationCustomUsername"
                  className="form-label"
                >
                  EMAIL ADDRESS
                </label>
                <div className="input-group has-validation">
                  <span className="input-group-text" id="inputGroupPrepend">
                    @
                  </span>
                  <input
                    type="email"
                    className="form-control"
                    id="validationCustomUsername"
                    aria-describedby="inputGroupPrepend"
                    name="eMail"
                    onChange={(e) => {
                      this.setState({ eMail: e.currentTarget.value });
                    }}
                    value={this.state.eMail}
                    required
                  />
                  <div className="invalid-feedback">Invalid Email</div>
                </div>
              </div>
            </div>
            <div className="row mt-3 justify-content-md-center">
              <div className="col-md-8">
                <label htmlFor="validationCustom03" className="form-label">
                  CIN
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="validationCustom03"
                  name="cin"
                  pattern=".{21}"
                  maxLength="21"
                  onChange={(e) => {
                    this.setState({ cin: e.currentTarget.value });
                  }}
                  value={this.state.cin}
                  required
                />
                <div className="invalid-feedback">Invalid CIN</div>
              </div>
            </div>
            <div className="row mt-3 justify-content-md-center">
              <div className="col-md-8">
                <label htmlFor="validationCustom04" className="form-label">
                  GSTIN
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom04"
                  name="gstin"
                  pattern=".{15}"
                  maxLength="15"
                  onChange={(e) => {
                    this.setState({ gstin: e.currentTarget.value });
                  }}
                  value={this.state.gstin}
                  required
                />
                <div className="invalid-feedback">Invalid GSTIN</div>
              </div>
            </div>
            <div className="row mt-3 justify-content-md-center">
              <div className="form-check col-md-8 checkBox1">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue
                  id="invalidCheck"
                  required
                  name="termsandservices"
                />
                <label className="form-check-label" htmlFor="invalidCheck">
                  Agree to terms and conditions
                </label>
                <div className="invalid-feedback">
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <div className="row mt-3 justify-content-md-center">
              <div className="col-3">
                <button className="btn btn-dark" type="submit">
                  SUBMIT APPLICATION
                </button>
              </div>
            </div>
            <div id="attachHere"></div>
          </form>
          <img
            src={require("./body-img.png")}
            height={500}
            width={100}
            alt="Here"
            className="col-5"
          />
        </div>
      </div>
    );
  }
}

export default LoginForm;
