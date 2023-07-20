import brand_logo from '../../resources/brand_logo.png';

import './Navigation.css';

const Navigation = () => {
    return (
        <>
            <nav className='nav container'>
                <div className='nav_logo'>
                    <img src={brand_logo} alt='Brand Logo'/>
                </div>
                <ul className='nav_menu'>
                    <li href='#'>Menu</li>
                    <li href='#'>Location</li>
                    <li href='#'>About</li>
                    <li href='#'>Contact</li>
                </ul>
                <button type='button' className='btn btn_login'>Login</button>
            </nav>
        </>
    )
}

export default Navigation;