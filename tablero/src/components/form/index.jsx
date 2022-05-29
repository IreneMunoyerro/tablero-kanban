import './style.css'
import { useState } from 'react'
import Task from '../task'


function Form({addTask}) {

    const [ taskTitle, setTaskTitle] = useState('');

    const getValue = e => {
        let valor = e.target.value
        console.log(valor)  
    }
 
    return(
        <>
        <form action="">

            <textarea onChange={getValue} id="txt" cols="30" rows="10" placeholder='Enter a note'></textarea>
            <button onClick={addTask}>Add</button>
            <button>Cancel</button>
        </form>
        </>
    )
}

export default Form