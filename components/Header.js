import React, { useState } from 'react';
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import { APP_NAME } from '../config';
import { signout, isAuth } from '../actions/auth';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
import Search from './blog/Search';

Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    };

    return (
        <React.Fragment>
            <Navbar color="light" light expand="md" className="container-fluid" >
                <Link href="/">
                    <NavbarBrand  style={{ cursor: 'pointer' }} >{APP_NAME}</NavbarBrand>
                </Link>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="me-auto" navbar>
                        <React.Fragment>
                            <NavItem>
                                <Link href="/blogs">
                                    <NavLink style={{ cursor: 'pointer' }}>Blogs</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/contact">
                                    <NavLink style={{ cursor: 'pointer' }}>Contact</NavLink>
                                </Link>
                            </NavItem>
                        </React.Fragment>
                    </Nav>
                    <Nav className="ms-auto" navbar>
                        <NavItem>
                            <a href="/user/crud/blog" className="btn btn-primary text-light">Write a blog</a>
                        </NavItem>
                        {!isAuth() && (
                            <React.Fragment>
                                <NavItem>
                                    <Link href="/signin">
                                        <NavLink style={{ cursor: 'pointer' }}>Signin</NavLink>
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <Link href="/signup">
                                        <NavLink style={{ cursor: 'pointer' }}>Signup</NavLink>
                                    </Link>
                                </NavItem>
                            </React.Fragment>
                        )}
                        {/* {JSON.stringify(isAuth())} */}

                        {isAuth() && isAuth().role === 0 && (
                            <NavItem>
                                <Link href="/user">
                                    <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>
                                </Link>
                            </NavItem>
                        )}

                        {isAuth() && isAuth().role === 1 && (
                            <NavItem>
                                <Link href="/admin">
                                    <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>
                                </Link>
                            </NavItem>
                        )}

                        {isAuth() && (
                            <NavItem>
                                <NavLink style={{ cursor: 'pointer' }} onClick={() => signout(() => Router.replace(`/signin`))}>
                                    Signout
                                    </NavLink>
                            </NavItem>
                        )}
                    </Nav>
                </Collapse>
            </Navbar>
            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2">
                        <Search />
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Header;
