import Footer from './Footer'
import React from 'react'

const Main = () => {
    return (
        <>


            <section className="hero section dark-background">
                <img src="/img/bgga.png" alt="" className='position-absolute z-2' width={'300px'}/>
                <p className="inner-img text-end">
                    <img  src="/img/final.png"  alt="" width={'400px'} className="ms-5  " />
                </p>
                <div className="container text-center bgg" data-aos="fade-up" data-aos-delay="100">
                    <h2>Priyanka Sharma</h2>
                    <p>I'm <span className="typed" data-typed-items="Designer, Developer, Freelancer, Photographer">Frontend Developer (React)</span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span><span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
                </div>

            </section>












        </>
    )
}

export default Main
