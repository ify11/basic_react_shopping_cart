import Card from '../components/Card';
import loading from '../images/loading.gif';
import useData from '../components/context/hooks/useData';

const Home = () => {
  const {state:{products}}=useData();

  return (
    <section>
    <h2>Products</h2>
    <div className='card-container'>

     {
     products.length!==0? products.map(each=>(
        <Card key={each.id} id={each.id} name={each.name} price={each.price} available={each.availableCount} selectedCount={each.selectedCount}
         total={each.total}/>
        )):<p><img src={loading} alt=""/></p>
        
        }
      
      
    </div>
        
      
        
   </section>
  )
}

export default Home