import './style.css'
import { useState } from 'react'

function Form({addTask}) {
    
    const [ taskTitle, setTaskTitle] = useState('')

    const setTitle = e => {
        let valor = e.target.value
        console.log(valor)
        setTaskTitle(valor)
    }

    const [text, enableButton] = useState("");

    const handleTextChange = (event) => {
        enableButton(event.target.value);
    };
 
    return(
        <>
        <form action="">
            <textarea onChange={setTitle} id="txt" cols="30" rows="10" placeholder='Enter a note' value={text}></textarea>
            <button onClick={addTask}>Add</button>
            <button>Cancel</button>
        </form>
        </>
    )
}

export default Form