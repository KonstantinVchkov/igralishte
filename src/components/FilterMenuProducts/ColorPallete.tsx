import React from 'react'
import style from "./style.module.css"
const ColorPallete = () => {
    const chooseColor = (e:any) => {
        console.log(e.target.value)
    }
  return (
    <div className={style.ColorPallete}>
        <div className={style.colorSquare} style={{ backgroundColor: '#FF835E' }}></div>
        <div className={style.colorSquare} style={{ backgroundColor: '#FBC26C' }}></div>
        <div className={style.colorSquare} style={{ backgroundColor: '#FCFF81' }}></div>
        <div className={style.colorSquare} style={{ backgroundColor: '#B9E5A4' }}></div>
        <div className={style.colorSquare} style={{ backgroundColor: '#75D7F0' }}></div>
        <div className={style.colorSquare} style={{ backgroundColor: '#FFDBDB' }}></div>
        <div className={style.colorSquare} style={{ backgroundColor: '#EA97FF' }}></div>
        <div className={style.colorSquare} style={{ backgroundColor: '#D9D9D9' }}></div>
        <div className={style.colorSquare} style={{ backgroundColor: '#FFFFFF' }}></div>
        <div className={style.colorSquare} style={{ backgroundColor: '#232221' }}></div>
    </div>
  )
}

export default ColorPallete