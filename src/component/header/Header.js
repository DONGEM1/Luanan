import { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  Container,
} from 'reactstrap';
import logo from './logo.jpg';
import './Header.css';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle1 = () => setIsOpen(!isOpen);
  return (
    <div>
      <Container>
        <Navbar className='padding-top 4rem'>
          <div>
            {/* <NavbarBrand href="/" > <i class="fa-solid fa-bars"></i> DANH MỤC</NavbarBrand> */}
            <NavbarBrand href="/" ><i class="fa-solid fa-magnifying-glass"></i> TÌM KIẾM <input></input></NavbarBrand>
            <NavbarBrand href="/" > <i class="fa-regular fa-user"></i> ĐĂNG NHẬP</NavbarBrand>
          </div>

          <NavbarBrand href="/"><img style={{ width: "100px" }} src={logo} /></NavbarBrand>
          <div>
            <NavbarBrand href="/" >  <i class="fa-regular fa-heart"></i> YÊU THÍCH</NavbarBrand>
            <NavbarBrand href="/" > <i class="fa-solid fa-code-compare"></i> SOA SÁNH</NavbarBrand>
            <NavbarBrand href="/" > <i class="fa-regular fa-user"></i>  GIỎ HÀNG</NavbarBrand>
          </div>
          <NavbarToggler onClick={toggle1} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className=" me-auto" navbar>
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">
                  GitHub
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
            <NavbarText>Simple Text</NavbarText>
          </Collapse>
        </Navbar>
      </Container>

    </div>
  )
}