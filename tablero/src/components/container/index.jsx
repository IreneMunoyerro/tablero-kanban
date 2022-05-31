import './style.css'
import Column from '../column'
import { AiOutlineSearch } from 'react-icons/ai';
import { useState } from 'react';
// import Task from '../task';

function Container () {

  const [date, updateDate] = useState("");


  
  const onUpdateDate = () => {
    const today = new Date();
    const fecha = today.getDate() + (" ") + new Intl.DateTimeFormat('en-EN', { month: 'short'}).format(new Date());
      updateDate(fecha)
    };

  let arraycolumnas = [
    { id:'todo',
      title: 'To do',
    },

    { id:'inprogress',
      title: 'In progress',
    },

    { id:'done',
      title: 'Done',
   
    }
]
// const filter = e => {
//   const val = e.target.value.toLowerCase(); // valor del input
//   const arrFiltered=taskFilter.filter(c=>c.name.toLowerCase().includes(val))
//   updateTaskFiltered(arrFiltered)
// }
 

    const childToParent = (childdata) => {
      setCard(childdata);
    }
  
    function handleAction(event) {
      console.log('Child did:', event);
  }

  
     const handleComunication = ()=>{
      console.log('funcion de prueba');
    };

   
    return(
        <>

        {/* <Column onAction={handleAction} /> */}

        {/* <Column onAction={handleComunication} /> */}

        <section className='input-date__container'>
        <article>
            <p>Version 1.0 </p>
            <p>Updated on {date}</p>
        </article>
        <div className='input__container'>
        <div className='search-icon'>
        <AiOutlineSearch></AiOutlineSearch>
        </div>
        
        <input className='task-selector' type="text"  placeholder='      Filter Cards'  />
        </div>
       
        </section>
          {/* childToParent={childToParent} */}

            <main className='main__container'>

                {arraycolumnas.map(c => <Column key={c.id} c={c} onUpdateDate={onUpdateDate} ></Column>)}
           
            </main>
           

        </>
    )
}

export default Container