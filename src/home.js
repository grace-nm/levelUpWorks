import './home.css';
import Layout from './Layout';
// import CourseDetails from './CourseDetails';


// Image imports
import openingImage from './openingImage.png';
import tile1 from './chck our prog.png';
import tile2 from './Group 374.png';
import tile3 from './Group 376.png';
import tilequotes from './Frame 9.png';
import hovergallery from './HOVER GALLERY.png'
import logo1 from './image 30.png';
import logo2 from './image 31.png';
import logo3 from './image 32.png';
import logo4 from './image 33.png';




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
                    <div className="logos"><img src={logo1}/></div>
                    <div className="logos"><img src={logo2}/></div>
                    <div className="logos"><img src={logo3}/></div>
                    <div className="logos"><img src={logo4}/></div>
                </div>
            </div>
        </Layout>
        // </div>
    );
}

export default App;
