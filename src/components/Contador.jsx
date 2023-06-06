import React from 'react';
import { useCount } from "../hooks/useCount";

const Contador = () => {
    const { count, increment, decrement, reset } = useCount({ initial: 0, min: 0, max: 50 });

    return (
        <div>
            <div>{count}</div>
            <button onClick={increment}>Sumar</button>
            <button onClick={decrement}>Restar</button>
            <button onClick={reset}>Reiniciar</button>
        </div>
    );
}

export default Contador;
