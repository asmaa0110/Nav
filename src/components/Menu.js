import React from 'react';
import './menu.css'


const tab = [
    {name:'Home',link:'https://reactjs.org/docs/getting-started.html',isOption : false , class:"testes"},
    {name:'Services',link:'https://www.youtube.com/watch?v=3jWRrafhO7M&t=10255s',isOption : true, class:"navigate"},
    {name:'Contact',link:'https://ada.gomycode.tn/checkpoints/f415b0f2-b5a9-457a-b9a6-abc66e90c3ed',isOption : false, class:"testes"}
]

const MainMenu = (props) => <div className="main-menu">

<div className={props.test.class}>

<a href={props.test.link}><h1 className={`name`}>{props.test.name}</h1></a>
{props.test.isOption &&   
  <div className="tabs"> 
            <a className="tab">For students</a>
            <a className="tab">For entrepreneurs</a>
            <a className="tab">For hobbyists </a>
        </div> }
  </div> 
</div>

const Menu = () => ( 
    <div className="places">
{tab.map( el => <MainMenu  test={el}/>)}
    </div>
);

export default Menu;
