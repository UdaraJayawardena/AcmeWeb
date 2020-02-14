import React from 'react'
import { Link } from 'react-router-dom';

import '../components/About.css';

const About = () => {
    return (
        <body>
            <header>
                <div className="container">
                    <div id="branding">
                        <h1><span class="highlight">Acme</span> Web Design</h1>
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
                    <form action="index.html" method="get">
                        <input type="email" placeholder="Enter email"></input>
                        <button type="submit" class="button_1">Subscribe</button>
                    </form>
                </div>
            </section>

            <section id="main">
                <div className="container">
                    <article id="main-col">
                        <h1 class="page-title">About Us</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque ipsam numquam quod inventore
                        possimus. Consequatur amet aliquid maiores sint voluptates.?</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero earum vel mollitia iste aliquam nobis
                            illum! Quisquam iusto exercitationem quibusdam voluptatibus a facilis iure obcaecati sunt
                            repudiandae rerum. Commodi tempora est quidem. Nisi eligendi veritatis quia eaque eius adipisci
                        eveniet praesentium enim, numquam sed aliquam.</p>
                    </article>

                    <aside id="sidebar">
                        <div class="dark">
                            <h3>What We Do</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus perferendis unde repudianfsdfsd sdfsd sdfsd sdfsd sd sdf s safdsfsdfsdfsfsdf sf sdae.</p>
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
export default About;
