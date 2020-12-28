'use strict';
import React from 'react';
import catalog from './catalog.json';
import Catalog from './catalog';
import ItIs from './itIs';
export default class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            value: catalog,
            itIs: catalog
        };
    }
    updateCatalog = (value) =>{
        this.setState({itIs:value});
    }
    render(){
        return <div className = 'root'>
                    <form action="">
                        <input type="text" onChange = {this.handleChange} placeholder = 'Поиск...'/>
                    </form>
                    <ItIs products = {this.state.value} updateCatalog = {this.updateCatalog}/>
                    <Catalog products = {this.state.value} itIs = {this.state.itIs}/>
                </div>           
    }
    search = (value) =>{
         this.setState(this.state.value = catalog.map((el) =>
            el.name.toLowerCase().includes(value.toLowerCase()) ? el : false) 
         );    
    } 
    handleChange = (event) =>{        
        this.search(event.target.value);
    }
}