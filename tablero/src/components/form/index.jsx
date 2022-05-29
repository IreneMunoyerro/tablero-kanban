import './style.css'
import { useState } from 'react'
import { toBeDisabled } from '@testing-library/jest-dom/dist/matchers';

function Form({addTask}) {
    
    const [ taskTitle, setTaskTitle] = useState('');

    // const [newTitle, setNewTitle] = useState(card.title);

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
            <textarea className="textArea" onChange={handleTextChange} id="txt" cols="30" rows="10" placeholder='Enter a note' value={text}></textarea>
           
            <div>
            <button className="addButton" onClick={addTask} onChange={setTitle} disabled= {!text}>Add</button>
            <button className="cancelButton">Cancel</button>
            </div>
        </form>
        </>
    )
}

export default Form