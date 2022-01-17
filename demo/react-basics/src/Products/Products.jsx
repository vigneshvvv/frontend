import "./Products.css";
import React from "react";
//import Imge from "./book.jpg";


function template() {
  return (
    <div className="products">
      <li class="product">
        <a href="index.html">
          <img
          width="200"
          height="200"
          alt="T_4_front"
          class="attachement"
          src={this.props.img}/>
          <h3>{this.props.name}</h3>
          <h2>{this.props.price}</h2>
          
          
        </a>
      </li>
    </div>
  );
};

export default template;
