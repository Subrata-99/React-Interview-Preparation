import React, { useEffect, useState } from 'react'

const UseEffectHook = () => {
    const [showData, setShowdata] = useState()

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const parsedData = await data.json()
        console.log('data: ' + JSON.stringify(parsedData));
        setShowdata(parsedData)
    }

    return (
        <>
            <div>UseEffectHook</div>
            <p>{JSON.stringify(showData)}</p>
        </>
    )
}

export default UseEffectHook