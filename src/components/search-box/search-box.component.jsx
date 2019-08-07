import React from 'react';
import "./search-box.styles.css";
export const Searchbox = (props,handlechange)=>{
   return <input className = " search" type="search" placeholder={props.placeholder}
    onChange={props.handlechange}></input>;
     
};