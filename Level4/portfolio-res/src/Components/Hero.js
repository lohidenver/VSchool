import "./hero.css";
import profilepicture from "../images/davethephils-circle.png"

const Home = () => {
  return (
    <div className='hero' id="hero">
      <div className='hero-content'>
        <div className='profile-picture'>
          <img src={profilepicture} alt=''  />
        </div>
        <div className='hero-text-content'>
          <h2>Hi, I am Dave.</h2>
          <p>
            I am a <strong>Fullstack Developer</strong> and content creator on Youtube. Check out
            examples of my projects and videos below.
          </p>
          <button>Download CV</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
