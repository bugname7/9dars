import React from 'react'
import Product from './(routes)/products/page'
import Blog from './(routes)/blog/page'
import Weather from './(routes)/weather/page'
import UserInfo from './(routes)/user/page'

function Home() {
  return (
    <div>
      <h1 className='text-4xl font-medium text-center text-white bg-black py-2'>Asosiy sahifa</h1>
      <UserInfo />
      <Weather />
      <Blog />
      <Product />
    </div>
  )
}

export default Home
