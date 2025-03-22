import {useEffect, useState} from 'react'

export function Contador(){
    const [contador, setContador] = useState(0);

    const [mensaje, setMensaje] = useState('')

    const incrementar = () => {
        setContador(prev => prev + 1)
    }

    const decrementar = () => {
        setContador(prev => prev - 1)
    }

    const resetear = () => {
        setContador(0)
    }

    useEffect(() => {
        console.log('Inicia función...')
    },[] )

    useEffect(() => {
        console.log(`Contador modificado: ${contador}`)
    }, [contador])

    useEffect(() => {
        console.log(`Mensaje modificado: ${mensaje}`)
    }, [mensaje])


    return (
        <>
            <p>Contador: {contador}</p>
            <button onClick={incrementar}>Incrementar</button>
            <button onClick={decrementar}>Decrementar</button>
            <button onClick={resetear}>Resetear</button>
            <hr/>
            <p>Mensaje: {mensaje}</p>
            <input type='text' onChange={(e) => setMensaje(e.target.value)} placeholder='Escriba algo...'/>

        </>
    )

}