
import { useEffect, useState } from "react";
import useData from "./context/hooks/useData";
const Card = ({id,name,price,available, selectedCount, total}) => {
  const {state:{products},dispatch} = useData();
  const [disableAddBtn,setDisableAddBtn] =useState(false);
  const [disableSubBtn,setDisableSubBtn] =useState(true);
  useEffect(()=>{
   if(available===selectedCount){
    setDisableAddBtn(true)
   }
   else{
    setDisableAddBtn(false)
   }
   if(selectedCount===0){
    setDisableSubBtn(true);
   }
   else{
    setDisableSubBtn(false);
   }
    
  },[available,selectedCount,dispatch]

  )
  const handleAdd=(prodid)=>{
   const list=products.map(prod=>prod.id===prodid?{...prod,selectedCount:prod.selectedCount+1, total:((prod.selectedCount+1)*prod.price).toFixed(2)}:prod);
   const cart=products.find(each=>each.id===prodid);
   dispatch({type: "addToCart",payload:cart});
   dispatch({type:"load",payload:list})
  }
  const handleSub=(prodid)=>{
    let list=products.map(prod=>prod.id===prodid?{...prod,selectedCount:prod.selectedCount-1, total:(prod.total-prod.price).toFixed(2)}:prod);
    dispatch({type:"removeFromCart",id:prodid})
    dispatch({type:"load",payload:list})
   }
  return (
    <div className='card'>
    <p>Name: {name}</p>
    <p>Price: ${price}</p>
    <p>Available: {available}</p>
    <p>{selectedCount}</p>
    <p>{total}</p>
    <button onClick={()=>handleAdd(id)} disabled={disableAddBtn} style={{background: disableAddBtn!==true?"blue":null, color: disableAddBtn!==true?"#fff":"black"}}>+</button>
    <button onClick={()=>handleSub(id)} style={{background: disableSubBtn===false?"blue":null, color: disableSubBtn===false?"#fff":"black"}} disabled={disableSubBtn}>-</button>
  </div>
  )
}

export default Card;