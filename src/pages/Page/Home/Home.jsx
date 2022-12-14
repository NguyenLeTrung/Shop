import React, { Component } from 'react';
import Header from "../../../components/Page/Header";
import Footer from "../../../components/Page/Footer";
import bg01 from "../../../assets/images/img_bg_1.jpg"
import bg02 from "../../../assets/images/img_bg_2.jpg"
import bg03 from "../../../assets/images/img_bg_3.jpg"
import men from "../../../assets/images/men.jpg"
import women from "../../../assets/images/women.jpg"

class Home extends Component {
	render() {
		return (
			<div id="page">
				<Header />
				<aside id="colorlib-hero">
					<div className="flexslider">
						<ul className="slides">
							<li style={{ backgroundImage: `url(${bg01})` }}>
								<div className="overlay"></div>
								<div className="container-fluid">
									<div className="row">
										<div className="col-sm-6 offset-sm-3 text-center slider-text">
											<div className="slider-text-inner">
												<div className="desc">
													<h1 className="head-1">Men's</h1>
													<h2 className="head-2">Shoes</h2>
													<h2 className="head-3">Collection</h2>
													<p className="category"><span>New trending shoes</span></p>
													<p><a href="#" className="btn btn-primary">Shop Collection</a></p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</li>
							{/* <li style={{backgroundImage: `url(${bg02})`}}>
							<div className="overlay"></div>
							<div className="container-fluid">
								<div className="row">
									<div className="col-sm-6 offset-sm-3 text-center slider-text">
										<div className="slider-text-inner">
											<div className="desc">
												<h1 className="head-1">Huge</h1>
												<h2 className="head-2">Sale</h2>
												<h2 className="head-3"><strong className="font-weight-bold">50%</strong> Off</h2>
												<p className="category"><span>Big sale sandals</span></p>
												<p><a href="#" className="btn btn-primary">Shop Collection</a></p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li>
						<li style={{backgroundImage: `url(${bg03})`}}>
							<div className="overlay"></div>
							<div className="container-fluid">
								<div className="row">
									<div className="col-sm-6 offset-sm-3 text-center slider-text">
										<div className="slider-text-inner">
											<div className="desc">
												<h1 className="head-1">New</h1>
												<h2 className="head-2">Arrival</h2>
												<h2 className="head-3">up to <strong className="font-weight-bold">30%</strong> off</h2>
												<p className="category"><span>New stylish shoes for men</span></p>
												<p><a href="#" className="btn btn-primary">Shop Collection</a></p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</li> */}
						</ul>
					</div>
				</aside>
				<div className="colorlib-intro">
					<div className="container">
						<div className="row">
							<div className="col-sm-12 text-center">
								<h2 className="intro">It started with a simple idea: Create quality, well-designed products that I wanted myself.</h2>
							</div>
						</div>
					</div>
				</div>
				<div className="colorlib-product">
					<div className="container-fluid">
						<div className="row">
							<div className="col-sm-6 text-center">
								<div className="featured">
									<a href="#" className="featured-img" style={{ backgroundImage: `url(${men})` }}></a>
									<div className="desc">
										<h2><a href="#">Shop Men's Collection</a></h2>
									</div>
								</div>
							</div>
							<div className="col-sm-6 text-center">
								<div className="featured">
									<a href="#" className="featured-img" style={{ backgroundImage: `url(${women})` }}></a>
									<div className="desc">
										<h2><a href="#">Shop Women's Collection</a></h2>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="colorlib-product">
					<div className="container">
						<div className="row">
							<div className="col-sm-8 offset-sm-2 text-center colorlib-heading">
								<h2>S???n ph???m b??n ch???y</h2>
							</div>
						</div>
						<div className="row row-pb-md">
							<div className="col-lg-3 mb-4 text-center">
								<div className="product-entry border">
									<a href="#" className="prod-img">
										<img src="../assets/images/item-1.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
									</a>
									<div className="desc">
										<h2><a href="#">Women's Boots Shoes Maca</a></h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="col-lg-3 mb-4 text-center">
								<div className="product-entry border">
									<a href="#" className="prod-img">
										<img src="../assets/images/item-2.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
									</a>
									<div className="desc">
										<h2><a href="#">Women's Minam Meaghan</a></h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="col-lg-3 mb-4 text-center">
								<div className="product-entry border">
									<a href="#" className="prod-img">
										<img src="../assets/images/item-3.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
									</a>
									<div className="desc">
										<h2><a href="#">Men's Taja Commissioner</a></h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="col-lg-3 mb-4 text-center">
								<div className="product-entry border">
									<a href="#" className="prod-img">
										<img src="../assets/images/item-4.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
									</a>
									<div className="desc">
										<h2><a href="#">Russ Men's Sneakers</a></h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="w-100"></div>
							<div className="col-lg-3 mb-4 text-center">
								<div className="product-entry border">
									<a href="#" className="prod-img">
										<img src="../assets/images/item-5.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
									</a>
									<div className="desc">
										<h2><a href="#">Women's Boots Shoes Maca</a></h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="col-lg-3 mb-4 text-center">
								<div className="product-entry border">
									<a href="#" className="prod-img">
										<img src="../assets/images/item-6.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
									</a>
									<div className="desc">
										<h2><a href="#">Women's Boots Shoes Maca</a></h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="col-lg-3 mb-4 text-center">
								<div className="product-entry border">
									<a href="#" className="prod-img">
										<img src="../assets/images/item-7.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
									</a>
									<div className="desc">
										<h2><a href="#">Women's Boots Shoes Maca</a></h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="col-lg-3 mb-4 text-center">
								<div className="product-entry border">
									<a href="#" className="prod-img">
										<img src="../assets/images/item-8.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
									</a>
									<div className="desc">
										<h2><a href="#">Women's Boots Shoes Maca</a></h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="w-100"></div>
							<div className="col-lg-3 mb-4 text-center">
								<div className="product-entry border">
									<a href="#" className="prod-img">
										<img src="../assets/images/item-9.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
									</a>
									<div className="desc">
										<h2><a href="#">Women's Boots Shoes Maca</a></h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="col-lg-3 mb-4 text-center">
								<div className="product-entry border">
									<a href="#" className="prod-img">
										<img src="../assets/images/item-10.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
									</a>
									<div className="desc">
										<h2><a href="#">Women's Boots Shoes Maca</a></h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="col-lg-3 mb-4 text-center">
								<div className="product-entry border">
									<a href="#" className="prod-img">
										<img src="../assets/images/item-11.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
									</a>
									<div className="desc">
										<h2><a href="#">Women's Boots Shoes Maca</a></h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="col-lg-3 mb-4 text-center">
								<div className="product-entry border">
									<a href="#" className="prod-img">
										<img src="../assets/images/item-12.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
									</a>
									<div className="desc">
										<h2><a href="#">Women's Boots Shoes Maca</a></h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="w-100"></div>
							<div className="col-lg-3 mb-4 text-center">
								<div className="product-entry border">
									<a href="#" className="prod-img">
										<img src="../assets/images/item-13.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
									</a>
									<div className="desc">
										<h2><a href="#">Women's Boots Shoes Maca</a></h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="col-lg-3 mb-4 text-center">
								<div className="product-entry border">
									<a href="#" className="prod-img">
										<img src="../assets/images/item-14.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
									</a>
									<div className="desc">
										<h2><a href="#">Women's Boots Shoes Maca</a></h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="col-lg-3 mb-4 text-center">
								<div className="product-entry border">
									<a href="#" className="prod-img">
										<img src="../assets/images/item-15.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
									</a>
									<div className="desc">
										<h2><a href="#">Women's Boots Shoes Maca</a></h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
							<div className="col-lg-3 mb-4 text-center">
								<div className="product-entry border">
									<a href="#" className="prod-img">
										<img src="../assets/images/item-16.jpg" className="img-fluid" alt="Free html5 bootstrap 4 template" />
									</a>
									<div className="desc">
										<h2><a href="#">Women's Boots Shoes Maca</a></h2>
										<span className="price">$139.00</span>
									</div>
								</div>
							</div>
						</div>
						<div className="row">
							<div className="col-md-12 text-center">
								<p><a href="/shop" className="btn btn-primary btn-lg">T???t c??? s???n ph???m</a></p>
							</div>
						</div>
					</div>
				</div>

				<div className="colorlib-partner">
					<div className="container">
						<div className="row">
							<div className="col-sm-8 offset-sm-2 text-center colorlib-heading colorlib-heading-sm">
								<h2>C??c nh??n h??ng</h2>
							</div>
						</div>
						<div className="row">
							<div className="col partner-col text-center">
								<img src="../assets/images/brand-1.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template" />
							</div>
							<div className="col partner-col text-center">
								<img src="../assets/images/brand-2.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template" />
							</div>
							<div className="col partner-col text-center">
								<img src="../assets/images/brand-3.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template" />
							</div>
							<div className="col partner-col text-center">
								<img src="../assets/images/converse.png" className="img-fluid" alt="Free html4 bootstrap 4 template" />
							</div>
							<div className="col partner-col text-center">
								<img src="../assets/images/brand-5.jpg" className="img-fluid" alt="Free html4 bootstrap 4 template" />
							</div>
						</div>
					</div>
				</div>
				<Footer />
			</div>
		);
	}
}

export default Home;