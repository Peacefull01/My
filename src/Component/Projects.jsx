import React from 'react'
import Footer from './Footer'

const Projects = () => {
    return (
        <>
            <section className="resume section">
                <div className="container ">
                    <div className="ms-3 section-title" data-aos="fade-up" data-aos-delay="50">
                        <h2>Project</h2>
                        <p >Showcasing my hands-on experience in building impactful and user-centric applications that bridge the gap between technology and real-world solutions.</p>
                    </div>


                    <div className="row">
                        <div className="ms-4" data-aos="fade-up" data-aos-delay="200">
                            <h3 className="resume-title">Projects</h3>

                            {/* LETSKILLIFY Project */}
                           <div className="row">
                           <div className="col-md-6 col-12 resume-item">
                                <h4>LETSKILLIFY</h4>
                                <h5>Learning and Job Opportunity Platform</h5>
                                <ul>
                                    <li>Contributed to developing a platform that connects education with real job opportunities.</li>
                                    <li>Implemented features to help users learn practical skills, find jobs, and earn while learning.</li>
                                    <li>Focused on creating a smooth user experience to support career growth through skill-based education.</li>
                                </ul>
                            </div>

                            {/* BRIGATECH LMS Project */}
                            <div className="col-md-6 col-12 resume-item ">
                                <h4>LMS</h4>
                                 <h5>Comprehensive Learning Management System</h5>
                                <ul>
                                    <li>Recently working on an LMS platform designed for schools, colleges, and universities.</li>
                                    <li>Developed user panels for students, teachers, parents, and institutions to streamline educational processes.</li>
                                    <li>Added features such as admission management, student-teacher communication, and exam management.</li>
                                    <li>Focused on improving the learning experience by integrating advanced and user-friendly functionalities.</li>
                                </ul>
                            </div>
                           </div>
                        </div>

                    </div>

                </div>
<Footer/>
            </section>
        </>
    )
}

export default Projects
