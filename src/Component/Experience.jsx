import React from 'react';
import Footer from './Footer';

const Experience = () => {
    return (
        <>
            <section className="resume section">
                <div className="container">
                    <div className="ms-3 section-title" data-aos="fade-up" data-aos-delay="50">
                        <h2>Experience</h2>
                        <p>Highlighting my professional journey, practical exposure, and the skills gained through meaningful projects and hands-on learning.</p>
                    </div>

                    <div className="row">
                        <div className="ms-4" data-aos="fade-up" data-aos-delay="200">
                            <h2 className="resume-title">Professional Experience</h2>
                            <h5 className="">Worked at Letskillify (3 Months)</h5><br />

                            {/* LETSKILLIFY Internship */}
                            <div className="row">
                                <div className="col-md-12 col-12 resume-item">
                                    <h4>Web Development Intern</h4>
                                    <h5>LETSKILLIFY WEBSITE</h5>
                                    <ul>
                                        <li>Worked on building a learning and job opportunity platform using React.js and modern web technologies.</li>
                                        <li>Developed and optimized features like skill-based learning modules and job search functionality.</li>
                                        <li>Collaborated closely with the team to create an intuitive user interface, improving overall user engagement.</li>
                                        <li>Enhanced problem-solving skills and deepened understanding of React.js, HTML, CSS, and Tailwind CSS.</li>
                                    </ul>
                                </div>

                                
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        </>
    );
};

export default Experience;
