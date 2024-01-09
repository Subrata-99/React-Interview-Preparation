import React, { useEffect, useState } from 'react'
import useCustomEffect from './useCustomEffect'

const CustomUseEffectComponent = () => {
    const [showData, setShowdata] = useState()

    //React useEffect
    // useEffect(() => {
    //     fetchData()
    // }, [])

    //Custom useEffect
    useCustomEffect(() => {
        console.log("Custom useEffect");
        // fetchData()
    }, [])

    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            if (!response.ok) throw new Error('Response not okay')
            const parsedData = await response.json()
            console.log('data: ' + JSON.stringify(parsedData));
            setShowdata(parsedData)
        } catch (error) {
            console.log('error: ' + error);
        }
    }

    return (
        <>
            <div>Custom UseEffect Component</div>
            <p>{JSON.stringify(showData)}</p>
        </>
    )
}

export default CustomUseEffectComponent