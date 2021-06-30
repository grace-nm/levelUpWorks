import './home.css';
import Layout from './Layout';
// import CourseDetails from './CourseDetails';
import openingImage from './openingImage.png';


function App() {
    return (
        // <div className="App">
        <Layout>
            <div className="container">

                <div className="sectionOne">
                    <img className="openingImage" alt="img" src={openingImage} />

                    <p> image of alan</p>
                    <br />
                    <p>3 image links</p>
                    <br />
                    <p>even more image links</p>
                </div>

                <div className="sectionTwo">
                    <div className="firstSquare">  </div>
                    <div className="secondSquare"> </div>
                    <div className="orangeSquare"></div>
                </div>

                <div className="sectionThree">
                    <div className="ourAss">OUR ASSOCIATES</div>
                </div>

                <div className="sponsorLogos">
                    <div className="logos">fjkd</div>
                    <div className="logos"></div>
                    <div className="logos"></div>
                </div>
            </div>
        </Layout>
        // </div>
    );
}

export default App;
