'use client'

import React from 'react'
import {withAuth} from '../Component/Auth/auth'


const HigherOrder = () =>{
    return (
        <>
        <p>This is protected routes using the Higher Order Components</p>
        </>
    )
}




export default withAuth(HigherOrder)