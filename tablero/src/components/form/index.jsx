import './style.css'

function Form({addTask}) {

    return(
        <>
        <form action="">
            <textarea name="" id="" cols="30" rows="10" placeholder='Enter a note'></textarea>
            <button onClick={addTask}>Add</button>
            <button>Cancel</button>
        </form>
        </>
    )
}

export default Form