import React from 'react'
import { Link } from 'react-router-dom';

import LogoHTML from '../assets/logo_html.png';
import LogoCSS from '../assets/logo_css.png';
import LogoBrush from '../assets/logo_brush.png';

import '../components/Home.css';


const Home = () => {
    return (
        <body>
            <header>
                <div className="container">
                    <div id="branding">
                        <h1><span className="highlight">Acme
                            </span> Web Design V2</h1>
                    </div>
                    <nav>
                        <ul>
                            <Link to='/'>
                                <li className='current'>Home</li>
                            </Link>
                            <Link to='/about'>
                                <li>About</li>
                            </Link>
                            <Link to='/service'>
                                <li>Service</li>
                            </Link>
                            {/* <li class="current"><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                            <li><a href="#">Services</a></li> */}
                        </ul>
                    </nav>
                </div>
            </header>

            <section id="showcase">
                <div className="container">
                    <h1>Udara Jayawardena</h1>
                    <p>Jenkins Automation set up</p>
                </div>
            </section>

            <section id="newsletter">
                <div class="container">
                    <h1>Subscribe to Our News Letter</h1>
                    <form action="" method="get">
                        <input type="email" placeholder="Enter email"></input>
                        <button type="submit" class="button_1">Subscribe</button>
                    </form>
                </div>
            </section>

            <section id="boxes">
                <div class="container">

                    <div class="box">
                        <img src={LogoHTML} alt="html-logo"></img>
                        <h3>HTML5 Mark up</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat necessitatibus neque dolore, quo</p>
                    </div>

                    <div class="box">
                        <img src={LogoCSS} alt="css-logo"></img>
                        <h3>CSS Syling</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat necessitatibus neque dolore, quo
                </p>
                    </div>

                    <div class="box">
                        <img src={LogoBrush} alt="brush-logo"></img>
                        <h3>Graphic Design</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat necessitatibus neque dolore, quo
                </p>
                    </div>

                </div>
            </section>


            <footer>
                <p>Acme Web design, Copyrights &copy; 2019</p>
            </footer>


        </body>
    )
}

export default Home;
