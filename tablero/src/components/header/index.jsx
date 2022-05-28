import './style.css'
import logo from '../../assets/logo.png'
import { BsKanban } from 'react-icons/bs';

function Header () {
    return(
      <>
      <header className='header__container'>

        <img className='logo-neoland' src={logo} alt="" />

        <section className='version__container'>
    
            <span>
            <BsKanban></BsKanban>
            </span> 
            <span>Version 1.0</span>
        </section>



      </header>
      </>
    )
}

export default Header