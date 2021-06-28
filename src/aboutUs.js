import React from 'react';
import './aboutUs.css';
import Layout from './Layout';
import placeholder from './placeholder.png';

function AboutUs() {
    return (
        <Layout>
            <div className="phatBox">

                <img className="placeholder" alt="place holder inamge" src={placeholder} />

            </div>
        </Layout>
    );
}

export default AboutUs;