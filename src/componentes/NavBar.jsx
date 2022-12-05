import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <nav>
        
        <ul className='navFlex'>
        <Link to="/">Home</Link>
        <Link to="/category/keyboard-Mouse">Keyboard y Mouses</Link>
 
       
        <Link to="/category/Mousepad-Monitor">Monitores y Mousepad</Link>
      
          <Link to = "/carrito/"><CartWidget /></Link>
        </ul>
    </nav>
  )
}
