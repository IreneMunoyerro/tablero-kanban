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

    
    const [card, setCard] = useState([]);
    

    const childToParent = (childdata) => {
      setCard(childdata);
    }
  //   function handleAction(event) {
  //     console.log('Child did:', event);
  // }

  
        
    const handleComunication = ()=>{
      console.log('funcion de prueba');
    };
    
    const onAddTask = () => {
    
      
      // const taskCard = {
          
      // }
  
     setTask(taskCard) //push
    
  }

    return(
        <>

        {/* <Column onAction={handleAction} /> */}

        {/* <Column onAction={handleComunication} /> */}

        <section className='input-date__container'>
        <article>
            <p>Version 1.0 {JSON.stringify({card})}</p>
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

                {arraycolumnas.map(c => <Column key={c.id} c={c} onAddTask={onAddTask} childToParent={childToParent} ></Column>)}
           
            </main>
           

        </>
    )
}

export default Container