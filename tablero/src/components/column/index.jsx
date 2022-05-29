import './style.css'
import Task from '../task'
import Form from '../form';
import {AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';
import { BsEmojiExpressionlessFill } from 'react-icons/bs';

function Column ({c}) {

const[form, updateForm] = useState(false)
const [task, setTask] = useState([]);

const openForm = () => {
updateForm(true)
}

const addTask = (e) => {

    e.preventDefault();
    const newTask = {
        // id,
        // title,
        // state,
        // creation
    }
    setTask((prevTask) => [...prevTask, newTask]) 
}

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

                { form?
                <Form openForm={openForm} addTask={addTask}></Form>
                : ''
                }

                {
                 task.map((t,i) => <Task key={i} task={t}></Task>)
                }


             

            </div>
        </>
    )
}

export default Column