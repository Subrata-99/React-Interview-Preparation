import React, { useEffect, useRef } from 'react'

//Function to compare each dependency array elements
const areEqual = (prevDeps, nextDeps) => {
    if (prevDeps === null) return false
    if (prevDeps.length !== nextDeps.length) return false

    for (let i = 0; i < prevDeps.length; i++) {
        if (prevDeps[i] !== nextDeps[i]) return false
    }

    return true
}

const useCustomMemo = (callback, depsArr) => {
    //1. variable to store cached value
    //Here we are using refs to store as for nromal and useState variables, state anyways get lost if component reloads.
    const memoizedRef = useRef()
    //2.Changes in deps
    if (!memoizedRef.current || !areEqual(memoizedRef.current.depsArr, depsArr)) {
        memoizedRef.current = {
            value: callback(), //To store the value
            depsArr // store the dependencies so that later we can compare them
        }
    }
    //3.Clean up while unmounting
    useEffect(() => {
        return () => memoizedRef.current = null
    }, [])
    //4.Return memoized value
    return memoizedRef.current.value;
}

export default useCustomMemo