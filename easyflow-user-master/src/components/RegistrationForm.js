import React from "react";
import "./ComponentsCss.css";

class RegistrationForm extends React.Component {
  constructor(property) {
    super(property);
    this.state = {
      cName: property.previousDetails["cName"],
      cNumber: property.previousDetails["cNumber"],
      eMail: property.previousDetails["eMail"],
      cin: property.previousDetails["cin"],
      gstin: property.previousDetails["gstin"],
      Address: "",
      State: "",
      District: "",
      numberofemployees: "",
      siteLocation: "",
    };
  }

  render() {
    return (
      <div className="container">
        <div className="row gx-0">
          <form
            id="form2"
            className="col-12 needs-validation"
            noValidate
            onSubmit={(e) => {
              var form = document.getElementById("form2");
              e.preventDefault();

              if (!form.checkValidity()) {
                e.stopPropagation();
              } else {
                this.props.printDetails({
                  cName: this.state.cName,
                  eMail: this.state.eMail,
                  cin: this.state.cin,
                  gstin: this.state.gstin,
                  cNumber: this.state.cNumber,
                  Address: this.state.Address,
                  State: this.state.State,
                  District: this.state.District,
                  numberofemployees: this.state.numberofemployees,
                  siteLocation: this.state.siteLocation,
                });
              }
              form.classList.add("was-validated");
            }}
          >
            <div className="row mt-3 justify-content-md-center">
              <div className="row justify-content-center">
                <div className="col-3">
                  <h3>Register as Employer</h3>
                </div>
              </div>
            </div>
            <div className="row mt-3 justify-content-center">
              <div className="col-md-8">
                <label htmlFor="cName" className="form-label">
                  COMPANY NAME
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cName"
                  name="cName"
                  onChange={(e) => {
                    this.setState({ cName: e.currentTarget.value });
                  }}
                  value={this.state.cName}
                  disabled
                  required
                />
              </div>
            </div>
            <div className="row mt-3 justify-content-center">
              <div className="col-md-8">
                <label htmlFor="cNumber" className="form-label">
                  CONTACT NUMBER
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cNumber"
                  name="cNumber"
                  onChange={(e) => {
                    this.setState({ cNumber: e.currentTarget.value });
                  }}
                  value={this.state.cNumber}
                  disabled
                  required
                />
              </div>
            </div>
            <div className="row mt-3 justify-content-center">
              <div className="col-md-8">
                <label htmlFor="eMail" className="form-label">
                  EMAIL
                </label>
                <div className="input-group">
                  <span className="input-group-text" id="inputGroupPrepend">
                    @
                  </span>
                  <input
                    type="text"
                    className="form-control"
                    id="eMail"
                    name="eMail"
                    onChange={(e) => {
                      this.setState({ eMail: e.currentTarget.value });
                    }}
                    value={this.state.eMail}
                    disabled
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row mt-3 justify-content-center">
              <div className="col-md-8">
                <label htmlFor="cin" className="form-label">
                  CIN
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="cin"
                  name="cin"
                  onChange={(e) => {
                    this.setState({ cin: e.currentTarget.value });
                  }}
                  value={this.state.cin}
                  disabled
                  required
                />
              </div>
            </div>
            <div className="row mt-3 justify-content-center">
              <div className="col-md-8">
                <label htmlFor="gstin" className="form-label">
                  GSTIN
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="gstin"
                  name="gstin"
                  onChange={(e) => {
                    this.setState({ gstin: e.currentTarget.value });
                  }}
                  value={this.state.gstin}
                  disabled
                  required
                />
              </div>
            </div>
            <div className="row mt-3 justify-content-center">
              <div className="col-md-8">
                <label htmlFor="validationCustom01" className="form-label">
                  ADDRESS
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  name="Address"
                  onChange={(e) => {
                    this.setState({ Address: e.currentTarget.value });
                  }}
                  value={this.state.Address}
                  required
                />
              </div>
            </div>
            <div className="row mt-3 justify-content-center">
              <div className="col-md-8">
                <label htmlFor="validationCustom02" className="form-label">
                  STATE
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom02"
                  name="State"
                  onChange={(e) => {
                    this.setState({ State: e.currentTarget.value });
                  }}
                  value={this.state.State}
                  required
                />
              </div>
            </div>
            <div className="row mt-3 justify-content-center">
              <div className="col-md-8">
                <label htmlFor="validationCustom03" className="form-label">
                  DISTRICT
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom03"
                  name="district"
                  onChange={(e) => {
                    this.setState({ District: e.currentTarget.value });
                  }}
                  value={this.state.District}
                  required
                />
              </div>
            </div>
            <div className="row mt-3 justify-content-center">
              <div className="col-md-8">
                <label htmlFor="validationCustom04" className="form-label">
                  NUMBER OF EMPLOYEES
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="validationCustom04"
                  name="noe"
                  onChange={(e) => {
                    this.setState({ numberofemployees: e.currentTarget.value });
                  }}
                  value={this.state.numberofemployees}
                  required
                />
              </div>
            </div>
            <div className="row mt-3 justify-content-center">
              <div className="col-md-8">
                <label htmlFor="validationCustom5" className="form-label">
                  SITE LOCATION
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom5"
                  name="sLocation"
                  onChange={(e) => {
                    this.setState({ siteLocation: e.currentTarget.value });
                  }}
                  value={this.state.siteLocation}
                  required
                />
              </div>
            </div>
            <div className="row mt-3 justify-content-center">
              <div className="form-check col-md-8 checkBox2">
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
            <div className="row mt-3 justify-content-center">
              <div className="col-2">
                <button className="btn btn-dark" type="submit">
                  SUBMIT APPLICATION
                </button>
              </div>
            </div>
            <div id="attachHere"></div>
          </form>
        </div>
      </div>
    );
  }
}

export default RegistrationForm;
