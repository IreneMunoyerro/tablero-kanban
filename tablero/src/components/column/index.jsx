import './style.css'
import Task from '../task'
import {AiOutlinePlus } from 'react-icons/ai';
import { useState, useContext } from 'react';
import { BsEmojiExpressionlessFill } from 'react-icons/bs';

function Column ({c, childToParent }) {

const[form, updateForm] = useState(false)
const [task, setTask] = useState([]);


// const [text, enableButton] = useState("");

const openForm = () => {
updateForm(true)
}




const handleSubmit = (e) =>{
e.preventDefault()
const valor = e.target.title.value
const id = c.id
const creationTime = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`
const status= c.id === "done" ? "done" : "todo";

// onAddTask(valor, id, creationTime, status)
// childToParent(data)
}
    const onAddTask = (valor, id, creationTime, status,e) => {
         const newTask = {
             title: "prueba",
             date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
             id: task.length > 0 ? task[task.length - 1].id + 1 : 1,
             
            // title: e.target.title.value,
            // id:c.id,
            // date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
            // status: c.id === "done" ? "done" : "todo"
        }
        // const valor = e.target.title.value
        // const id = c.id
        // const creationTime = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`
        // const status = c.id === "done" ? "done" : "todo";  
        setTask(prevTask => [...prevTask, newTask])
    }



    // const data = {
    //     id: "7",
    //     title:"" ,
    //     date: "eqwew",
    //     status: "done",
    // }
    

// const handleReset = (e) => {
// e.preventDefault()
// }

// const handleButton = (e) => {
//     enableButton(e.target.title.value);
// }



    return(
        <>
       
            <div className='column__container'>

                <section className='header__column'>

                    <article className='counter-title'>
                        <div className='counter'></div>
                        <span>{c.title}</span>
                    </article>

                    <span onClick={openForm}><AiOutlinePlus></AiOutlinePlus></span>
                </section>

                {
                form?
                        <form  openForm={openForm} onSubmit={handleSubmit} >
                            <textarea name='title' cols="30" rows="10" placeholder='Enter a note'></textarea>
                            <div className='buttons-form__container'>
                                <button onClick={onAddTask} type='submit'>Add</button>
                                <button type='reset'>Cancel</button>
                                
                            

                                
                            </div>
                        </form>
                    : ''
                }

                {/* onReset={handleReset}
                onChange={handleButton}
                 */}

                {
                 task.map((t,i) => <Task key={i} task={t}></Task>)
                } 

            </div>
        </>
    )
}

export default Column