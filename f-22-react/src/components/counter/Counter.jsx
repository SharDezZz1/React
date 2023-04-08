import React, {useEffect, useMemo, useState} from 'react'
import s from './Counter.module.scss'

const Counter = () => {
    const [counter, setCounter] = useState(0);
    const [userData, setUserData] = useState({
        name: "",
        surname: "",
    });
    useEffect(() =>{console.log("TEst")}, [counter]);
    let total = useMemo(() => {
        return counter + 1;
    }, [counter])
    return (
        <>
            <div className="wrapper">
                <div className={s.counter}>{counter} {total}</div>
                <button className={s.btn} onClick={(e) => {setCounter(counter + 1)}}>+1</button>
                <button className={s.btn} onClick={(e) => {setCounter(counter - 1)}}>-1</button>
            </div>
            <form action="">
                <input onChange={(e) => {setUserData({...userData, name: e.target.value})}} type="text" placeholder='Enter your name' />
                <input onChange={(e) => {setUserData({...userData, surname: e.target.value})}} type="text" placeholder='Enter your surname' />
                <p>{userData.name}</p>
                <p>{userData.surname}</p>
            </form>
        </>
    )
}

export default Counter