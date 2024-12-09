import Footer from './Footer'
import React from 'react'
import axios from 'axios'

const Contact = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target[0].value
        const email = e.target[1].value
        const phone = e.target[2].value
        const phones = "919009032665";
        const message = e.target[4].value
         
        const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
        const whatsappURL = `https://wa.me/${phones}?text=${text}`;
     console.log(whatsappURL);
     
        // Redirect to WhatsApp
        window.open(whatsappURL, "_blank");
    };

    return (
        <>

            <section className="contact section">


                <div className="container section-title" data-aos="fade-up">
                    <h2>Contact</h2>
                    <p>If you'd like to get in touch, feel free to reach out!</p>
                </div>

                <div className="container" data-aos="fade-up" data-aos-delay="100">

                    <div className="row gy-4">

                        <div className="col-lg-5">

                            <div className="info-wrap">
                                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                                    <i className="bi bi-geo-alt flex-shrink-0"></i>
                                    <div className='contact-section'>
                                        <a href="https://maps.app.goo.gl/qNT586WmPZwtKwKM7" >
                                            <h3>Address</h3>
                                            <p>Malviya Nagar Square / MR-9 Square</p>
                                        </a>
                                    </div>
                                </div>

                                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                                    <i className="bi bi-telephone flex-shrink-0"></i>
                                    <div className='contact-section'>
                                        <h3>Call Us</h3>
                                        <a href='tel:+917509595086'>+91 7509595086</a>
                                    </div>
                                </div>

                                <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                                    <i className="bi bi-envelope flex-shrink-0"></i>
                                    <div className='contact-section'>
                                        <h3>Email Us</h3>
                                        <a href='mailto:piusharma2310@gmail.com'>piusharma2310@gmail.com</a>
                                    </div>
                                </div>

                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2869.9075002612167!2d75.8882120700661!3d22.742573381151864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd0278cf676d%3A0xe6e99b2a3c47b455!2sMalviya%20Nagar%20Square%20%2F%20MR-9%20Square!5e1!3m2!1sen!2sin!4v1733066046026!5m2!1sen!2sin" width="410" height="400" style={{ border: '0' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="200">
                                <div className="row gy-4">

                                    <div className="col-md-6">
                                        <label htmlFor="name-field" className="pb-2">Your Name</label>
                                        <input type="text" name="name" placeholder='Enter your good name please' id="name-field" className="form-control" required />
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="email-field" className="pb-2">Your Email</label>
                                        <input type="email" className="form-control" placeholder='Enter your email here' name="email" id="email-field" required />
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="Phone-field" className="pb-2">Phone</label>
                                        <input type="tel" className="form-control" placeholder='+91' name="phone" id="Phone-field" required />
                                    </div>

                                    <div className="col-md-6">
                                        <label htmlFor="subject-field" className="pb-2">Subject</label>
                                        <input type="text" className="form-control" placeholder='Enter your subject' name="subject" id="subject-field" required />
                                    </div>
                                    <div className="col-md-12">
                                        <label htmlFor="message-field" className="pb-2">Message</label>
                                        <textarea className="form-control" name="message" placeholder='Enter your message' rows="10" id="message-field" required></textarea>
                                    </div>

                                    <div className="col-md-12 text-center">
                                        <div className="loading">Loading</div>
                                        <div className="error-message"></div>
                                        <div className="sent-message">Your message has been sent. Thank you!</div>

                                        <button type="submit">Send Message</button>
                                    </div>
                                </div>
                            </form>
                        </div>

                    </div>

                </div>
                <Footer />
            </section>
        </>
    )
}

export default Contact
