import './style.css'
import { BsTrash } from 'react-icons/bs';
// import { FaRegDotCircle } from 'react-icons/fa';
import { AiOutlineCheckCircle } from 'react-icons/ai';

function Task({task, onDeleteTask}) {
  
    const handleRemove = () => {
        onDeleteTask(task.id) // pasamos al padre al accion
    }

    return (
        <>
            <div className='task__container'>

                <section className='task-title'>

                    <div className={task.status==="done"? "status-cancel":"status-check"}>
                        <AiOutlineCheckCircle></AiOutlineCheckCircle>

                    </div>

                    <p className='task-text'>{task.title}</p>

               
                    <span onClick={handleRemove}><BsTrash></BsTrash></span>

                </section>

                <section className='task-created'>
                <p>#{task.id} created on {task.date}</p>
                </section>
            </div>
        </>
    )
}

export default Task