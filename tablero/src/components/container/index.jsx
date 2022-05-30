import './style.css'
import Column from '../column'
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';
import Task from '../task';

function Container () {

  let arraycolumnas = [
    { id:'todo',
      title: 'To do',
      array: [<Task></Task>]
    },

    { id:'inprogress',
      title: 'In progress',
      array: [Task]
    },

    { id:'done',
      title: 'Done',
      array: [Task]
    }
]

    const date = new Date();
    const [month, day] = [(date.getMonth()), date.getDate()];
    const wrtMonth = new Intl.DateTimeFormat('en-EN', { month: 'short'}).format(new Date());

    const [task, setTask] = useState([]);

    const onAddTask = () => {

      const taskCard = {
          // id,
          // title
          // state,
          // creation
      }
  
     setTask(taskCard) //push
    
  }

    return(
        <>
        <section className='input-date__container'>
        <article>
            <p>Version 1.0</p>
            <p>Updated on {day} {wrtMonth}</p>
        </article>
        <div className='input__container'>
        <div className='search-icon'>
        <AiOutlineSearch></AiOutlineSearch>
        </div>
        
        <input className='task-selector' type="text"  placeholder='      Filter Cards'  />
        </div>
       

        </section>
          

            <main className='main__container'>

                {arraycolumnas.map(c => <Column key={c.id} c={c} onAddTask={onAddTask}></Column>)}
           
            </main>
           

        </>
    )
}

export default Container