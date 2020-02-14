import React from 'react'
import { Link } from 'react-router-dom';

import '../components/Service.css';

const Service = () => {
    return (
        <body>
            <header>
                <div className="container">
                    <div id="branding">
                        <h1><span className="highlight">Acme</span> Web Design</h1>
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
                        </ul>
                    </nav>
                </div>
            </header>

            <section id="newsletter">
                <div className="container">
                    <h1>Subscribe to Our News Letter</h1>
                    <form action="#" method="get">
                        <input type="email" placeholder="Enter email"></input>
                        <button type="submit" class="button_1">Subscribe</button>
                    </form>
                </div>
            </section>

            <section id="main">
                <div class="container">
                    <article id="main-col">
                        <h1 class="page-title">Services</h1>
                        <ul id="services">
                            <li>
                                <h3>Website Design</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam error quos dolorem! Aliquid,
                            ipsa deserunt. </p>
                                <p>Pricing : 250,000.00</p>
                            </li>

                            <li>
                                <h3>Website Maintaince</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam error quos dolorem! Aliquid,
                            ipsa deserunt. </p>
                                <p>Pricing : 350,000.00</p>
                            </li>

                            <li>
                                <h3>Website Hosting</h3>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam error quos dolorem! Aliquid,
                            ipsa deserunt. </p>
                                <p>Pricing : 120,00.00</p>
                            </li>
                        </ul>
                    </article>

                    <aside id="sidebar">
                        <div className="dark">
                            <h3>Get a Quote</h3>
                            <form action="#" method="get" class="quote">
                                <div>
                                    <label>Name</label><br></br>
                                    <input type="text" placeholder="Name"></input>
                                </div>
                                <div>
                                    <label>Email</label><br></br>
                                    <input type="email" placeholder="Email Address"></input>
                                </div>
                                <div>
                                    <label>Message</label><br></br>
                                    <textarea placeholder="Message" cols="30" rows="10"></textarea>
                                </div>
                                <button class="button_1" type="submit">Send</button>
                            </form>
                        </div>
                    </aside>

                </div>
            </section>

            <footer>
                <p>Acme Web design, Copyrights &copy; 2019</p>
            </footer>


        </body>
    )
}

export default Service;