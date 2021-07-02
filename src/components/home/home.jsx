import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
<body data-aos-easing="slide" data-aos-duration="800" data-aos-delay="0">


	<div id="colorlib-page">
		<a href="index.html" class="js-colorlib-nav-toggle colorlib-nav-toggle"></a>
                  <aside id="colorlib-aside" role="complementary" class="js-fullheight text-center" style={{ height: '568px' }}>
			<h1 id="colorlib-logo"><a href="/"><img src="images/header@main.jpg" alt="cristinamonper" />Cristina Monper</a>
			</h1>
			<nav id="colorlib-main-menu" role="navigation"> 
				<ul>
					<li class="colorlib-active"><a href="index.html">Inicio</a></li>
					<li><a href="galeria.html">Galería</a></li>
					{/* <li><a href="videos.html">Vídeos</a></li>  */}
					<li><a href="trayectoria.html">Mi trayectoria</a></li>
					<li><a href="#footer">Contacto</a></li>
				</ul>
			</nav>


		</aside> 
		<div id="colorlib-main">
			<section class="ftco-section-no-padding bg-light">
				<div class="hero-wrap">
					<div class="overlay"></div>
                              <div class="d-flex align-items-center js-fullheight" style={{ height: '568px'}}>
						<div class="author-image text img d-flex">

                                      <div style={{ width: '526.109px' }}>
								<div class="main-img">
								</div>
							</div>

						</div>
						<div class="author-info text p-3 p-md-5">
							<div class="desc">
								<br />
								<span class="subheading">Hola, soy</span>
								<h1 class="big-letter">Cristina Monper</h1>
								<h1 class="mb-4"><span>Cristina Monper</span><br /> Actriz.<br /> <span>Bienvenidos a mi web</span></h1>


								<ul class="ftco-social mt-3">
									<li class="ftco-animate fadeInUp ftco-animated"><a
											href="https://www.facebook.com/kris.montagutperianez"><img
												src="./icon/32px/402-facebook2.png" alt="Facebook" /></a></li>
									<li class="ftco-animate fadeInUp ftco-animated"><a
											href="https://www.instagram.com/cristinamonper/"><img
												src="./icon/32px/403-instagram.png" alt="Instagram" /></a></li>
									<li class="ftco-animate fadeInUp ftco-animated"><a
											href="https://www.linkedin.com/in/cristina-monper/"><img
												src="./icon/32px/458-linkedin.png" alt="Linkedinn" /></a></li>
								</ul>
								<div class="col-md-12 mb-4">

									<div class="info bg-light p-4">
										<p><span>Email: </span><a
												href="mailto:cristinamontagutperianez@gmail.com">cristinamontagutperianez@gmail.com</a>
										</p>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section class="gif">
				<div style={{height: '600px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>

					<img style={{borderRadius: '50%'}} src="./images/gif2.gif" alt="Cristina Monper" />


				</div>
			</section>
			<footer id="footer" class="ftco-footer ftco-bg-dark ftco-section">
				<div class="container px-md-5">
					<div class="row mb-5">
						<div class="col-md">
							<div class="ftco-footer-widget mb-4 ml-md-4">
								<h2 class="ftco-heading-2">Fotos</h2>
								<ul class="list-unstyled photo">
                                    <li><a href="galeria.html" class="img"><img src="./images/Crismonper04.jpg" alt="" /></a></li>
                                    <li><a href="galeria.html" class="img"><img src="./images/Crismonper06.jpg" alt="" /></a></li>
                                    <li><a href="galeria.html" class="img"><img src="./images/Crismonper12.jpg" alt="" /></a></li>
                                    <li><a href="galeria.html" class="img"><img src="./images/Crismonper16.jpg" alt="" /></a></li>
                                    <li><a href="galeria.html" class="img"><img src="./images/Crismonper20.jpg" alt="" /></a></li>
                                    <li><a href="galeria.html" class="img"><img src="./images/Crismonper40.jpg" alt="" /></a></li>
								</ul>
							</div>
						</div>
						<div class="col-md">
							<div class="ftco-footer-widget mb-4">
								<h2 class="ftco-heading-2">Menú</h2>
								<ul class="list-unstyled categories">

									<li><a href="galeria.html">Galería</a></li>
									{/* <li><a href="http://www.cristinamonper.es/videos.html">Vídeos</a></li> */}
									<li><a href="http://www.cristinamonper.es/trayectoria.html">Mi trayectoria</a></li>

								</ul>
							</div>
						</div>
						<div class="col-md">
							<div class="ftco-footer-widget mb-4">
								<h2 class="ftco-heading-2">Contacto</h2>
								<div class="block-23 mb-3">
									<ul>

										<li class="ftco-animate fadeInUp ftco-animated">
                                                      <a href="https://www.facebook.com/kris.montagutperianez"
                                                          style={{ float: 'left', margin: '5px' }}><img src="./icon/32px/402-facebook2.png"
													alt="Facebook" /></a>
											<a href="https://www.instagram.com/cristinamonper/"
												style={{float:'left', margin: '5px'}}><img src="./icon/32px/403-instagram.png"
													alt="Instagram" /></a>
                                                      <a href="https://www.linkedin.com/in/cristina-monper/"
                                                          style={{ float: 'left', margin: '5px' }}><img src="./icon/32px/458-linkedin.png"
													alt="Linkedinn" /></a>
										</li>
										<li><a href="mailto:cristinamontagutperianez@gmail.com"><span
													class="text">cristinamontagutperianez@gmail.com</span></a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
					<div class="row">
						<div class="col-md-12">

							<p style={{textAlign:'center'}}>
								Copyright © 2021 Todos los derechos reservados
							</p>
						</div>
					</div>
				</div>
			</footer>
		</div>

	</div> 


	<div id="ftco-loader" class="fullscreen"><svg class="circular" width="48px" height="48px">
			<circle class="path-bg" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke="#eeeeee"></circle>
			<circle class="path" cx="24" cy="24" r="22" fill="none" stroke-width="4" stroke-miterlimit="10"
				stroke="#F96D00"></circle>
		</svg></div>


	<script src="./js/jquery.min.js"></script>
	<script src="./js/jquery-migrate-3.0.1.min.js"></script>
	<script src="./js/popper.min.js"></script>
	<script src="./js/bootstrap.min.js"></script>
	<script src="./js/jquery.easing.1.3.js"></script>
	<script src="./js/jquery.waypoints.min.js"></script>
	<script src="./js/jquery.stellar.min.js"></script>
	<script src="./js/jquery.magnific-popup.min.js"></script>
	<script src="./js/aos.js"></script>
	<script src="./js/jquery.animateNumber.min.js"></script>

	<script src="./js/scrollax.min.js"></script>
	<script src="./js/js.js"></script>

	<script src="./js/main.js"></script>


</body>
    </div>
  );
}

export default Home;
