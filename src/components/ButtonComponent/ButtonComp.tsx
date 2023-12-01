import style from './style.module.css'
import React from 'react'
interface IButtonComponent{
    text:string;
    handleClick:() => void;

}
const ButtonComp = ({text,handleClick}:IButtonComponent) => {
  return (
    <div className={style.goldenBtn}>
        <button onClick={handleClick}>{text}</button>
    </div>
  )
}

export default ButtonComp