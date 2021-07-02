import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home() {
  return (
    <div className="Home">
    <body data-aos-easing="slide" data-aos-duration="800" data-aos-delay="0">


	<div id="colorlib-page">
		
                  
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
											href="https://www.instagram.com/cristinamonper/"><img
												src="./images/instagram.png" alt="Instagram" /></a></li>
									<li class="ftco-animate fadeInUp ftco-animated"><a
											href="https://www.linkedin.com/in/cristina-monper/"><img
												src="./images/linkedin.png" alt="Linkedin" /></a></li>
								</ul>
								

								<div class="info bg-light p-4">
									<p><span>Email: </span><br /><a
							href="mailto:cristinamontagutperianez@gmail.com">cristinamontagutperianez@gmail.com</a>
									</p>
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
			
		</div>

	</div> 


	


</body>
    </div>
  );
}

export default Home;
