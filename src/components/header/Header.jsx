import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
      <Link to='/'>home</Link>
      <Link to='about'>about</Link>
      <Link to='basket'>basket</Link>
      <Link to='cardsPrduct'>cards product</Link>
      <Link to='catalog'>catalog</Link>
      <Link to='delPay'>delivery payment</Link>
      <Link to='faq'>faq</Link>
      <Link to='mistake'>mistake</Link>
      <Link to='notFound'>not found 404</Link>
      <Link to='order'>order</Link>
      <Link to='success'>success</Link>
    </div>
  )
}

export default Header