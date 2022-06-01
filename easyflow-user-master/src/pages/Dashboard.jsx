import React from 'react'

// import { Link } from 'react-router-dom'

// import Chart from 'react-apexcharts'

// import { useSelector } from 'react-redux'

// import StatusCard from '../components/status-card/StatusCard'

// import Table from '../components/table/Table'

// import Badge from '../components/badge/Badge'

// import statusCards from '../assets/JsonData/status-card-data.json'


const Dashboard = () => {

    // addconst themeReducer = useSelector(state => state.ThemeReducer.mode)

    return (
        <div>
            <h2 className="page-header">Home</h2>
            <hr className="featurette-divider" />
            <div className="row">
                <div
                    id="carouselExampleCaptions"
                    className="carousel slide"
                    data-bs-ride="false"
                >
                    <div className="carousel-indicators">
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={0}
                            className="active"
                            aria-current="true"
                            aria-label="Slide 1"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={1}
                            aria-label="Slide 2"
                        />
                        <button
                            type="button"
                            data-bs-target="#carouselExampleCaptions"
                            data-bs-slide-to={2}
                            aria-label="Slide 3"
                        />
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://source.unsplash.com/300x100/?carpenter,painter" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>EasyFlow</h5>
                                <p>A Common platform for Workers and Employer.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/300x100/?factory,company" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>EasyFlow</h5>
                                <p>Register to avail opportunities.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://source.unsplash.com/300x100/?carpenter,worker" className="d-block w-100" alt="..." />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>EasyFlow</h5>
                                <p>Be Your Own Contractor,  Get Your Work Done Faster.</p>
                            </div>
                        </div>
                    </div>
                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleCaptions"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>


                <div className="container my-4">
                    <div className="row mb-2 ">
                        <div className="col-md-6">
                            <div className="container mx-1">
                                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                    <div className="col p-4 d-flex flex-column position-static">
                                        <strong className="d-inline-block mb-2 text-primary">Worker</strong>
                                        <h3 className="mb-0">Register</h3>
                                        <hr className="featurette-divider" />
                                        <p className="card-text mb-auto">
                                            Register and get opportunities to work in your desired location.
                                        </p>
                                        <a href="/worker" className="stretched-link" >
                                            Explore More
                                        </a>
                                    </div>
                                    <div className="col-auto d-none d-lg-block">
                                        <img class="bd-placeholder-img" width="250" height="250" src="https://source.unsplash.com/300x100/?carpenter,copmany" alt="..." />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="container mx-1">
                                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                    <div className="col p-4 d-flex flex-column position-static">
                                        <strong className="d-inline-block mb-2 text-primary">Worker</strong>
                                        <h3 className="mb-0">Explore</h3>
                                        <hr className="featurette-divider" />
                                        <p className="mb-auto">
                                            Register and find work in favourable domain and location.
                                        </p>
                                        <a href="/worker" className="stretched-link">
                                            Explore More
                                        </a>
                                    </div>
                                    <div className="col-auto d-none d-lg-block">
                                        <img class="bd-placeholder-img" width="250" height="250" src="https://source.unsplash.com/300x100/?painter,worker" alt="..." />{" "}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="container mx-1">
                                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                    <div className="col p-4 d-flex flex-column position-static">
                                        <strong className="d-inline-block mb-2 text-success">Company</strong>
                                        <h3 className="mb-0">Register</h3>
                                        <hr className="featurette-divider" />
                                        <p className="mb-auto">
                                            Register and get hire local workers from your work site.
                                        
                                        </p>
                                        <a href="/company" className="stretched-link">
                                            Explore More
                                        </a>
                                    </div>
                                    <div className="col-auto d-none d-lg-block">
                                        <img class="bd-placeholder-img" width="250" height="250" src="https://source.unsplash.com/300x100/?maison,worker" alt="..." />{" "}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="container mx-1">
                                <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                                    <div className="col p-4 d-flex flex-column position-static">
                                        <strong className="d-inline-block mb-2 text-success">Company</strong>
                                        <h3 className="mb-0">Explore</h3>
                                        <hr className="featurette-divider" />
                                        <p className="mb-auto">
                                            Register and find workers in favourable domain and location.
                                        </p>
                                        <a href="/company" className="stretched-link">
                                            Explore More
                                        </a>
                                    </div>
                                    <div className="col-auto d-none d-lg-block">
                                        <img class="bd-placeholder-img" width="250" height="250" src="https://source.unsplash.com/300x100/?plumber,poor" alt="..." />{" "}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Dashboard
