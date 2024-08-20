import Bar from './Bar';
import Product from './CartProduct';

function Cart() {
  return (
    <div >
     <Bar/> 
     <div style={{backgroundColor:'white', textAlign:'center',  width:'700px', margin:'20px', marginLeft:'300px', padding:'2px'}}>
      <h1 style={{backgroundColor:'#DAF7A6', textAlign:'center', marginTop:'20px'}}>CARRITO</h1>
     <Product/>
    </div> 
    </div>
  
  );
}

export default Cart;