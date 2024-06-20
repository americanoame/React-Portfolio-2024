import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

import image from '../../assets/hero-img.jpg';

import { fadeIn } from '../../utils/motion';
import Tilt from 'react-parallax-tilt';

import img from '../../assets/inovation.png';
import img2 from '../../assets/creator.png';
import img3 from '../../assets/tech/mongodb.png';
import img4 from '../../assets/tech/reactjs.png';
import img5 from '../../assets/tech/nodejs.png';
import img6 from '../../assets/tech/javascript.png';
import img7 from '../../assets/tech/redux.png';
import img8 from '../../assets/tech/html.png';
import img9 from '../../assets/tech/typescript.png';
import img10 from '../../assets/tech/css.png';
import img11 from '../../assets/tech/git.png';

import './hero.css';

const Hero = ({ index }) => {
  const techImages = [img3, img4, img5, img6, img7, img8, img9, img10, img11];

  return (
    <>
      <div className="background-container"></div>
      <header className="main-hero">
        <div className="hero-container">
          <div className="row">
            <div className="col-md-6 col-sm-12 left-section">
              <div className="title-tech-container">
                <img src={image} alt="" />
                <h2>
                  <span className="name-first-letter">A</span>ndre Silva
                </h2>
                <p>
                  A front-end developer with a <br />
                  strong foundation in backend
                  <br /> technologies.
                </p>

                <div className="tech-images">
                  {techImages.map((img, index) => (
                    <img key={index} src={img} alt={`Tech ${index + 1}`} />
                  ))}
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12 right-section">
              <div className="row">
                <motion.div className="col-md-6 col-sm-12" variants={fadeIn('up', 'spring', index * 0.5, 0.75)}>
                  <Tilt
                    options={{
                      max: 45,
                      scale: 1,
                      speed: 450,
                    }}
                  >
                    <div className="card">
                      <div className="degree-container">
                        <img src={img2} alt="Education" />
                        <h4>Degree</h4>
                        <p>
                          Rutger University
                          <br />
                          Software engineer Bootcamp
                        </p>
                      </div>
                    </div>
                  </Tilt>
                </motion.div>
                <motion.div variants={fadeIn} initial="hidden" animate="visible" className="col-md-6">
                  <Tilt>
                    <div className="card">
                      <div className="degree-container">
                        <img src={img} alt="Passionate for" />
                        <h4>Passionate</h4>
                        <p>
                          Ecommerce
                          <br />
                          Frontend and backend Development
                        </p>
                      </div>
                    </div>
                  </Tilt>
                </motion.div>
              </div>
              <p className="apresentation">
                <span className="first-letter">H</span>ello, everyone! Im thrilled to share that Im a recent graduate in software engineering. Throughout my educational journey, Ive had the opportunity to immerse myself in the world of technology, learning the ins and outs of
                software development, programming languages, and problem-solving methodologies.
              </p>
              <div className="btn-container">
                <Link to="/project" className="btn primary">
                  Download CV
                </Link>
                <Link to="/project" className="btn light">
                  My Works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Hero;
