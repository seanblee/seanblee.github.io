import React from 'react';

function Header(props){
  function wipText(){
    return props.wip ? 'Work in Progress!' : '';
  }
  return (
    <header>
      <div className = "namehook">
        <h1>{props.name}</h1>
        <h2><a href={"mailto:" + props.email}>&lt;{props.email}&gt;</a></h2>
        <h2>{wipText()}</h2>
      </div>
    </header>
  );
}

export default Header;
