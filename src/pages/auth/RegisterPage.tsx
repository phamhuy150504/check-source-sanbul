import Register from '@/sections/auth/Register'
import React from 'react'
import { Helmet } from 'react-helmet-async'

const RegisterPage = () => {
  return (
    <>
    <Helmet>
      <title>Register | Baccarat Game</title>
    </Helmet>

    <Register/>
    </>
  )
}

export default RegisterPage