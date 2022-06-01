import React from 'react'

export const About = () => {
    return (
        <div>
            <h2 className="page-header">About Us</h2>
            <hr className="featurette-divider" />
            <div className="container my-4">
                <div className="row featurette">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">
                            Hire Best Rated Worker.{" "}

                        </h2>
                        <hr className="featurette-divider" />
                        <br />
                        <br />
                        <p className="lead ">
                            This website will meet all type of yours worker requirements.It will helps you to hire best of best workers with highest ratings. You can hire workers from your work site and reduce your tasportation cost and you can promote local workers.
                            <br />
                            <br />
                            Get Workers Online, Remove Contractors
                        </p>

                    </div>
                    <div className="col-md-5">
                        <img class="bd-placeholder-img" width="400" height="350" src="https://source.unsplash.com/300x100/?company,worker" alt="..." />{" "}
                    </div>
                </div>
                <hr className="featurette-divider" />

                <div className="row featurette my-4">
                    <div className="col-md-7 order-md-2">
                        <h2 className="featurette-heading fw-normal lh-1">
                            Work in your favourable location.{" "}

                        </h2>
                        <hr className="featurette-divider" />
                        <br />
                        <br />
                        <p className="lead">
                            Oh yeah,You can get work in your favourable location to work.
                            This website will provide you opportunities to get hired by top rated employers without interaction with the middle-man
                            that means you will be paid without the detuction of commision by contractor.
                            <br />
                            <br />
                            Remove Contractor, Earn More
                        </p>



                    </div>
                    <div className="col-md-5 order-md-1">
                        <img class="bd-placeholder-img" width="400" height="350" src="https://source.unsplash.com/300x100/?company" alt="..." />{" "}

                    </div>

                </div>
                <hr className="featurette-divider" />
                <div className="row featurette my-4">
                    <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">
                            And lastly,
                        </h2>
                        <hr className="featurette-divider" />
                        <p className="lead">
                            If you have any problem with website or you want any help regarding this website feel free to contact us. we be very gratefull to help you to solve your problem and provide appropiate solution as soon as possible.
                            <br/>
                            <br/>
                            For feedback fill the form below.
                        </p>
                    </div>
                    <div className="col-md-5">
                        <img class="bd-placeholder-img" width="400" height="350" src="https://source.unsplash.com/300x100/?smile" alt="..." />{" "}

                    </div>
                </div>
                <hr className="featurette-divider" />


            </div>
            <h2 className="page-header">Contact Us</h2>
            <hr className="featurette-divider" />
            <div className="container">
                <form className="row g-3">
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">
                            Name
                        </label>
                        <input type="email" className="form-control" id="inputEmail4" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">
                            Email
                        </label>
                        <input type="email" className="form-control" id="inputPassword4" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputEmail4" className="form-label">
                            Contact
                        </label>
                        <input type="email" className="form-control" id="inputPassword4" />
                    </div>
                    <div className="col-md-6">
                        <label htmlFor="inputState" className="form-label">
                            Type
                        </label>
                        <select id="inputState" className="form-select">
                            <option selected="">Choose</option>
                            <option>Worker</option>
                            <option>Company</option>
                        </select>
                    </div>
                    <div className="col-md-12">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">
                            Write Here
                        </label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            defaultValue={"..."}
                        />
                    </div>
                    <div className="col-12">
                        <button type="submit" className="btn btn-primary">
                            Send
                        </button>
                    </div>
                </form>

            </div>
            <div className="container">
  <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <div className="col-md-4 d-flex align-items-center">
      <a
        href="/"
        className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
      >
        <svg className="bi" width={30} height={24}>
          <use xlinkHref="#bootstrap" />
        </svg>
      </a>
      <span className="mb-3 mb-md-0 text-muted">© 2022 EasyFlow</span>
    </div>
    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
      <li className="ms-3">
      <a className="text-muted" href="https://twitter.com">
          <img class="bd-placeholder-img" width="24" height="24" src="bx bxl-twitter"/>
        </a>
      </li>
      <li className="ms-3">
      <a className="text-muted" href="https://instagram.com">
          <img class="bd-placeholder-img" width="24" height="24" src="bx bxl-instagram"/>
        </a>
      </li>
      <li className="ms-3">
        <a className="text-muted" href="https://facebook.com">
          <img class="bd-placeholder-img" width="24" height="24" src="bx bxl-facebook"/>
          
          
        </a>
      </li>
    </ul>
  </footer>
</div>






        </div>
    )
}
