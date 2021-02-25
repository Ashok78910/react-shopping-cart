// feature 1
import  {Component} from 'react';
import React from 'react';
import Data from './data.json';
import Product from './components/products'
import Filter from './components/Filter';

class App extends Component{
  constructor(){
    super()
    this.state = {
       products:Data.products,
       size : "",
       sort:""
    }
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
            : a._id < b._id
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
         <Product products = {this.state.products}/>
         </div>
         <div className = 'sidebar'>
           Cart items
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
