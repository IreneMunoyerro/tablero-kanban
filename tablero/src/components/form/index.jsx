import './style.css'
import { useState } from 'react'
import Task from '../task'


function Form({addTask}) {
    
<<<<<<< HEAD
    const getValue = e => {
        let valor = e.target.value
        console.log(valor)  
    }
=======
    const [ taskTitle, setTaskTitle] = useState('');

    // const [newTitle, setNewTitle] = useState(card.title);

    const setTitle = e => {
        let valor = e.target.value
        console.log(valor)
        setTaskTitle(valor)

     
    }

    // const [text, enableButton] = useState("");

    // const handleTextChange = (event) => {
    //     enableButton(event.target.value);
    // };

>>>>>>> develop
 
    return(
        <>
        <form action="">
<<<<<<< HEAD
            <textarea onChange={getValue} id="txt" cols="30" rows="10" placeholder='Enter a note'></textarea>
            <button onClick={addTask}>Add</button>
            <button>Cancel</button>
=======
            <textarea className="textArea" onChange={setTitle} id="txt" cols="30" rows="10" placeholder='Enter a note' value={text}></textarea>
           
            <div>
            <button className="addButton" onClick={addTask} disabled= {!text}>Add</button>
            <button className="cancelButton">Cancel</button>
            </div>
>>>>>>> develop
        </form>
        </>
    )
}

export default Form