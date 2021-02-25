// feature 1
import  {Component} from 'react';
import React from 'react';
import Data from './data.json';
import Product from './components/products'
import Filter from './components/Filter';
import Cart from './components/cart';

class App extends Component{
  constructor(){
    super()
    this.state = {
       products:Data.products,
       cartItems:[],
       size : "",
       sort:""
    };
  }
  removefromcart = (product)=>{
    const cartItems = this.state.cartItems.slice();
    this.setState({cartItems: cartItems.filter(x => x.id !== product.id )})
}

  addTOCart  = (product) =>{
    const cartItems = this.state.cartItems.slice();
    let alreadyincart = false; 
    cartItems.forEach((item) => {
        if(item.id === product.id){
          item.count+=item.count;
          alreadyincart = true;
        }
      });
      if(!alreadyincart){
        cartItems.push({...product,count:1})
      }
      this.setState({cartItems});
  }
  sortproducts = (event) =>{
    const sort = event.target.value;
    console.log(sort);
   
    this.setState((state) => ({
        
        sort : sort,
        products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === "lowest"
            ? a.price > b.price
              ? 1
              : -1
            : sort === "highest"
            ? a.price < b.price
              ? 1
              : -1
            : a.id < b.id
            ? 1
            : -1
        ),
    }));
  };
  filterproducts = (event) => {
    console.log(event.target.value);
    if(event.target.value === ''){
      this.setState({size:event.target.value, products : Data.products});
    }else{
    this.setState({
      size:event.target.value,
      products:Data.products.filter(
        (product) => product.availablesizes.indexOf(event.target.value) >= 0
      ),
    });
  }
}


 render (){
   return( 
   <>
    <div className = 'grid-container'>
      <header>
        <a href ='/'>React shopping cart</a>
      </header>
      <main>
       <div className = 'content'>
         <div className = 'main'>
         <Filter count= {this.state.products.length}
           size = {this.state.size}
           sort = {this.state.sort}
           filterproducts = {this.filterproducts}
           sortproducts = {this.sortproducts}
         ></Filter>
         <Product products = {this.state.products} 
         addTOCart = {this.addTOCart}/>
         </div>
         <div className = 'sidebar'>
           <Cart cartItems = {this.state.cartItems} removefromcart = {this.removefromcart}/>
         </div>
       </div>
      </main>
      <footer>
        All right is reserved
      </footer>

    </div>
    </>)
  }
}

export default App;
