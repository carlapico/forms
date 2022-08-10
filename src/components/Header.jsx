import {Button, Nav} from 'react-bootstrap'

const Header = () => {
            {/* <h3>this is header</h3> */}
            {/* <Button variant='dark'>This is bootstrap button </Button> */}
            <Nav activeKey = 'home'>
                    <Nav.Item>
                        <Nav.Link href="/home">Active</Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link eventKey="About-1">About</Nav.Link>
                    </Nav.Item>
                    
                    <Nav.Item>
                        <Nav.Link eventKey="link-2">Contact</Nav.Link>
                    </Nav.Item>
             </Nav>
}

export default Header