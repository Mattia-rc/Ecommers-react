import React from 'react'
import CartWidget from './CartWidget'

export default function NavBar() {
  return (
    <nav>
        
        <ul className='navFlex'>
     
          <li>Home</li>
          <li>Productos</li>
          <li>Contacto</li>
          <CartWidget/>
        </ul>
    </nav>
  )
}
