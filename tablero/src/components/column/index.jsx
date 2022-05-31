import './style.css'
import Task from '../task'
import { AiOutlinePlus } from 'react-icons/ai';
import { useState} from 'react';
// import { BsEmojiExpressionlessFill } from 'react-icons/bs';

function Column({c, onUpdateDate}) {

    const [form, updateForm] = useState(false)
    const [task, setTask] = useState([]);
    const [text, enableButton] = useState("");
    const [taskFilter, updateTaskFiltered]= useState([])


    const openForm = () => {
        updateForm(true)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const valor = e.target.title.value
        const newTask = {
            title: valor,
            date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
            id: task.length > 0 ? task[task.length - 1].id + 1 : 1,
            status: c.id === "done" ? "done" : "todo",
        }
        setTask(prevTask => [...prevTask, newTask])
        updateForm(false);
        enableButton("")
        onUpdateDate()
    
        // childToParent()
    }
    
    const handleReset = (e) => {
    e.preventDefault()
    updateForm(false)
    enableButton("")

    }

    const handleTextChange = (event) => {
        enableButton(event.target.value);

    };

    const onDeleteTask = (id) => {
        setTask((prevTasks) => prevTasks.filter(task => task.id !== id)) // filtra los que no cumplen el id
    }

    const filter = e => {
        const val = e.target.value.toLowerCase(); // valor del input
        const arrFiltered=task.filter(c=>c.title.toLowerCase().includes(val))
        updateTaskFiltered(arrFiltered)
      }
       
    return (
        <>

            <div className='column__container'>

                <section className='header__column'>

                    <article className='counter-title'>
                        <div className='counter' >{task.length}</div>
                        <span>{c.title}</span>
                    </article>

                    <span onClick={openForm}><AiOutlinePlus></AiOutlinePlus></span>
                </section>

                {
                    form ?
                        <form openForm={openForm} onSubmit={handleSubmit}  onReset={handleReset} >
                            <textarea className='textArea' onChange={handleTextChange} name='title' cols="30" rows="10" placeholder='Enter a note' value={text}></textarea>
                            <div className='buttons-form__container'>
                                <button type='submit'className='addButton' disabled={!text}>Add</button>
                                <button type='reset' className='cancelButton'>Cancel</button>




                            </div>
                        </form>
                        : ''
                }

                {/* onReset={handleReset}
                onChange={handleButton}
                 */}

                {
                    task.map((t, i) => <Task key={i} task={t} onDeleteTask={onDeleteTask}></Task>)
                }

            </div>
        </>
    )
}

export default Column