import React, {Component} from 'react';
import {Navbar, NavbarBrand, Container} from 'reactstrap';

class AppNavbar extends Component {
  state = {
    isOpen: false
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/">List</NavbarBrand>
        </Container>
      </Navbar>
    </div>
    );
  }
}

export default AppNavbar