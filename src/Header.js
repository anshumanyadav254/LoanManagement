import React, { Component } from 'react';
import { Navbar, NavbarBrand, Nav, NavItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import "./components/Header.css";


class Header extends Component {
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md" >
                    <NavbarBrand href="/">Loan Management System</NavbarBrand>
                    <Nav className="Nav" navbar>
                        <NavItem className="NavItem">
                        <Link className="Loans" to="/">Loans</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/api/addCustomer">CreateLoan</Link>
                        </NavItem>
                    </Nav>
                </Navbar>

            </div>
        );

    }

}


export default Header;
