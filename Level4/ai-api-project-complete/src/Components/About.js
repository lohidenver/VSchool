import "./about.css";

const About = () => {
  return (
    <div className='about' id='about'>
      <p className='about-text'>
        This project was created using the openAI tools available at{" "}
        <span>
          <a href='https://platform.openai.com/docs/api-reference'>openai</a>
        </span>
      </p>
      <p className='about-text'>This project uses API KEYS for authentication.</p>
      
    </div>
  );
};

export default About;
