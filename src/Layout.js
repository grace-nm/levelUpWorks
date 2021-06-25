import React from 'react'
import { Link } from 'react-router-dom';
import './Layout.css';

const Layout = ({ children }) => {
    return (
        <>
            <nav className="nav">
                <div className="headerBox">
                    <p>IconLogo</p>
                    <div className="linksNav">
                        <p>HOME</p>
                        <p>COURSE DETAIL</p>
                        <p>BOOKING CONSULTATION</p>
                        <p>ABOUT US</p>
                        <p>ACCOUNTlogo</p>
                        {/* <Link to='/'>Home</Link>
                <Link to='/app'>App</Link>
                <Link to='/marketing'>Marketing</Link> */}
                    </div>
                </div>
            </nav>
            <main>
                {children}
            </main>

            <footer>
                <div className="footerBox">
                    <p className="name">LevelUp Works</p>
                    <p className="copyRight">2021 - All right reserved</p>
                    <p className="icons">icons will go here</p>

                </div>
            </footer>
        </>
    )
}

export default Layout;