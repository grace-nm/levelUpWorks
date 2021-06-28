import React from 'react';
import './Login.css';
import Layout from './Layout';
import placeholder from './placeholder.png';

function Login() {
    return (
        <Layout>
            <div className="phatBox">

                <img className="placeholder" alt="place holder inamge" src={placeholder} />

            </div>
        </Layout>
    );
}

export default Login;