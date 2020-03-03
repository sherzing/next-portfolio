// import React from 'react'
// import Link from 'next/link'
// class Header extends React.Component {

//     render() {
//         return (
//             <React.Fragment>   
            // <Link href="/">
            //     <a>Home</a>
            // </Link>
//             <Link href="/blogs">
//                 <a>Blogs</a>
//             </Link>
//             <Link href="/portfolios">
//                 <a>Portfolios</a>
//             </Link>
//             <Link href="/about">
//                 <a>About</a>
//             </Link>
//             <Link href="/cv">
//                 <a>CV</a>
//             </Link>
//             </React.Fragment>
//         )
//     }
// }

// export default Header



import React, { useState } from 'react'
import Link from 'next/link'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';

const HeadNavLink= (props) => {
    const { route, title } = props
    return (
        <Link href={route}>
            <a className="nav-link port-navbar-link">{title}</a>
        </Link>
    )
}

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="port-navbar port-default absolute" color="transparent" dark expand="md">
        <NavbarBrand className="port-navbar-brand" href="/">Sven</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="port-navbar-item">
                <HeadNavLink route="/" title="Home" />
            </NavItem>
            <NavItem className="port-navbar-item">
                <HeadNavLink route="/blogs" title="Blogs" />
            </NavItem>
            <NavItem className="port-navbar-item">
                <HeadNavLink route="/portfolios" title="Portfolios" />
            </NavItem>
            <NavItem className="port-navbar-item">
                <HeadNavLink route="/about" title="About" />
            </NavItem>
            <NavItem className="port-navbar-item">
                <HeadNavLink route="/cv" title="CV" />
            </NavItem>
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;