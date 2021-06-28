import './home.css';
import Layout from './Layout';
// import CourseDetails from './CourseDetails';



function App() {
    return (
        // <div className="App">
        <Layout>
            <div className="container">

                <div className="sectionOne">
                    <p>image of alan</p>
                    <br />
                    <p>3 image links</p>
                    <br />
                    <p>even more image links</p>
                </div>

                <div className="sectionTwo">
                    <div className="whiteSquares">
                        <div className="firstSquare">  </div>
                        <div className="secondSquare"> </div>
                    </div>
                    <div className="orangeSquare"></div>

                </div>

                <div className="sectionThree">
                    <div className="space">image gallery</div>
                    <div className="space">sponsors and partners</div>
                </div>

            </div>
        </Layout>
        // </div>
    );
}

export default App;
