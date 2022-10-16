import React from "react";
import './Box.css'

function Box(props){

    return (
<div className="box" style={{backgroundColor: `${props.bgc}`}}>
    <div className="left">
    <h1> {props.name}</h1>
    <button>Read {props.name}</button>
    <button>{props.name} Reference</button>
    </div>
    <div className="right">
    <div className="code">
         HTML stands for Hyper Text Markup Language 
         HTML is the standard markup language for creating Web pages
         HTML describes the structure of a Web page
         HTML consists of a series of elements
         HTML elements tell the browser how to display the content
         HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.
    </div>
    </div>
</div>
    )
}

export default Box;