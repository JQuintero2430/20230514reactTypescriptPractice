import React from 'react';

interface TodoProps {
    todo: string;
    status?: "active" | "inactive";
}

export const Todo: React.FC<TodoProps> = ({todo, status}) => { 
    const handleClick = () => {
        console.log("clicked");
    }


    return (
    <>
    <i>{todo}</i>
    <h2>{status}</h2>
    <button onClick={handleClick}>Change Text</button>
    </>
    )
 }