import './style.css'
import Task from '../task'
import Form from '../form';
import {AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';

function Column ({c}) {

const[form, updateForm] = useState(false)

// const[task,setTask] = useState([])

const openForm = () => {
updateForm(!false)
}

// const createTask = () => {
//     setTask(prevTask => [...prevTask, task])
 
    // (pokemon => updatePokemons(prevPokemons => [...prevPokemons, pokemon]));
    //SE ACTUALIZA SET TASK CON CLONACION PARA IR AÑADIENDO OBJETOS AL ARRAY


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
                <Form openForm={openForm}></Form>
                : ''
                }

            </div>
        </>
    )
}

export default Column