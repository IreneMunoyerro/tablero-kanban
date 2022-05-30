import './style.css'
import Task from '../task'
import {AiOutlinePlus } from 'react-icons/ai';
import { useState, useContext } from 'react';
import { BsEmojiExpressionlessFill } from 'react-icons/bs';

function Column ({c, onAddTask}) {

const[form, updateForm] = useState(false)

// const [text, enableButton] = useState("");

const openForm = () => {
updateForm(true)
}

const handleSubmit = (e) =>{
e.preventDefault()
const valor = e.target.title.value
const id = c.id
onAddTask(valor, id)
} 

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
                                <button type='submit'>Add</button>
                                <button type='reset'>Cancel</button>
                            </div>
                        </form>
                    : ''
                }

                {/* onReset={handleReset}
                onChange={handleButton}
                 */}

                {/* {
                 task.map((t,i) => <Task key={i} task={t}></Task>)
                } */}

            </div>
        </>
    )
}

export default Column