import React from "react";
import queryString from "query-string"
import Box from './Box'
function Des(){
    const queryParams = queryString.parse(window.location.search)
console.log(queryParams);

    return (
        <div> 
      {queryParams.name?queryParams.name:false}
        <h1>This is our site description</h1>
        <Box name="HTML" bgc="green"/>
        <Box name="CSS" bgc="red"/>
        <Box name="JS" bgc="aquamarine"/>
        <Box name="PHP" bgc="blueviolet"/>
        <Box name="React JS" bgc="pink"/>
        <Box name="Angular Js" bgc="violet"/>
    </div>)
}

export default Des;