import React from 'react';
import './CourseDetails.css';
import Layout from './Layout';
import placeholder from './placeholder.png';

function CourseDetails() {
    return (
        <Layout>
            <div className="containerCD">
                <img className="placeholder" alt="place holder inamge" src={placeholder} />
            </div>
        </Layout>
    );
}

export default CourseDetails;