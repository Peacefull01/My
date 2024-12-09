import React,{useState,useRef,useEffect} from 'react'
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
    const [headerShow, setHeaderShow] = useState(false);
    const [toggleIcon, setToggleIcon] = useState('bi-list');
   
  
    // Function to toggle the header
    const handleHeaderToggle = () => {
      setHeaderShow((prev) => !prev);
      setToggleIcon((prev) => (prev === 'bi-list' ? 'bi-x' : 'bi-list'));
    };
  
    // Function to hide the mobile nav on same-page/hash links
    const handleNavLinkClick = () => {
      if (headerShow) {
        handleHeaderToggle();
      }
    };
  
    // Remove preloader on window load
   
  
    return (
        <>
            <header className="header dark-background d-flex flex-column">
                <i className="header-toggle d-xl-none bi bi-list"></i>

                <div className="profile-img">
                    <img src="/img/profile.jpg" alt="" className="img-fluid rounded-circle"/>
                </div>

                <a href="index.html" className="logo d-flex align-items-center justify-content-center">
                    {/* <!-- <img src="assets/img/logo.png" alt=""> --> */}
                        <h1 className="sitename">Priyanka Sharma</h1>
                </a>

                <div className="social-links text-center"> 
                    <a href="mailto:itspriyanka258@gmail.com" className="google-plus"><i className="bi bi-google"></i></a>
                    <a href="https://www.linkedin.com/in/priyanka-sharma-158a5b21a" target='_blank' className="linkedin"><i className="bi bi-linkedin"></i></a>
                </div>

                <nav id="navmenu" className="navmenu navbar">
                    <ul>
                        <li><NavLink activeclassname="active" to="/" ><i className="bi bi-house navicon "></i>Home</NavLink> </li>
                        <li><NavLink activeclassname="active" to="/about"><i className="bi bi-person navicon"></i> About</NavLink> </li>
                        <li><NavLink activeclassname="active" to="/skills"><i className="bi bi-hdd-stack navicon"></i> Skills</NavLink> </li>
                        <li><NavLink activeclassname="active" to="/resume"><i className="bi bi-file-earmark-text navicon"></i> Resume</NavLink> </li>
                        <li><NavLink activeclassname="active" to="/projects"><i className="bi bi-images navicon"></i> Projects</NavLink> </li>
                        <li><NavLink activeclassname="active" to="/experience"><i className="bi bi-files navicon"></i> Experience</NavLink> </li>
                        <li><Link to="/contact"><i className="bi bi-envelope navicon"></i> Contact</Link></li>
                    </ul>
                </nav>

            </header>
        </>
    )
}

export default Header
