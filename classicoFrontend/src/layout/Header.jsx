import TopHeader from '../components/TopHeader.jsx'
import Navbar from '../components/Navbar.jsx'
const Header = () => {
    return (
        <div className='sticky top-0 z-50 bg-white border-b-2 border-purple-200'>
            <Navbar />
        </div>
    )
}

export default Header