import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul className='navbar-list'>
            <li className='navbaar-item'>
                <NavLink to="/" className="navbar-link">About</NavLink>
            </li>
            <li className='navbaar-item'>
                <NavLink to="/resume" className="navbar-link">Resume</NavLink>
            </li>
            <li className='navbaar-item'>
                <NavLink to="/portfolio" className="navbar-link">Portfolio</NavLink>
            </li>
            <li className='navbaar-item'>
                <NavLink to="/contato" className="navbar-link">Contato</NavLink>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar