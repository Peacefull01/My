import Footer from './Footer'
import React from 'react'

const About = () => {
    return (
        <>

            <section className="about section">


                <div className="container section-title" data-aos="fade-up">
                    <h2>About</h2>
                    <p>I am a Front-end and React Developer who loves bringing ideas to life through technology by creating responsive, user-friendly, and visually appealing websites. For me, technology is a way to solve problems and enhance user experiences, turning complex requirements into smooth, functional designs that meet both user needs and business goals.</p>
                </div>

                <div className="container" data-aos="fade-up" data-aos-delay="100">

                    <div className="row gy-4 justify-content-center">
                        <div className="col-lg-4 ">
                            <img  src="img/new.jpg" height={'255px'} className="img-fluid border " alt="" />
                        </div>
                        <div className="col-lg-8 content">
                            <h2>Frontend Developer</h2>
                            <p className="fst-italic py-3">
                            Get to know me a little better.
                            </p>

                            <p className="pb-3">
                                <li>I have worked on live projects, gaining practical experience in real-world development.</li>
                                <li>My goal is to keep improving my skills and work on impactful projects with talented teams.</li>
                                <li>In my free time, I explore design trends and learn new technologies to stay updated.</li>
                            </p>
                            <div className="row">
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span><a className='text-dark' href='tel:+91 7509595086' >+91 7509595086</a></span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Email:</strong> <span><a className='text-dark' href="mailto:itspriyanka258@gmail.com">itspriyanka258@gmail.com</a></span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Language:</strong> <span>Hindi, English</span></li>
                                    </ul>
                                </div>
                                <div className="col-lg-6">
                                    <ul>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong><span>23</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong><span>Bachelor of Technology (B.Tech.)</span></li>
                                        <li><i className="bi bi-chevron-right"></i> <strong>City:</strong><span>Indore, (M.P)</span></li> 
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                </div >

            </section >
           
                <Footer />

        </>
    )
}

export default About
