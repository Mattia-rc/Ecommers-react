import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <nav>
        
        <ul className='navFlex'>
        <Link to="/">Ver todos</Link>
        <Link to="/category/keyboard">Keyboard</Link>
        <Link to="/category/Mouse">Mouses</Link>
        <Link to="/category/Mousepad">Mousepad</Link>
        <Link to="/category/Monitor">Monitores</Link>
       
          <CartWidget />
        </ul>
    </nav>
  )
}
