
import logo from '../images/mib.png'
import {FaCartPlus} from 'react-icons/fa'
import useData from './context/hooks/useData'
import { Link } from 'react-router-dom'


const Header = () => {
  const {state:{cart}}= useData();

  const totalOrders=cart.length;
  




  return (
    
    <header>
        <div className='container'>
           
             <Link to="/"><img src={logo} alt=""/></Link>

             <div className='svg'><Link to="/cart"><FaCartPlus/><small className='badge'>{totalOrders}</small></Link></div>

             
             

        </div>
    </header>
  )
}

export default Header