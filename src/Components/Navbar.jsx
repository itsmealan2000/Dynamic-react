import React from 'react'
import './Navbar.css'
import logo from '/avj.png'

function Navbar() {
  return (
    <>
    <nav class="navbar bg-body-tertiary">
    <div class="container w-50">
      <img src={logo} className='ms-auto me-auto navlogo'  alt="" />
  </div>
</nav>
    </>
  )
}

export default Navbar