import React, {useState, useEffect} from "react";
import axios from "axios"

const UglyContext = React.createContext();

function UglyProvider(props){
   

    const [uglyList, setUglyList] = useState([])
    const [uglyData, setUglyData] = useState({
        title: "",
        imgUrl: "",
        description: ""
    })

  
    const getUgly = () =>{
        axios.get("https://api.vschool.io/daveroberts/thing")
        .then(res => {
            setUglyList(res.data)
        })
        .catch(err=> console.log(err))
    }
    useEffect(() => {
       
        getUgly();
    }, [])


    const handleChange = (e) =>{
        const {name, value} = e.target
        setUglyData(prevState => {
            return {
                ...prevState,
                [name]:value
            }
        })
    }

    const addUgly = () =>{
       
        setUglyList(prevState => {
            return [...prevState, uglyData]
        })
        setUglyData({
            title: "",
            imgUrl: "",
            description: ""
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addUgly();
        axios.post("https://api.vschool.io/daveroberts/thing", uglyData)
            .then(res => console.log(res.data))
            .catch(err => console.log(err))
    }

 
    const deleteUgly = (id) =>{
        axios.delete(`https://api.vschool.io/daveroberts/thing/${id}`)
            .then(res => setUglyList(prevState => prevState.filter(item => item._id !== id)))
            .catch(err => console.log(err));
        } 
    

return(
    <UglyContext.Provider value={{
        uglyData,
        getUgly,
        handleChange,
        uglyList,
        setUglyList,
        handleSubmit,
        deleteUgly
    }}>
        {props.children}
    </UglyContext.Provider>
)
}

export {UglyProvider, UglyContext};