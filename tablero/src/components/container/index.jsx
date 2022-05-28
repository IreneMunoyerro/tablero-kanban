import './style.css'
import Column from '../column'
import { AiOutlineSearch } from 'react-icons/ai';

function Container () {

    const date = new Date();
    const [month, day] = [date.getMonth(), date.getDate()];

    console.log(month)

    // date.toLocaleString()

    // Date.prototype.toDateString()
    //.toLocaleString()

    let arraycolumnas = [
        { id:1,
          title: 'To do'
        },

        { id:2,
          title: 'In progress'
        },

        { id:3,
          title: 'Done'
        }
    ]

    return(
        <>
        <section className='input-date__container'>
        <article>
            <p>Version 1.0</p>
            <p>UPDATE ON {day} {month}</p>
        </article>
        <div className='input__container'>
        <div className='search-icon'>
        <AiOutlineSearch></AiOutlineSearch>
        </div>
        
        <input className='task-selector' type="text"  placeholder='      Filter Cards'  />
        </div>
       

        </section>
          

            <main className='main__container'>

                {arraycolumnas.map(c => <Column key={c.id} c={c}></Column>)}
            {/* <Column></Column>
            <Column></Column>
            <Column></Column> */}
            </main>
           

        </>
    )
}

export default Container