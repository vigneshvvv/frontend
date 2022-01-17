
import './App.css';
import Item from "./Topbar";

import Product from "./Products";
import Book from "./book2.jpg"
import Books from "./book.jpg"
import Boo from "./book3.jpg"
import New from "./book4.jpg"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div class="content">
          <Item />
        </div>
        <div class="background">
          
           <h1>Library is a Place Vibrating with IDEAS<br /> Read more Learn more</h1>  
        </div>
        <div className="productdetail">
          <h1>The List of books Available in our library </h1>

          <ul>
            <li className='books'><Product  name ="CIA" img= {Book} price="$200"/></li>
            <li className='books'><Product name="Mossad secret service" img={Books} price="$500" /></li>
            <li className='books'><Product name="The Iluminati" img={Boo} price="$300"/></li>
            <li className='books'><Product name="The Rise Of NAGAS" img={New} price="$900" /></li>
          </ul>
           
          
          
          
        </div>  
        
      </header>  
    </div>
  );
}

export default App;
