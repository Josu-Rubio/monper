import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className='body'>
      <a href='/' class='js-colorlib-nav-toggle colorlib-nav-toggle'>
        <i></i>
      </a>
      <aside
        id='colorlib-aside'
        role='complementary'
        class='js-fullheight text-center'
        style={{ height: '100%' }}
      >
        <h1 id='colorlib-logo'>
          <a href='/'>
            <span
              class='img'
              style={{ backgroundImage: `url(images/header@main.jpg)` }}
            ></span>
            Cristina Monper
          </a>
        </h1>
        <nav id='colorlib-main-menu' role='navigation'>
          <ul>
            <li class='colorlib-active'>
              <a href='/'>Inicio</a>
            </li>
            <li>
              <a href='galeria.html'>Galería</a>
            </li>
            <li>
              <a href='videos.html'>Vídeos</a>
            </li>
            <li>
              <a href='trayectoria.html'>Mi trayectoria</a>
            </li>
            <li>
              <a href='#footer'>Contacto</a>
            </li>
          </ul>
        </nav>
      </aside>
      <div id='colorlib-main'>
        <div className='Home'>
          <div id='colorlib-page'>
            <section class='ftco-section-no-padding bg-light'>
              <div class='hero-wrap'>
                <div class='overlay'></div>
                <div
                  class='d-flex align-items-center js-fullheight'
                  style={{ height: '568px' }}
                >
                  <div class='author-image text img d-flex'>
                    <div style={{ width: '526.109px' }}>
                      <div class='main-img'></div>
                    </div>
                  </div>
                  <div class='author-info text p-3 p-md-5'>
                    <div class='desc'>
                      <br />
                      <span class='subheading'>Hola, soy</span>
                      <h1 class='big-letter'>Cristina Monper</h1>
                      <h1 class='mb-4'>
                        <span>Cristina Monper</span>
                        <br /> Actriz.
                        <br /> <span>Bienvenidos a mi web</span>
                      </h1>

                      <ul class='ftco-social mt-3'>
                        <li class='ftco-animate fadeInUp ftco-animated'>
                          <a href='https://www.instagram.com/cristinamonper/'>
                            <img src='./images/instagram.png' alt='Instagram' />
                          </a>
                        </li>
                        <li class='ftco-animate fadeInUp ftco-animated'>
                          <a href='https://www.linkedin.com/in/cristina-monper/'>
                            <img src='./images/linkedin.png' alt='Linkedin' />
                          </a>
                        </li>
                        <li class='ftco-animate fadeInUp ftco-animated'>
                          <a href='mailto:cristinamontagutperianez@gmail.com'>
                            <img src='./images/email.png' alt='email' />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section class='gif'>
              <div
                style={{
                  height: '600px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  style={{ borderRadius: '50%' }}
                  src='./images/gif2.gif'
                  alt='Cristina Monper'
                />
              </div>
            </section>
          </div>
        </div>

        <footer id='footer' class='ftco-footer ftco-bg-dark ftco-section'>
          <div class='container px-md-5'>
            <div class='row mb-5'>
              <div class='col-md'>
                <div class='ftco-footer-widget mb-4 ml-md-4'>
                  <h2 class='ftco-heading-2'>Fotos</h2>
                  <ul class='list-unstyled photo'>
                    <li>
                      <a
                        href='galeria.html'
                        class='img'
                        style={{
                          backgroundImage: 'url(images/Crismonper04.jpg)',
                        }}
                      ></a>
                    </li>
                    <li>
                      <a
                        href='http://www.cristinamonper.es/#'
                        class='img'
                        style={{
                          backgroundImage: 'url(images/Crismonper06.jpg)',
                        }}
                      ></a>
                    </li>
                    <li>
                      <a
                        href='http://www.cristinamonper.es/#'
                        class='img'
                        style={{
                          backgroundImage: 'url(images/Crismonper12.jpg)',
                        }}
                      ></a>
                    </li>
                    <li>
                      <a
                        href='http://www.cristinamonper.es/#'
                        class='img'
                        style={{
                          backgroundImage: 'url(images/Crismonper16.jpg)',
                        }}
                      ></a>
                    </li>
                    <li>
                      <a
                        href='http://www.cristinamonper.es/#'
                        class='img'
                        style={{
                          backgroundImage: 'url(images/Crismonper20.jpg)',
                        }}
                      ></a>
                    </li>
                    <li>
                      <a
                        href='http://www.cristinamonper.es/#'
                        class='img'
                        style={{
                          backgroundImage: 'url(images/Crismonper40.jpg)',
                        }}
                      ></a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class='col-md'>
                <div class='ftco-footer-widget mb-4'>
                  <h2 class='ftco-heading-2'>Menú</h2>
                  <ul class='list-unstyled categories'>
                    <li>
                      <a href='http://www.cristinamonper.es/galeria.html'>
                        Galería
                      </a>
                    </li>
                    <li>
                      <a href='http://www.cristinamonper.es/videos.html'>
                        Vídeos
                      </a>
                    </li>
                    <li>
                      <a href='http://www.cristinamonper.es/trayectoria.html'>
                        Mi trayectoria
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class='col-md'>
                <div class='ftco-footer-widget mb-4'>
                  <h2 class='ftco-heading-2'>Contacto</h2>
                  <div class='block-23 mb-3'>
                    <ul>
                      <li class='ftco-animate fadeInUp ftco-animated'>
                        <a
                          href='https://www.instagram.com/cristinamonper/'
                          style={{ float: 'left', margin: '5px' }}
                        >
                          <img
                            src='./images/instagram.png'
                            alt='Instagram'
                          ></img>
                        </a>
                        <a
                          href='https://www.linkedin.com/in/cristina-monper/'
                          style={{ float: 'left', margin: '5px' }}
                        >
                          <img src='./images/linkedin.png' alt='Linkedin'></img>
                        </a>
                      </li>
                      <li>
                        <a href='mailto:cristinamontagutperianez@gmail.com'>
                          <span class='text'>
                            cristinamontagutperianez@gmail.com
                          </span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div class='row'>
              <div class='col-md-12'>
                <p style={{ textAlign: 'center' }}>
                  Copyright © 2021 Todos los derechos reservados
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
      <div id='ftco-loader' class='fullscreen'>
        <svg class='circular' width='48px' height='48px'>
          <circle
            class='path-bg'
            cx='24'
            cy='24'
            r='22'
            fill='none'
            stroke-width='4'
            stroke='#eeeeee'
          ></circle>
          <circle
            class='path'
            cx='24'
            cy='24'
            r='22'
            fill='none'
            stroke-width='4'
            stroke-miterlimit='10'
            stroke='#F96D00'
          ></circle>
        </svg>
      </div>
    </div>
  );
}

export default Home;
