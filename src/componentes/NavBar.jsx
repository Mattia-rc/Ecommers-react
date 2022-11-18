import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <nav>
        
        <ul className='navFlex'>
     
          <Link to="/category/">Home</Link>
          <li>Productos</li>
          <li>Contacto</li>
          <CartWidget />
        </ul>
    </nav>
  )
}
