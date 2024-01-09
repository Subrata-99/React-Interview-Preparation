import React, { useState } from 'react'

export const withCounter = (OriginalComponent) => {
    const NewComponent = () => {
        const [count, setCount] = useState(0)
        const handleCount = () => {
            setCount(count + 1)
        }

        return (
            <>
                <div>Count: {count}</div>
                <OriginalComponent handleCount={handleCount} />
            </>
        )
    }
    return NewComponent
}
