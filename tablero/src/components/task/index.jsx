import './style.css'
import {BsTrash} from 'react-icons/bs';
import {FaRegDotCircle } from 'react-icons/fa';
import { AiOutlineCheckCircle } from 'react-icons/ai';

function Task () {
    return(
        <>
        <div className='task__container'>
            <section className='task-title'>
                <div>
                <AiOutlineCheckCircle  style={{ color: "red" }}></AiOutlineCheckCircle>
                </div>
                <p>TITLE</p>
                <span><BsTrash></BsTrash></span>
            </section>
            <section className='task-creation'>
             <p>#id create on DATE HORA</p>
            </section>
        </div>
        </>
    )
}

export default Task