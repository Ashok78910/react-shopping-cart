// feature 1
import  {Component} from 'react';
import React from 'react';
import Data from './data.json';
import Product from './components/products'

class App extends Component{
  constructor(){
    super()
    this.state = {
       products:Data.products,
       size : "",
       sort:""
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
