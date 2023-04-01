import React from 'react'
import { Calculator } from '../../modules/Calculator'

const First = () => {
  const calc = new Calculator();
  const SOME_TEXT = "hello"
  const arr = [1, 2, 3, 4, 5];
  function calcTwoNumbers(a, b) {
    return a + b
  }
  return (
    <>
      <h2>Test component</h2>
      <p>{SOME_TEXT}</p>
      <p>{calcTwoNumbers(2, 4)}</p>
      <p>{calc.sum(2, 6)}</p>
      <div>
        {
          arr.map((el) => {
            return (
              <p>{el}</p>
            )
          })
        }
      </div>
    </>
  )
}

export default First