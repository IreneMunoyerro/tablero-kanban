import './style.css'
import { BsTrash } from 'react-icons/bs';
import { FaRegDotCircle } from 'react-icons/fa';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { useState } from 'react';



function Task({}) {

    const creationTime = `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`

    return (
        <>
            <div className='task__container'>
                <section className='task-title'>
                    <div>
                        <AiOutlineCheckCircle style={{ color: "red" }}></AiOutlineCheckCircle>
                    </div>
                    <p></p>
                    <span><BsTrash></BsTrash></span>
                </section>
                <section className='task-creation'>
                    <p>#id create on {creationTime}</p>
                </section>
            </div>
        </>
    )
}

export default Task