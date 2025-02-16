import Images from '../Images/Images'
import './Navbar.css'

function Navbar() {
    return (
        <nav>
            <img className='nav-img' src={Images.phat}/>
            <div className='nav-title-container'>
                <a className='nav-title' href=''>SOCIAL</a>
                <a className='nav-title' href=''>BTW</a>
            </div>
            <img className='nav-img' src={Images.phat}/>
        </nav>
    )

}

export default Navbar