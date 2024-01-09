import React, { useRef } from 'react'

const useCustomEffect = (callback, depsArr) => {
    const isFirstRender = useRef(true)// we took ref as it persists between rerenders. so data won't be reinitialized.
    const prevDeps = useRef([]) // For tracking dependencies

    //1. We have to handle 1st render case.
    if (isFirstRender.current) {
        isFirstRender.current = false
        callback()
        return
    }
    //2. Dependencies changes and no dependency array condition.
    const depsChanged = depsArr ?
        JSON.stringify(depsArr) !== JSON.stringify(prevDeps)
        : true // true as if theres no dependencies we can handle the scenario where

    if (depsChanged) callback()

    //3. Cleanup


    prevDeps.current = depsArr || []
    return (
        <div>useCustomEffect</div>
    )
}

export default useCustomEffect