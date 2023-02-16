import {Navbar,Container,Nav, Button} from 'react-bootstrap'

import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logOut } from '../Redux/UserSlice'

const NavBar = () => {
  const navigate = useNavigate()
  const isAuth = localStorage.getItem('isAuth')
  const dispatch = useDispatch()
  return (
    <div>
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            {isAuth ? <>
              <Nav.Link as={Link} to="/Profile">Profile</Nav.Link>
            <Button onClick={()=> {dispatch(logOut())
                                   navigate('/')
            }} variant='light'>LogOut</Button>
            </> :
             
            <>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
            <Nav.Link as={Link} to="/">Login</Nav.Link>
            </>
}
            

          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar
