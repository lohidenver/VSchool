import projectData from "../Data/projectData";
import {useState} from "react";
import {AiFillYoutube} from "react-icons/ai";
import {AiFillGithub} from "react-icons/ai";
import {CgWebsite} from "react-icons/cg";
import {useNavigate} from "react-router-dom";

const Card = () => {
  const [cards] = useState(projectData);
  const navigate = useNavigate();

  return <div className="card">Card</div>;
};

export default Card;
