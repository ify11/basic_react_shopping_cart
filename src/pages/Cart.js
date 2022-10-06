import {useState, useEffect} from 'react'
import useData from '../components/context/hooks/useData';
const Cart = () => {
    const {state:{cart,sortBy}} = useData();
    const [items,setItems]= useState([]);
    
    useEffect(()=>{
      const compare=(a,b)=>{
        return a[sortBy]>b[sortBy]?1:-1;
      }
     const cartitems=cart.sort(compare);
     setItems(cartitems);
    },[cart,sortBy])
   
   
  return (
    <div className='cart-list'>
    <h2>Cart Summary</h2>
    <ul>
      {items.length>0?
      (items.map(each=>(
        <li key={each.id}> {each.name}   : ${each.price}</li>
        )))

      :<p>Your cart is empty !</p>
        
      }
    

    </ul>
  
    </div>
  )
}

export default Cart;