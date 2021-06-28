import React from 'react';
import './bookingPage.css';
import Layout from './Layout';
import placeimage from './placeimage.png';

function BookingPage() {
    return (
        <Layout>
            <div className="bigBox">

                <img className="placeimage" alt="place holder inamge" src={placeimage} />

            </div>
        </Layout>
    );
}

export default BookingPage;