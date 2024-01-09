import React, { useState } from 'react'
import { withCounter } from './withCounter'

const Counter1 = ({ handleCount }) => {

    return (
        <button onClick={handleCount}>Counter</button>
    )
}

export default withCounter(Counter1)