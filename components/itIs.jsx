'use strict';
import React from 'react';
export default class ItIs extends React.Component{
    constructor(props){
        super(props);
        this.products = props.products;
        this.state = {
            value: this.products,
        }
    }
    render(){
        return <div className = 'checkbox'> 
            Показать только в наличии
            <input type="checkbox" onChange = {this.handleChange}/>
        </div> 
    }
    handleChange = (event) =>{
        if(event.target.checked)
            this.setState(this.state.value = this.products.map(el =>
                el.itIs ? el : false
            ))
            else this.setState(this.state.value = this.products);
        this.props.updateCatalog(this.state.value);
    }
}