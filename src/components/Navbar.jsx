import logo from '/assets/logo.png'

export default function Navbar() {
    return (
        <nav className='navbar'>
            <div className='navbarWrapper'>
                <img src={logo} className='navLogo' />
            </div>
        </nav>
    )
}