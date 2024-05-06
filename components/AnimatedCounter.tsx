'use client'
import React from 'react'
import CountUp from 'react-countup'

const AnimatedCounter = ({ amount }: { amount: number }) => {
    return (
        <div>
            <CountUp 
            decimals={2}
            decimal='.' 
            prefix='$' 
            duration={1.75}
            end={amount} />
        </div>
    )
}

export default AnimatedCounter