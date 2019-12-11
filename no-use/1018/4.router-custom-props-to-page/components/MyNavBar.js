import React from 'react'
import {
    Navbar,
    Nav,
    Form,
    Button,
    FormControl
  } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
// https://reacttraining.com/react-router/web/api/NavLink 特效(2.router-navlink-1)
// https://react-bootstrap.github.io/components/navbar/   <= 此例是react-bootstrap navbar樣式
// LinkContainer可以用的屬性和router-navlink-1的Navlink是一樣的 因為是Navlink擴充出來的
const MyNavbar = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">Router路由</Navbar.Brand>
                <Nav className="mr-auto">

                <LinkContainer to="/" exact>
                    <Nav.Link>首頁</Nav.Link>
                </LinkContainer>

                <LinkContainer to="/news" exact>
                    <Nav.Link>新聞</Nav.Link>
                </LinkContainer>

                <LinkContainer to="contact" exact>
                 <Nav.Link>聯絡</Nav.Link>
                </LinkContainer>

                </Nav>
                <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">搜尋</Button>
                </Form>
            </Navbar> 
        </>
    )
}

export default MyNavbar