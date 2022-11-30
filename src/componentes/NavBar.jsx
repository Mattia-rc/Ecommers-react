import React from 'react'
import CartWidget from './CartWidget'
import { Link } from 'react-router-dom'
export default function NavBar() {
  return (
    <nav>
        
        <ul className='navFlex'>
        <Link to="/">Home</Link>
        <Link to="/category/keyboard">Keyboard</Link>
        <Link to="/category/Mouse">Mouses</Link>
        <Link to="/category/Mousepad">Mousepad</Link>
        <Link to="/category/Monitor">Monitores</Link>
      
          <Link to = ""><CartWidget /></Link>
        </ul>
    </nav>
  )
}
