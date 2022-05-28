import './style.css'

function Form({createTask}) {

    return(
        <>
        <form action="">
            <textarea name="" id="" cols="30" rows="10" placeholder='Enter a note'></textarea>
            <button onSubmit={createTask}>Add</button>
            <button>Cancel</button>
        </form>
        </>
    )
}

export default Form