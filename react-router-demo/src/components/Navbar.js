import { NavLink } from 'react-router-dom'

export const Navbar = () => {
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline'
    }
  }

  return (
    <nav className='primary-nav'>
      <NavLink to='/' style={navLinkStyles}>
        Home
      </NavLink>
      <NavLink to='/about' style={navLinkStyles}>
        About
      </NavLink>
      <NavLink to='/products' style={navLinkStyles}>
        Products
      </NavLink>
    </nav>
  )
}
