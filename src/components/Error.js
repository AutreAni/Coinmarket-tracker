import React from 'react'

const Error = ({ message }) => {
    console.log(message);
    return (
        <div className = "container"
        style = {{textAlign: "center"}}>
            <h1 className = "error">
                We are sorry. Something went wrong
            </h1>
            <p>
                { message }
            </p>
        </div>
    )
}

export default Error