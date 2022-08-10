import { Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Header = () => (
    <Nav activeKey = '/home'>
        <Nav.Item>
            <Link to = '/'>Home</Link>
        </Nav.Item>

        <Nav.Item>
            <Link to='/about' >About</Link>
        </Nav.Item>
                    
        <Nav.Item>
            <Link to='/contact' >Contact</Link>
        </Nav.Item>
    </Nav>
)

export default Header

