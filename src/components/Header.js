import React from "react";
const Header = (props) =>{
    const today = new Date(),
    date = today.getHours() + ':' + today.getMinutes();

    return(
        <header>
            <h1 >{props.title}</h1>
            <p>{date}</p>
        </header>
    )
}


export default Header