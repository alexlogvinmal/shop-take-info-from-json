import './header.css';
import { Link } from 'react-router-dom';
export function Header() {

  return (
    <div className='header'>
    <Link className='menu' to={`/`}>Home</Link>
    <Link className='menu' to={`/delivery`}>Delivery</Link>
    <Link className='menu' to={`/about`}>About</Link>
    <Link className='menu' to={`/buyerprotection`}>Buyer Protection</Link>
    </div>
    
  );
}