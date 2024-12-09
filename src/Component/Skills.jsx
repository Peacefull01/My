import { React, useEffect, useState } from 'react'
import Footer from './Footer';
const Skills = ({ value = 0 }) => {
    // console.log(value,'val');

    const [progress, setProgress] = useState(value);
    const [css, setCss] = useState(value);
    const [js, setJs] = useState(value);
    const [react, setReact] = useState(value);
    const [jquery, setJquery] = useState(value);
    const [bootstrap, setBootstrap] = useState(value);
    useEffect(() => {
        setProgress(Math.min(100, Math.max(value, 0)))
        setCss(Math.min(100, Math.max(value, 0)))
        setJs(Math.min(80, Math.max(value, 0)))
        setReact(Math.min(75, Math.max(value, 0)))
        setJquery(Math.min(70, Math.max(value, 0)))
        setBootstrap(Math.min(90, Math.max(value, 0)))
    }, [value])


    return (
        <>

            <section className="skills section light-background">


                <div className="container section-title" data-aos="fade-up">
                    <h2>Skills</h2>
                    <p>Necessitatibus eius consequatur ex aliquid fuga eum quidem sint consectetur velit</p>
                </div>

                <div className="container" data-aos="fade-up" data-aos-delay="100">

                    <div className=" row ">

                        <div className="col-lg-6 ">
 
                             <span className=" "><span>HTML</span></span>
                            <div className="progressive mb-5  " style={{ height: '30px' }}>
                                <div className="text-center  bg-secondary">
                                    <span className='p-1'>{progress.toFixed()}%  </span>
                                    <div style={{ width: `${progress}%` }}></div>
                                </div>
                           
                           </div>
                            <span className="skill"><span>CSS</span>  </span>  
                            <div className="progressive mb-5" style={{ height: '30px' }}>
                                <div className="text-center  bg-secondary">
                                    <span className='p-1'>{css.toFixed()}%  </span>
                                    <div style={{ width: `${css}%` }}></div>
                                </div>
                            </div>

                            <span className="skill"><span>JavaScript</span> </span>
                            <div className="progressive mb-5" style={{ height: '30px' }}>
                                <div className="text-center  bg-secondary">
                                    <span className='p-1'>{js.toFixed()}%  </span>
                                    <div style={{ width: `${js}%` }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">

                            <span className="skill"><span>React.js</span> </span>
                            <div className="progressive mb-5" style={{ height: '30px' }}>
                                <div className="text-center  bg-secondary">
                                    <span className='p-1'>{react.toFixed()}%  </span>
                                    <div style={{ width: `${react}%` }}></div>
                                </div>
                            </div>

                            <span className="skill"><span>Jquery</span>  </span>  
                            <div className="progressive mb-5" style={{ height: '30px' }}>
                                <div className="text-center  bg-secondary">
                                    <span className='p-1'>{jquery.toFixed()}%  </span>
                                    <div style={{ width: `${jquery}%` }}></div>
                                </div>
                            </div>

                            <span className="skill"><span>Bootstrap</span> </span>  
                            <div className="progressive mb-5" style={{ height: '30px' }}>
                                <div className="text-center  bg-secondary">
                                    <span className='p-1'>{progress.toFixed()}%  </span>
                                    <div style={{ width: `${progress}%` }}></div>
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

export default Skills
