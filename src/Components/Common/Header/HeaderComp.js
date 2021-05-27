import React from 'react';
import { Link } from 'react-router-dom';
import { Dropdown, Icon, Navbar, Nav } from 'rsuite';

const NavBarInstance = ({ onSelect, activeKey, ...props }) => {
  return (
    <Navbar {...props}>
      <Navbar.Body>
        <Nav onSelect={onSelect} activeKey={activeKey}>
          <Nav.Item>E-commece</Nav.Item>
          <Link to="/">
            <Nav.Item eventKey="1" icon={<Icon icon="home" />}>
              Home
            </Nav.Item>
          </Link>
          <Link to="/login">
            <Nav.Item eventKey="2">Login</Nav.Item>
          </Link>
          <Link to="/register">
            <Nav.Item eventKey="3">Register</Nav.Item>
          </Link>
          <Dropdown title="About">
            <Dropdown.Item eventKey="4">Company</Dropdown.Item>
            <Dropdown.Item eventKey="5">Team</Dropdown.Item>
            <Dropdown.Item eventKey="6">Contact</Dropdown.Item>
          </Dropdown>
        </Nav>
        <Nav pullRight>
          <Dropdown icon={<Icon icon="cog" />} title="Setting">
            <Dropdown.Item icon={<Icon icon="user-circle" />} eventKey="4">
              User
            </Dropdown.Item>
            <Dropdown.Item icon={<Icon icon="sign-out" />} eventKey="5">
              Logout
            </Dropdown.Item>
          </Dropdown>
        </Nav>
      </Navbar.Body>
    </Navbar>
  );
};

class HeaderComp extends React.Component {
  constructor(props) {
    super(props);
    this.handleSelect = this.handleSelect.bind(this);
    this.state = {
      activeKey: null,
    };
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey,
    });
  }
  render() {
    const { activeKey } = this.state;
    return (
      <div className="nav-wrapper">
        <NavBarInstance
          appearance="inverse"
          activeKey={activeKey}
          onSelect={this.handleSelect}
        />
      </div>
    );
  }
}

export default HeaderComp;
