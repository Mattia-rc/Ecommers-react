import { click } from '@testing-library/user-event/dist/click'
import React from 'react'
import { useContext } from 'react'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import { CartContext } from '../App'
export default function CartWidget() {

  return (
    <div>
        <AiOutlineShoppingCart/>   
    </div>
  )
}

