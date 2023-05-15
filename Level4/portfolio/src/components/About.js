import army from '../images/davearmy-circle.png'

const About = () => {
  return (
    <div className='about' id='about'>
      <h2>About</h2>
      <div className='about-content'>
        <div className='technical'>
          {" "}
          <h3>Technical</h3>
          <p>I have skills in both <strong>Front-End</strong> and <strong>Back-End</strong> development.  I am always looking to strengthen my existing skills and learn new ways to do things.  </p>  
          <br />
          <p>
             I have a passion for design and building things.
            </p>
        </div>
        <div className='personal'>
          <h3>Personal</h3>
          <p>
            I am an <strong>Army Veteran </strong>and a former <strong>Elementary School Teacher</strong>.  I love to <strong>teach</strong> soldiers and students. </p>
            <br />
            <p>

              In my freetime, you can either find me in the mountains of Colorado on a hike or in the oceans around the world scuba diving.    

            I also can be found on my computer playing Cities: Skylines or other simulation games.  I also love putting together puzzles and Lego sets.
         
            </p>
            <img src={army} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default About;
