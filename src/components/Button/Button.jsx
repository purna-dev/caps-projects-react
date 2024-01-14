import React from 'react'
import style from './Button.module.css'

function Button(props) {
  console.log(props)
  return (
    <button className={style.btn_submit} onClick={props.onClick}>SIGN UP</button>
  )
}

export default Button