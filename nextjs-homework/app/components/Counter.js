'use client';
import { useState } from 'react';

export default function Counter({ increment, color}){
    const [count, setCount] = useState(0);

    const handleClick = () => {
        const newCount = count + increment;
        setCount(newCount > 10 ? 0 : newCount);
    };

    return (
        <div style={{ margin: '1em'}}>
            <h3>Counter (increments by {increment}) </h3>
            <p>Count: {count}</p>
            <button
                onClick={handleClick}
                style={{
                    backgroundColor: color,
                    color: 'white',
                    border: 'none',
                    padding: '0.5em 1em',
                    cursor: 'pointer',
                }}
            >
                Increment
            </button>
        </div>
    );
}