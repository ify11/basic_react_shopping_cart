import {useState,useMemo} from 'react'

import useData from './context/hooks/useData';
const Filter = () => {
  const [discount,setDiscount]=useState(0);
  const {state:{products},dispatch}=useData();
  
  const [radioValue,setRadioValue]=useState("price");
  const handleSort=(e)=>{
    const name=e.target.name;
    setRadioValue(name);
    dispatch({type:"sort",sortBy:name})
  }
  const getTotal=(p)=>{
    let  total=0;
    for(let v of p){
      total+=parseFloat(v.total);
       

    }
    if(total>1000){
      const dis= (0.1*total).toFixed(2);
      setDiscount(dis);
      total=total-dis;

    }
    else{
      setDiscount(0);
    }
    return total.toFixed(2);
  }
  const totalAll=useMemo(()=>getTotal(products),[products]);
  return (
  <div className='filter'>
      <h2>Filter</h2>
      <ul>
        <li><input type="radio" name='price' onChange={handleSort} checked={"price"===radioValue}/> Filter by Price </li>
        <li><input type="radio" name='availableCount' onChange={handleSort} checked={"availableCount"===radioValue}/> Filter by Availability </li>
        <li><input type="radio" name='name' onChange={handleSort} checked={"name"===radioValue}/> Filter by Name </li>
      </ul>
      
   {totalAll>0?<p>Total: {totalAll}</p>:<i>Total cost will appear here</i>}
   {discount>0?<p>Discount: {discount}</p>:<i>Discount will appear here if any</i>}
  </div>
  )
}

export default Filter