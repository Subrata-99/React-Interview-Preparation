import React, { useState } from 'react'
import { withCounter } from './withCounter'

const Counter2 = ({ handleCount }) => {

    return (
        <button onMouseOver={handleCount}>Counter</button>
    )
}

export default withCounter(Counter2)