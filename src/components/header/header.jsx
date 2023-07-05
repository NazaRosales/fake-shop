import './header.css'
import { Link } from 'react-router-dom'
export default function Header() {
    return <header className="navBar">
        <Link to="/" className='links'>Inicio</Link>
        <label className='labelSearch'>Search:</label>
        <input type="text" />
        <Link to="/" className='links'>🔍︎</Link>
        <Link to="/cart" className='links'>Cart</Link>
    </header>
}