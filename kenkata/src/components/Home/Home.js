import React, { Component } from 'react';
import Carousel, { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import './Home.css';
import banner from '../../images/banner.png';
import stripe from '../../images/stripe.png';
import img1 from '../../images/image-1.png';
import img2 from '../../images/image-2.png';
import img3 from '../../images/image-3.png';
import img4 from '../../images/image-4.png';
import img5 from '../../images/image-5.png';
import img6 from '../../images/image-6.png';
import img7 from '../../images/image-7.png';
import product from '../../images/product-man.png';
import product2 from '../../images/product-woman.png';
import product3 from '../../images/product-man2.png';
import rect from '../../images/rect.png';

export default class Home extends Component {

  render() {

    return (
      
        <div className="row">
          <div className="col-sm-6 this-one">
            <div className="card">
              <div className="card-body-1 mt-xl-5 pt-xl-5">
              <h1 className="card-title-1">Shopping is</h1>
              <h1 className="card-title-2">more fun</h1>
              <p className="card-text w-75 mx-auto">Vivamus dignissim a ex eu ornare. Ut fermentum orci vel diam ultricies faucibus. Quisque quis erat sed</p>
              <a href="/#" className="btn btn-light float-xl-left shopnow">Shopnow</a>
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="card-body">
                <img id="banner" src={banner} alt=""/>
              </div>
            </div>
          </div>

          <div className="flex-container mt-5">
          <div>
            <i className="fas fa-box-open fa-2x float-left mt-5 ml-4 mr-3 mb-sm-4 mb-4"></i>
            <p className="text-left mx-auto mt-2 title-box-1">Free shipping</p>
            <p className="text-left mx-auto">For a local customer, we provide free shipping facility</p>
          </div>
          <div id="special-one">
            <i className="far fa-clock fa-2x float-left mt-5 ml-4 mr-3 mb-sm-4 mb-4"></i>
            <p className="text-left mx-auto mt-2 title-box-2">24/7 support</p>
            <p className="text-left mx-auto title-2-box-2">For any inquiry, we are available 24 hours every day</p>
          </div>
          <div>
            <i className="fas fa-file-invoice fa-2x float-left mt-5 ml-4 mr-3 mb-sm-4 mb-4"></i>
            <p className="text-left mx-auto mt-2 title-box-1">Online payment</p>
            <p className="text-left mx-auto">You can pay quickly and easily with our online payment system</p>
          </div>  
          <div>
            <i className="fas fa-shipping-fast fa-2x float-left mt-5 ml-4 mr-3 mb-sm-4 mb-4"></i>
            <p className="text-left mx-auto mt-2 title-box-1">Fast delivery</p>
            <p className="text-left mx-auto">We understand your urgency and we deliver in a fast way</p>
          </div>
        </div>

        <div className="center mt-5">
          <h1 className="stripe-title mt-5">Shop By <span className="card-title-2">category</span></h1>
          <img className="stripe" src={stripe} alt=""/>
          <p className="stripe-small-text mt-3">We always try to give you the best product within a fast and reliable way</p>
        </div>

        <div className="container-3">
          <div className="grid">
            <div className="cell img-wrapper">
              <img src={img1} className="responsive-image img-responsive" alt=""/>
              <div className="img-overlay">
                <button type="button" className="btn btn-success" style={{padding: '7.5px 50px', borderRadius: '0px 10px 0px 10px'}}><h6 className="men">Men</h6></button>
              </div>
            </div>
            <div className="cell img-wrapper">
              <img src={img2} className="responsive-image img-responsive" alt=""/>
              <div className="img-overlay">
                <button className="btn btn-md btn-success" style={{padding: '7.5px 70px', borderRadius: '0px 10px 0px 10px'}}><h6 className="men">Women</h6></button>
              </div>
            </div>
            <div className="cell img-wrapper">
              <img src={img3} className="responsive-image img-responsive" alt=""/>
              <div className="img-overlay">
                <button className="btn btn-md btn-success" style={{padding: '7.5px 90px', borderRadius: '0px 10px 0px 10px'}}><h6 className="kids">Kids</h6></button>
              </div>
            </div>
            <div className="cell img-wrapper">
              <img src={img4}className="responsive-image img-responsive" alt=""/>
              <div className="img-overlay">
                <button className="btn btn-md btn-success" style={{padding: '7.5px 90px', borderRadius: '0px 10px 0px 10px'}}><h6 id="shoes">Shoes</h6></button>
              </div>
            </div>
            <div className="cell img-wrapper">
              <img src={img5}className="responsive-image img-responsive" alt=""/>
              <div className="img-overlay">
                <button className="btn btn-md btn-success" style={{padding: '7.5px 50px', borderRadius: '0px 10px 0px 10px'}}><h6 className="men">Hats</h6></button>
              </div>
            </div>
            <div className="cell img-wrapper">
              <img src={img6}className="responsive-image img-responsive" alt=""/>
              <div className="img-overlay">
                <button className="btn btn-md btn-success pt-3" style={{padding: '7.5px 90px', borderRadius: '0px 10px 0px 10px'}}><h6 className="men">Sunglasses</h6> <p className="men">18 products</p></button>
              </div>
            </div>
            <div className="cell img-wrapper">
              <img src={img7}className="responsive-image img-responsive" alt=""/>
              <div className="img-overlay">
                <button className="btn btn-md btn-success" style={{padding: '7.5px 25px', borderRadius: '0px 10px 0px 10px'}}> <h6 id="watches">Watches</h6> </button>
              </div>
            </div>
          </div>
        </div> 

        <div className="center mt-5">
          <h1 className="stripe-title mt-5">New <span className="card-title-2">arrivals</span></h1>
          <img className="stripe" src={stripe} alt=""/>
          <p className="stripe-small-text mt-3">Check out our latest products from top fashion designers</p>
        </div>

{/* 
        <div class="row row-cols-1 row-cols-md-3 mx-auto">
  <div class="col mb-4">
    <div class="card">
      <img src={product} class="card-img-top" alt="..." />
      <div class="card-body-product" style={{border: '1px solid black'}}>
        <p class="card-title mt-3 mb-3">Blue silk flare sleeved top</p>
      </div>
    </div>
  </div>
  <div class="col mb-4 card-3">
    <div class="card pb-2">
      <img src={product3} class="card-img-top-1" alt="..." />
      <img src={rect} class="card-img-top-2" alt="..." />
      <div class="card-body-3">
        
      </div>
    </div>
  </div>
  <div class="col mb-4">
    <div class="card">
      <img src={product2} class="card-img-top" alt="..." />
      <div class="card-body-product">
        <p class="card-title mt-3 mb-3">Circle pattern girls shirt</p>
      </div>
    </div>
  </div> */}
  
  {/* <div class="container">
  <div class="row">
    <div id="carousel" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carousel" data-slide-to="0" class="active"></li>
        <li data-target="#carousel" data-slide-to="1"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <div class="d-none d-lg-block">
            <div class="slide-box">
              <img src={product} alt="First slide" />
              <img src={product3} alt="First slide" />
              <img src={product2} alt="First slide" />
              
            </div>
          </div>
          <div class="d-none d-md-block d-lg-none">
            <div class="slide-box">
              <img src={product} alt="First slide" />
              <img src={product3} alt="First slide" />
              <img src={product2} alt="First slide" />
            </div>
          </div>
          <div class="d-none d-sm-block d-md-none">
            <div class="slide-box">
            
              <img src={product} alt="First slide" />
              <img src={product2} alt="First slide" />
            </div>
          </div>
          <div class="d-block d-sm-none">
          <img src={product} alt="First slide" />
          </div>
        </div>
        <div class="carousel-item">
          <div class="d-none d-lg-block">
            <div class="slide-box">
            <img src={product} alt="First slide" />
            
              <img src={product3} alt="First slide" />
              
              <img src={product2} alt="First slide" />
              
            </div>
          </div>
          <div class="d-none d-md-block d-lg-none">
            <div class="slide-box">
              <img src={product} alt="First slide" />
              <img src={product3} alt="First slide" />
              <img src={product2} alt="First slide" />
            </div>
          </div>
          <div class="d-none d-sm-block d-md-none">
            <div class="slide-box">
            
              <img src={product3} alt="First slide" />
              <img src={product} alt="First slide" />
            </div>
          </div>
          <div class="d-block d-sm-none">
          
              <img src={product2} alt="First slide" />
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  </div> */}

    <Carousel
      plugins={[
        'arrows',
        {
          resolve: slidesToShowPlugin,
          options: {
          numberOfSlides: 3
          }
        },
      ]}
      breakpoints={{
        640: {
          plugins: [
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 1
            }
          },
        ]
        },
        900: {
          plugins: [
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 2
            }
          },
        ]
        }
      }}
    >

      <div className="card">
        <img src={product} className="card-img-top" alt="..." />
        <div className="card-body-product" style={{border: '1px solid black'}}>
          <p className="card-title mt-3 mb-3">Blue silk flare sleeved top</p>
        </div>
      </div>
    
      <div className="card">
        <img src={product3} className="card-img-top-1" alt="..." />
        <img src={rect} className="card-img-top-2" alt="..." />
        <div className="card-body-3">
          <p className="card-title new-look">New look men's coat</p>
          <span className="card-text-4">Fashion</span>
          <p className="card-text-5">$220.00</p>
          <p className="card-text-6">$190.00</p>
        </div>
      </div>

      <div className="card">
        <img src={product2} className="card-img-top" alt="..." />
        <div className="card-body-product" style={{border: '1px solid black'}}>
          <p className="card-title mt-3 mb-3">Circle pattern girls shirt</p>
        </div>
      </div>
  </Carousel>


