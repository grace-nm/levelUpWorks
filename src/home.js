import './home.css';
import Layout from './Layout';
// import CourseDetails from './CourseDetails';
import openingImage from './openingImage.png';
import tile1 from './course 2.png';
import tile2 from './Group 374.png';
import tile3 from './Group 376.png';
import tilequotes from './Frame 9.png';
import hovergallery from './HOVER GALLERY.png'




function App() {
    return (
        // <div className="App">
        <Layout>
            <div className="container">

                <div className="sectionOne">
                    <img className="openingImage" alt="img" src={openingImage} />

                    <p> image of alan</p>
                    <br />
                    
                    <div className="image-links">
                    <p>3 image links</p>
                    <img className="tile1" alt="img" src={tile1} />
                    <img className="tile2" alt="img" src={tile2} />
                    <img className="tile3" alt="img" src={tile3} />

                    </div>
                    <br />
                    <div className="quote-image">
                    <p>even more image links</p>
                    <img className="quote-tiles" alt="img" src={tilequotes}/>
                    </div>

                </div>

                <div className="sectionTwo">
                    <div className="firstSquare">  </div>
                    <div className="secondSquare"> </div>
                    <div className="orangeSquare"></div>
                </div>
                {/* Have put this here as a placeholder, not sure if we have time to add the hover? */}
                <div className="hover-gallery">
                <img src={hovergallery}/>

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
