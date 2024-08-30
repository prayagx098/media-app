import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import {

  MDBIcon

} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>

    <Navbar style={{position:'stickey', width:"100%",zIndex:1}} className="bg-dark">
        <Container>
          <Navbar.Brand href='' className='fw-bolder fs-3' >
          <Link style={{textDecoration:'none'}} to={'/'} >
            <h2 className='text-white' style={{ fontSize : '70px'}}>            
              <img alt="" src="/pngegg.png" width="90" height="90" className="d-inline-block align-top"/>
              {' '}MER<span className='text-secondary' style={{ display: 'inline-block', transform: 'rotate(180deg)' ,fontSize:'60px'}}>K</span>URY
            </h2>
          </Link>
            
          </Navbar.Brand>

          <InputGroup className="mb-3" style={{ width: '500px' }}>

            <InputGroup.Text id="basic-addon1"><MDBIcon fas icon="search" /></InputGroup.Text>
            <Form.Control placeholder="Search latest . . ." aria-label="Username" aria-describedby="basic-addon1" />
          
          </InputGroup>

        </Container>
      </Navbar>
    </div>
  )
}

export default Header
