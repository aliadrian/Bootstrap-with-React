import React, { Component } from 'react';
import { Nav, Button, Form, NavDropdown } from "react-bootstrap";
import logo from '../images/logo.png';
import { Link, withRouter } from 'react-router-dom';

export class Navbar extends Component {
  render() {
    return (
      <div>
        <Nav className="navbar navbar-expand-lg nav-1">
          <div className="container">
            <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </Button>
            <div className="collapse navbar-collapse" id="navbarsExample07">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <NavDropdown title="ENG" id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                  </NavDropdown>
                </li>
                <li className="nav-item">
                  <NavDropdown title="USD" id="nav-dropdown">
                    <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
                  </NavDropdown>
                </li>
              </ul>
              <Form className="form-inline my-2 my-md-0">
                <Nav.Item>
                  <Nav.Link className="text-white" eventKey="link-1">Newsletter</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="text-white" eventKey="link-2">Contact us</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="text-white" eventKey="link-3">FAQs</Nav.Link>
                </Nav.Item>
              </Form>
            </div>
          </div>
          </Nav>

          <Nav className="navbar navbar-expand-lg navbar-light" style={{color: "#fffff"}}>
          <div className="container">
            <Link to="/" className="navbar-brand" href="/#">KEN</Link><img id="logo" alt="logo" src={logo}/><Link to="/" className="navbar-brand" href="/#">KATA</Link>
            <div className="input-group">
              <input type="text" placeholder="Search products..." className="form-control ml-5 search-products" aria-label="Text input with dropdown button" />
              <div className="input-group-append">
                <Button className="btn btn-outline-secondary btn-light dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</Button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/#">Action</a>
                </div>
              </div>
            </div>
            <Button className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </Button>
            <div className="collapse navbar-collapse" id="navbarsExample07">
              <ul className="navbar-nav mx-auto nav-2">
                <li className="nav-item active">
                <i className="far fa-user fa-large pt-xl-3 ml-xl-3 pt-md-4 ml-md-3 mr-md-1"></i>
                </li>
                <li className="nav-item active col-xl-10 my-account pt-xl-1">
                  <Link to="/account" className="nav-link my-account-text" href="/#">My account</Link>
                </li>
                <li className="nav-item active">
                <i className="far fa-heart fa-large py-xl-3 py-md-4 mr-xl-2 mr-md-2"></i>
                </li>
                <li className="nav-item active col-xl-10 my-account pt-xl-1 info-text">
                  <a className="nav-link" href="/#">My likes</a>
                </li>
                <li className="nav-item active">
                <i className="fas fa-rss fa-large py-xl-3 py-md-4 mr-xl-2 mr-md-2"></i>
                </li>
                <li className="nav-item active col-xl-10 my-account pt-xl-1 info-text">
                  <a className="nav-link" href="/#">My something</a>
                </li>
                <li className="nav-item active">
                <i className="fas fa-shopping-bag fa-large py-xl-3 py-md-4 mr-xl-2 mr-md-2"></i>
                </li>
                <li className="nav-item active col-xl-10 my-account pt-xl-1 info-text">
                  <a className="nav-link" href="/#">My shopping</a>
                </li>
                <li className="nav-item active from-nav-3">
                  <Link to="/home" className="nav-link hvr-underline-from-center" href="/#">Home</Link>
                </li>
                
                <li className="nav-item dropdown active from-nav-3">
                  <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</a>
                  <div className="dropdown-menu" aria-labelledby="dropdown07">
                    <a className="dropdown-item" href="/#">Action</a>
                  </div>
                </li>
                
                <li className="nav-item dropdown active from-nav-3">
                  <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Products</a>
                  <div className="dropdown-menu" aria-labelledby="dropdown07">
                    <a className="dropdown-item" href="/#">Action</a>
                  </div>
                </li>
                
                <li className="nav-item dropdown active from-nav-3">
                  <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</a>
                  <div className="dropdown-menu" aria-labelledby="dropdown07">
                    <a className="dropdown-item" href="/#">Action</a>
                  </div>
                </li>
                
                <li className="nav-item dropdown active from-nav-3">
                  <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                  <div className="dropdown-menu" aria-labelledby="dropdown07">
                    <a className="dropdown-item" href="/#">Action</a>
                  </div>
                </li>

                <li className="nav-item active from-nav-3">
                  <a className="nav-link" href="/#">Blog</a>
                </li>
              </ul>
            </div>
          </div>
        </Nav>


        <Nav className="navbar navbar-expand-md navbar-light nav-3">
          <div className="container">
          <div className="input-group" style={{width: 0}}>
            <div className="input-group-prepend">
              <button className="btn btn-outline-light dropdown-toggle browse-categories" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="fas fa-grip-lines fa-large mr-2 py-2"></i> <span className="text-white">Browse Categories</span></button>
                <div className="dropdown-menu">
                  <a className="dropdown-item" href="/#">Action</a>
                  <a className="dropdown-item" href="/#">Another action</a>
                  <a className="dropdown-item" href="/#">Something else here</a>
                  <div role="separator" className="dropdown-divider"></div>
                  <a className="dropdown-item" href="/#">Separated link</a>
                </div>
              </div>
            </div>
            <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample07" aria-controls="navbarsExample07" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </Button>

            <div className="collapse navbar-collapse" id="navbarsExample07">
              <ul className="navbar-nav mx-auto pl-xl-5 col-lg-5 col-xl-7">
                <li className="nav-item active">
                  <Link to="/home" className="nav-link hvr-underline-from-center" href="/#">Home</Link>
                </li>
                
                <li className="nav-item dropdown active">
                  <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Shop</a>
                  <div className="dropdown-menu" aria-labelledby="dropdown07">
                    <a className="dropdown-item" href="/#">Action</a>
                  </div>
                </li>
                
                <li className="nav-item dropdown active">
                  <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Products</a>
                  <div className="dropdown-menu" aria-labelledby="dropdown07">
                    <a className="dropdown-item" href="/#">Action</a>
                  </div>
                </li>
                
                <li className="nav-item dropdown active">
                  <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</a>
                  <div className="dropdown-menu" aria-labelledby="dropdown07">
                    <a className="dropdown-item" href="/#">Action</a>
                  </div>
                </li>
                
                <li className="nav-item dropdown active">
                  <a className="nav-link dropdown-toggle" href="http://example.com" id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                  <div className="dropdown-menu" aria-labelledby="dropdown07">
                    <a className="dropdown-item" href="/#">Action</a>
                  </div>
                </li>

                <li className="nav-item active">
                  <a className="nav-link" href="/#">Blog</a>
                </li>

              </ul>

              <Form className="form-inline my-2 my-md-0">
                <button type="button" className="btn special-offer" data-toggle="button" aria-pressed="false">
                  SPECIAL OFFER
                </button>
              </Form>
            </div>
          </div>
        </Nav>
      </div>
    )
  }
}

export default withRouter(Navbar)