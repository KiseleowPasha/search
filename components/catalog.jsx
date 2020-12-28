'use strict';
import React from 'react';
export default class Catalog extends React.Component{
    constructor(props){
        super(props);
    }
    update(){
        this.products = [];
        for(let i = 0; i < this.props.products.length; i++ ){
            if(this.props.products[i].name == this.props.itIs[i].name) this.products.push(this.props.products[i]);
                else this.products.push(false);
        }
    }
    render () {
        this.update();
       const catalogItems = this.products.map((el,index) =>
       el ?
           <div className = 'product' key = {index}>
                <h3 className = 'product-title'>{el.name}</h3>
                <picture className = 'product-pic-container'>
                    <img src = {el.img} className = 'product-pic'></img>
                </picture>
                <span className = 'product-price'>{el.price}$</span>
                {el.itIs ? <span className = 'yes'>Есть в наличии</span> : <span className = 'no'>Нет в наличии</span>}  
           </div>
           : null
        );
       return catalogItems;
    }
}

