import React from 'react'
import Footer from './Footer'
const Resume = () => {
    return (
        <>

            <section className="resume section">


                <div className="container section-title" data-aos="fade-up" data-aos-delay="50">
                    <h2>Resume</h2>
                    <p>A comprehensive overview of my academic background and professional experiences, highlighting my skills and accomplishments throughout my career journey.</p>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                            <h3 className="resume-title">Summary</h3>
                            <div className="resume-item pb-0">
                                <h4>Priyanka Sharma</h4>
                                <p><em>This portfolio showcases my skills in modern web development. I used React.js to create a dynamic and responsive design with animations and custom progress bars. I managed data and states using hooks and built an interactive contact form. Every part of this project, from design to development, is done by me, reflecting my expertise in frontend development and user-friendly design.</em></p>
                                <ul>
                                    <li>Indore, M.P</li>
                                    <li>7509595086</li>
                                    <li>itspriyanka258@gmail.com</li>
                                </ul>
                            </div>

                            <h3 className="resume-title">Education</h3>
                            <div className="resume-item">
                                <h4>Bachelor of Technology [B. Tech]</h4>
                                <h5>[07 - 2018] - [06 - 2022]</h5>
                                <p><em>Shree Yogindra Sagar Institute of Technology & Science, Ratlam [M.P]</em></p>
                                <p><em>Rajiv Gandhi Proudyogiki Vishwavidyalaya, Bhopal</em></p>
                            </div>

                            <div className="resume-item">
                                <h4>Intermediate Class</h4>
                                <h5>[06 - 2017] - [04 - 2018]</h5>
                                <p><em>Model Higher Secondary School [M.P. Board]</em></p>
                                <p>[P.C.M]</p>
                            </div>

                            <div className="resume-item">
                                <h4>Matriculation Class</h4>
                                <h5>[06 - 2015] - [05 - 2016]</h5>
                                <p><em>Model Higher Secondary School [M.P. Board]</em></p>
                            </div>
                        </div>

                        <div className="col-lg-6 " data-aos="fade-up" data-aos-delay="200">
                            <h3 className="resume-title">Internship Experience</h3>
                            <div className="resume-item">
                                <h4>Frontend Developer Internship</h4>
                                <h5>LetSkillify (6 months)</h5>
                                <p><em>LetSkillify, Remote</em></p>
                                <ul>
                                    <li>Developed and improved frontend applications using React.js to create better user experiences.</li>
                                    <li>Worked on an educational platform that allows users to buy online courses and templates.</li>
                                    <li>Contributed to a local business listing project, similar to Justdial, for a Mumbai-based brand.</li>
                                    <li>Collaborated with backend developers and designers to deliver smooth and user-friendly interfaces.</li>
                                    <li>Designed responsive websites that work well on different devices and screen sizes.</li>
                                    <li>Recently worked on a Learning Management System (LMS) for schools, colleges, and universities. It included features like admission management, student and teacher panels, and parent accounts for better education management.</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>

                <Footer />
            </section>
        </>
    )
}

export default Resume
