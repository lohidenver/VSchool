import React, {useContext, useState} from "react";
import { UglyContext } from "./UglyContext";
import "./uglyCard.css"
import axios from "axios";


const UglyCard = (props) => {
    const {deleteUgly,getUgly} = useContext(UglyContext)

    const [editMode, setEditMode]=useState(false)
    const [editUgly, setEditUgly] = useState({
        title: props.title || "title", 
        description: props.description ||"description"})

    
        const toggleEditUgly = () => {
            
            setEditMode(prevState=> !prevState)
        }
    
        const handleEditChange = (event) => {
            const {name, value} = event.target;
            setEditUgly(prevState => {
                return{
                    ...prevState,
                    [name]:value
                }
            })
        }

        const handleSubmitEdit = (e) =>{
           e.preventDefault();
           const updatedUgly ={
            title: editUgly.title,
            description: editUgly.description
           }
           axios.put(`https://api.vschool.io/daveroberts/thing/${props.id}`, updatedUgly)
           .then(() => getUgly())
           .catch(err => console.log(err))
           console.log(updatedUgly)

           setEditMode(false)
        //    setEditMode(true)

        }


    return(
        <div className="UglyCard">
            {editMode ?
                <form onSubmit={handleSubmitEdit}>
                     <img className="img" src={props.imgUrl} alt={props.description}/>
                     <br>
                </br>
                    <input
                    className="edit-input"
                    name = "title"
                    value = {editUgly.title}
                    onChange = {handleEditChange}
                     />
                    <input
                    className="edit-input"
                    name = "description"
                    value = {editUgly.description}
                    onChange = {handleEditChange}
                     />
                    <button className="sub-edit">Save Changes</button>
                </form>
                :
                <div className="card">
                    
                    <h3 className="card-title">{props.title}</h3>
                    <img className="img" src={props.imgUrl} alt={props.description}/>
                    <h3 className="description">{props.description}</h3>
                    
                </div>
            }
            <div className="action-btns">
                <button className="editBtn" onClick={toggleEditUgly}>{editMode ? "Close" : "Edit"}</button>
                <button className="delBtn" onClick={() => deleteUgly(props.id)}>Delete</button>
            </div>
        </div>
    )
}

export default UglyCard;