import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = ({ user }) => {
  const authenticatedOptions = (
    <>
        <NavLink className="link" to="/admin/add-product">Add Product</NavLink>
        <NavLink className="link" to="/admin/sign-out">Sign Out</NavLink>
    </>
  )
  const unauthenticatedOptions = (
    <>
        <NavLink className="link" to="/admin/sign-up">Sign Up</NavLink>
        <NavLink className="link" to="/admin/sign-in">Login</NavLink>
    </>
  )
  const alwaysOptions = (
    <>
        <NavLink className="link" to="/admin/products">Products</NavLink>
    </>
  )
  return (
    <div className='Nav'>
      <NavLink className="logo" to="/admin">FreshDirect Admin</NavLink>
      <div className='links'>
        {user && <div className="link welcome">Welcome, {user.username}</div>}
        {alwaysOptions}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </div>
    </div >
  )
}

export default Nav
