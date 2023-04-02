import React from 'react'
import s from "./Card.module.css"

const Card = ({ post, ...params }) => {
    const { title, body, id } = post;

    return (
        <>
            <div className={s.card}>
                <h2>{title}</h2>
                <p>{body}</p>
                <button onClick={() => {params.delete(id);}}>Delete</button>
            </div>
        </>
    )
}

export default Card