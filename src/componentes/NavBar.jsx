import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <nav>
        
        <ul className='navFlex'>
        <Link to="/" className='navbarText'>Home</Link>
        <Link to="/category/keyboard-Mouse" className='navbarText'>Keyboard y Mouses</Link>
 
       
        <Link to="/category/Mousepad-Monitor" className='navbarText'>Monitores y Mousepad</Link>
      
          <Link to = "/carrito/" className='colorIcon' ><CartWidget /></Link>
        </ul>
    </nav>
  )
}
