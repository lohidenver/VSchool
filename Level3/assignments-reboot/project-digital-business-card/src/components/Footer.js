import github from "../images/github.png";
import instagram from "../images/instagram.png";
import youtube from "../images/youtube.png";
import twitter from "../images/twitter.png";
import linkedin from "../images/linkedin.png";

function Footer() {
  return (
    <div className='Footer'>
      <a href='http://www.github.com' target='_blank'>
        {" "}
        <img src={github} alt='github' />
      </a>
      <a href='http://www.instagram.com' target='_blank'>
        <img src={instagram} alt='instagram' />
      </a>
      <a href='http://www.youtube.com' target='_blank'>
        <img src={youtube} alt='youtube' />
      </a>
      <a href='http://www.twitter.com' target='_blank'>
        <img src={twitter} alt='twitter' />
      </a>
      <a href='http://www.linkedin.com' target='_blank'>
        <img src={linkedin} alt='linkedin' />
      </a>
    </div>
  );
}

export default Footer;
