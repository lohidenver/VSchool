import projectData from "./projectData";
import {useState} from "react";
import {AiFillYoutube} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import {CgWebsite} from "react-icons/cg"
import {  useNavigate } from "react-router-dom";


const Card = () => {
  const [cards] = useState(projectData);
  const navigate = useNavigate()

  return (
    <div className='projects' id='projects'>
      <h2>Projects</h2>
      <div className='projects-content'>
        {cards.map((card, index) => (
          <div key={index} className='project-card'>
            
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <img src={card.projectImg} alt='' />
            <div className='card-links'>
              <a href={card.urlGithub}>
                <AiFillGithub size="40px" color="black" title="GitHub Repo"/>
                    </a>
              
              <a href={card.urlYoutube}>
                <AiFillYoutube size="40px" color="red" title="YouTube Demo"/>
                </a>
              <a href={card.urlYoutube}>
                <CgWebsite size="40px" color="blue" title="Live Demo"/>
              </a>
            </div>
          </div>
        ))}
      </div>
      <button onClick={()=>navigate("/allprojects")} className="btn-project">See More...</button>
    </div>
  );
};

export default Card;
