import {useEffect} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Outlet } from 'react-router-dom';



import useData from '../components/context/hooks/useData';
import Aside from '../components/Aside';

const Main = () => {
  const {state:{sortBy},dispatch}=useData();
  useEffect(()=>{
   const reStruc=(prod)=>{
     return prod.map(each=>(
      {...each,selectedCount:0.00,total:0}
     ))
   }
   const fetchProducts=async()=>{
     try{
      const response=await fetch("/products.json");
      if(!response.ok) throw new Error("something went wrong");
      const prods=await response.json();

      let products=reStruc(prods.products);
      products=products.sort((a,b)=>a[sortBy]>b[sortBy]?1:-1);
      console.log(products);
      dispatch({type:"load",payload:products});

     }
     catch(e){
      console.log(e);
     }
      

   }
    setTimeout(()=>{
   fetchProducts();
  },2000
    )
  },[sortBy,dispatch]);
  return (
    <>
    <Header/>
    <main>
      <div className="container">
      <Aside/>
      <Outlet/>
      
      
      </div>
    </main>
    <Footer/>
    </>
  )
}

export default Main;