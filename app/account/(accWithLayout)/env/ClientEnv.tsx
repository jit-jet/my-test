"use client"

import React from 'react'

export default function ClientEnv() {
  return (
    <div className='m-6'>
        <h1>Environment Variables in client side</h1>
        <p>
            simple env :{process.env.SIMPLE_ENV}
        </p>
        <p>
        NEXT_PUBLIC : {process.env.NEXT_PUBLIC_SIMPLE_ENV}
        </p>
    </div>
  )
}