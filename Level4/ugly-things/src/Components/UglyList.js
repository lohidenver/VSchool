
import React, { useContext } from "react";
import UglyCard from "./UglyCard";
import { UglyContext } from "./UglyContext";
import "./uglyList.css"

const UglyList = () => {

    const {uglyList} = useContext(UglyContext)

  return (
    <div className="ugly" >
        <div className="list-container" id="ugly">
          <h2>List of Ugly Things!</h2>
        {uglyList.map((item, _id) => {
            return(
                <UglyCard 
                key = {item._id}
                id = {item._id}
                title = {item.title}
                imgUrl ={item.imgUrl}
                description ={item.description}
                
                />
            )
        })}
        </div>
    </div>
  )
}

export default UglyList