{/* 
        <div className="row rea-card mr-xl-auto">
          <div className="card text-white bg-info mb-3 ml-xl-5 pl-2 pr-2" style={{maxWidth: '18rem', height: '400px'}}>
            <div className="card-body">
              <h1 className="card-title rea mt-5 pt-5">30% <span className="off">off</span></h1>
              <p className="card-text">FOR NEW CUSTOMER</p>
              <a href="/#" className="btn btn-light shop-now-2">Shop Now</a>
            </div>
        </div>
        </div>
        <div className="col-sm-10 float-right col-xl-6 offset-xl-6 donec">
          <div className="card float-right">
            <div className="card-body ">
              <p className="text-left donec">Donec pulvinar arcu vitae ipsum varius cursus. Nunc iaculis fermentum iaculis. Nunc pulvinar purus at erat lacinia, ut convallis nibh consequat. Integer nulla nisi, aliquam at tellus a, viverra scelerisque purus. Nam pretium iaculis ultrices.</p>
              <a href="/#" className="btn btn-light float-xl-left ml-auto shopnow">Learn more</a>
            </div>
          </div>
        </div> */}

        <div class="row">
          <div class="col-sm-6">
            <div class="card" style={{maxWidth: '16rem', height: '400px', border: '1px solid red'}}>
              <div class="card-body" >
                <h1 className="card-title rea mt-5 pt-5">30% <span className="off">off</span></h1>
                <p className="card-text">FOR NEW CUSTOMER</p>
                <a href="/#" className="btn btn-light shop-now-2">Shop Now</a>
              </div>
            </div>
          </div>
          <div class="col-sm-6" style={{border: '1px solid black'}}>
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Special title treatment</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
}
