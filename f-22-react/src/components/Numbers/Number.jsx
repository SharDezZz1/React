import React from 'react'
import s from "./Number.module.css"

const Number = ({number}) => {
  return (
    <>
        <h1 className={s.title}>Number - {number}</h1>
    </>
  )
}

export default Number